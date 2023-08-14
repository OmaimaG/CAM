import generateSuggestedUsernames from "../generateSuggestedUsernames"

const extractNameParts = (name, cap = false) => {
  const sanitizedNames = name
    .replace(/\d/g, "")
    .trim()
    .split(/[\s_]+/)

  return cap || sanitizedNames.length === 2
    ? sanitizedNames
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .filter(Boolean)
    : sanitizedNames
}

const generatedUserInfo = async (
  email: string,
  {
    name,
    username,
    first_name,
    last_name,
  }: {
    name?: string
    username?: string
    first_name?: string
    last_name?: string
  } = {}
) => {
  username =
    username ||
    email
      .split("@")[0]
      .replace(/[^a-zA-Z0-9]/g, "_")
      .slice(0, 20)

  let [suggested_username] = await generateSuggestedUsernames(username)

  const name_parts = extractNameParts(username)

  return {
    email,
    username: suggested_username,
    first_name: first_name || name_parts[0],
    last_name: last_name || name_parts[1] || "",
    name: name || name_parts.join(" "),
  }
}

export default generatedUserInfo
