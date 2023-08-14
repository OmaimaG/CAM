import prisma from "@/lib/prisma"
import { User } from "@prisma/client"
import speakeasy from "speakeasy"

export default async function verify2FACode(user: User, otp_code: string) {
  try {
    // Find the OTP record in the database
    const otpRecord = await prisma.otp.findFirst({
      where: { user_id: user.id },
      orderBy: { createdAt: "desc" },
    })

    if (!otpRecord) {
      throw new Error("OTP record not found")
    }

    // Verify the OTP code
    const isMatch = speakeasy.totp.verify({
      secret: otpRecord.secret,
      encoding: "base32",
      token: otp_code,
    })

    if (!isMatch) {
      throw new Error("Invalid OTP code")
    }

    // Mark the OTP record as used
    await prisma.otp.update({
      where: { id: otpRecord.id },
      data: { counter: otpRecord.counter + 1 },
    })

    return isMatch
  } catch (error) {
    throw error
  }
}

// updated user phone_verified to date if user is verified
