export default function formatMillisecondsToTime(milliseconds: number) {
  const timeInMilliseconds = Math.abs(milliseconds) // Ensure positive value for time
  const date = new Date(timeInMilliseconds)

  // Customize the format as per your requirements
  const options = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false, // Use 24-hour time format
  }

  const timeString = new Intl.DateTimeFormat(undefined, options).format(date)
  return timeString
}
