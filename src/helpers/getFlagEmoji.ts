export default function getFlagEmoji(countryCode: string) {
  if (!countryCode) return
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt())
  return String.fromCodePoint(...codePoints)
}
