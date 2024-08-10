import { rateSchema } from "@/components/form/RateForm";
import { z } from "zod";

export async function calculateRate(
  data: z.infer<typeof rateSchema>,
): Promise<{ rate: number }> {
  // Validate data using the imported schema
  rateSchema.parse(data);

  // Simulate a delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Base rate
  const baseRate = 500;

  // Age factor
  const ageFactor = data.age < 25 ? 1.5 : data.age > 60 ? 1.2 : 1.0;

  // Driving record factor
  const recordFactor =
    data.drivingRecord === "clean"
      ? 1.0
      : data.drivingRecord === "accidents"
        ? 1.5
        : 1.3;

  // Car year factor
  const yearFactor = data.year < 2010 ? 1.2 : data.year > 2020 ? 0.9 : 1.0;

  // Location factor (example: urban areas might have higher rates)
  const locationFactor = ["New York", "Los Angeles", "Chicago"].includes(
    data.location,
  )
    ? 1.3
    : 1.0;

  // Make and model factor (example: luxury cars might have higher rates)
  const luxuryMakes = ["BMW", "Mercedes", "Audi"];
  const makeFactor = luxuryMakes.includes(data.make) ? 1.4 : 1.0;

  // Calculate the final rate
  const rate =
    baseRate *
    ageFactor *
    recordFactor *
    yearFactor *
    locationFactor *
    makeFactor;

  return { rate };
}
