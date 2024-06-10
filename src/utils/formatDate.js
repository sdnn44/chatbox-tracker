export function convertDateTime(input) {
  if (input.startsWith("2024-")) {
    const date = new Date(input);
    console.log(date);
    return date;
  }
  const [dateTimePart, period, periodPart] = input.split(" ");

  const datePart = dateTimePart.split(" ")[0].split("/");
  const timePart = period.split(" ")[0].split(":");

  const month = parseInt(datePart[0], 10);
  const day = parseInt(datePart[1], 10);
  const year = "20" + datePart[2];

  let hours = parseInt(timePart[0], 10);
  const minutes = parseInt(timePart[1], 10);

  if (periodPart === "PM" && hours !== 12) {
    hours += 12;
  } else if (periodPart === "AM" && hours === 12) {
    hours = 0;
  }
  console.log(hours);
  console.log(minutes);

  const date = new Date(year, month - 1, day, hours, minutes);
  console.log(date);
  return date;
}
