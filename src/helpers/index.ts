export const FALLBACK = "N/A" // null or N/A
export const LOCALE = undefined //undefined (auto locale), "ar" "fr", en-US...
export const DATE_LENGTH = "short" //undefined (auto locale), "ar" "fr", en-US...

export const word = (input: string) => {
  if (!input) return FALLBACK
  return input.length <= 3
    ? input
    : input
        .toLowerCase()
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}

export const enumToOptions = (Enum: any) => {
  const options = []

  for (const key in Enum) {
    options.push({
      label: word(key),
      value: key,
    })
  }

  return options
}
