import prisma from "@/lib/prisma"

const generateSuggestedUsernames = async (
  baseUsername: string,
  numberOfSuggestions = 1
) => {
  let n = 1
  let first_init = true

  const suggestedUsernames = []

  let existingUser = await prisma.user.findUnique({
    where: { username: baseUsername },
  })

  if (!existingUser) {
    return [baseUsername]
  }

  !first_init && suggestedUsernames.push(baseUsername)

  first_init = false

  while (suggestedUsernames.length < numberOfSuggestions) {
    const suggestedUsername = `${baseUsername}${n}`

    existingUser = await prisma.user.findUnique({
      where: { username: suggestedUsername },
    })

    if (!existingUser && !suggestedUsernames.includes(suggestedUsername)) {
      suggestedUsernames.push(suggestedUsername)
    }

    n++
  }

  return suggestedUsernames
}

export default generateSuggestedUsernames
