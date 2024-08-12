import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { RateForm, rateSchema } from "../RateForm";

describe("RateForm Component", () => {
  it("renders the form correctly", () => {
    render(<RateForm />);
    expect(screen.getByLabelText(/Age/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Driving Record/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Make/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Model/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Year/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
  });

  it("validates the rateSchema correctly", () => {
    const validData = {
      age: 30,
      drivingRecord: "clean",
      make: "Toyota",
      model: "Camry",
      year: 2020,
      location: "New York",
    };

    const invalidData = {
      age: 15, // Invalid age
      drivingRecord: "clean",
      make: "Toyota",
      model: "Camry",
      year: 2020,
      location: "New York",
    };

    expect(() => rateSchema.parse(validData)).not.toThrow();
    expect(() => rateSchema.parse(invalidData)).toThrow();
  });
});
