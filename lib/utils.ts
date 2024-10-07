import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function convertTimestampToDateAndTime(timestamp:any) {
  // Create a Date object from the timestamp
  const date = new Date(timestamp);

  // Extract the date components
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Months are 0-based
  const day = date.getDate();

  // Extract the time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Format the date and time  

  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2,  
 '0')}:${seconds.toString().padStart(2, '0')}`;

  return { date: formattedDate, time: formattedTime };
}
export function extractPumpValues(message:any) {
  // Regex pattern to extract flow rate, total liters, and target liters
  const regex = /Flow Rate:\s*([\d.]+)\s*L\/min,\s*Total Liters:\s*([\d.]+)\s*TargetLitres:\s*([\d.]+)/;

  // Apply the regex to the message string
  const matches = message.match(regex);

  if (matches) {
      // Return the extracted values as an object
      return {
          flowRate: parseFloat(matches[1]),
          totalLiters: parseFloat(matches[2]),
          targetLitres: parseFloat(matches[3])
      };
  } else {
      // If no matches found, return null or an empty object
      return null;
  }
}