export default function openEmail(
  email: string,
  platform: "web" | "sys" = "web"
) {
  if (platform === "sys") {
    return (window.location.href = "mailto:")
  }
  const domain = email.split("@")[1]
  if (!domain) return alert("Please provide email address")
  if (domain === "gmail.com") {
    window.open("https://mail.google.com/mail", "_blank")
  } else if (domain === "yahoo.com") {
    window.open("https://mail.yahoo.com", "_blank")
  } else if (
    domain === "outlook.com" ||
    domain === "hotmail.com" ||
    domain === "live.com"
  ) {
    window.open("https://outlook.live.com/mail/0/inbox", "_blank")
  } else {
    window.open("https://" + domain, "_blank")
  }
}


  // window.location.href = "fb://profile/123456789"
    // window.open("sms:1234567890")
    // return (window.location.href = "sms:")