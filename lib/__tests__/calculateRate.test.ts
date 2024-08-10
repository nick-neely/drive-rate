import { describe, expect, it } from "vitest";
import { calculateRate } from "../calculateRate";

describe("calculateRate", () => {
  it("should calculate rate for a young driver with a clean record", async () => {
    const data = {
      age: 22,
      drivingRecord: "clean" as "clean",
      make: "Toyota",
      model: "Camry",
      year: 2015,
      location: "Houston",
    };
    const result = await calculateRate(data);
    expect(result.rate).toBeCloseTo(750, 1);
  });

  it("should calculate rate for an older driver with accidents", async () => {
    const data = {
      age: 65,
      drivingRecord: "accidents" as "accidents",
      make: "Honda",
      model: "Civic",
      year: 2008,
      location: "Chicago",
    };
    const result = await calculateRate(data);
    expect(result.rate).toBeCloseTo(1404);
  });

  it("should calculate rate for a luxury car in an urban area", async () => {
    const data = {
      age: 45,
      drivingRecord: "clean" as "clean",
      make: "BMW",
      model: "X5",
      year: 2021,
      location: "New York",
    };
    const result = await calculateRate(data);
    expect(result.rate).toBeCloseTo(819, 1);
  });

  it("should calculate rate for a middle-aged driver with a poor record", async () => {
    const data = {
      age: 40,
      drivingRecord: "tickets" as "tickets",
      make: "Ford",
      model: "Focus",
      year: 2018,
      location: "Los Angeles",
    };
    const result = await calculateRate(data);
    expect(result.rate).toBeCloseTo(845, 1);
  });

  it("should calculate rate for a new car in a rural area", async () => {
    const data = {
      age: 30,
      drivingRecord: "clean" as "clean",
      make: "Chevrolet",
      model: "Malibu",
      year: 2022,
      location: "Austin",
    };
    const result = await calculateRate(data);
    expect(result.rate).toBeCloseTo(450, 1);
  });

  it("should fail if age is missing", async () => {
    const data = {
      drivingRecord: "clean" as "clean",
      make: "Toyota",
      model: "Camry",
      year: 2015,
      location: "Houston",
    } as any;
    await expect(calculateRate(data)).rejects.toThrow();
  });

  it("should fail if drivingRecord is invalid", async () => {
    const data = {
      age: 30,
      drivingRecord: "invalidRecord" as any,
      make: "Toyota",
      model: "Camry",
      year: 2015,
      location: "Houston",
    };
    await expect(calculateRate(data)).rejects.toThrow();
  });

  it("should fail if make is missing", async () => {
    const data = {
      age: 30,
      drivingRecord: "clean" as "clean",
      model: "Camry",
      year: 2015,
      location: "Houston",
    } as any;
    await expect(calculateRate(data)).rejects.toThrow();
  });

  it("should fail if model is missing", async () => {
    const data = {
      age: 30,
      drivingRecord: "clean" as "clean",
      make: "Toyota",
      year: 2015,
      location: "Houston",
    } as any;
    await expect(calculateRate(data)).rejects.toThrow();
  });

  it("should fail if year is missing", async () => {
    const data = {
      age: 30,
      drivingRecord: "clean" as "clean",
      make: "Toyota",
      model: "Camry",
      location: "Houston",
    } as any;
    await expect(calculateRate(data)).rejects.toThrow();
  });

  it("should fail if location is missing", async () => {
    const data = {
      age: 30,
      drivingRecord: "clean" as "clean",
      make: "Toyota",
      model: "Camry",
      year: 2015,
    } as any;
    await expect(calculateRate(data)).rejects.toThrow();
  });
});
