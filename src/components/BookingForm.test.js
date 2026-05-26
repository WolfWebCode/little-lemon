import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockAvailableTimes = [
  "17:00",
  "18:00",
  "19:00"
];

const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

test("date input is required", () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const dateInput = screen.getByLabelText(/choose date/i);

  expect(dateInput).toHaveAttribute("required");
});

test("guests input has min and max attributes", () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const guestsInput = screen.getByLabelText(/number of guests/i);

  expect(guestsInput).toHaveAttribute("min", "1");
  expect(guestsInput).toHaveAttribute("max", "10");
});

test("occasion select exists", () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );

  const occasionSelect = screen.getByLabelText(/occasion/i);

  expect(occasionSelect).toBeInTheDocument();
});