import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("counter App", () => {
  test("App Should render without fail", () => {
    const { getByTestId, getByText } = render(<App />);
    expect(getByTestId("Increment")).toBeInTheDocument();
    expect(getByTestId("Decrement")).toBeInTheDocument();
    expect(getByTestId("inputbox")).toBeInTheDocument();

    expect(getByText(/Increment/)).toBeInTheDocument();
    expect(getByText(/Decrement/)).toBeInTheDocument();
  });

  test("Input should accept only number", () => {
    const { getByTestId, getByText } = render(<App />);
    const input = getByTestId("inputbox");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(getByText(/Not a valid Number/)).toBeInTheDocument();
  });

  test("Increment button should increment the input value", () => {
    const { getByTestId, getByText } = render(<App />);
    const intementBtn = getByTestId("Increment");
    fireEvent.click(intementBtn);
    expect(getByTestId("inputbox")).toHaveValue("1");
  });

  test("Decrement button should decrement the input value", () => {
    const { getByTestId, getByText } = render(<App />);
    const decmentBtn = getByTestId("Decrement");
    const input = getByTestId("inputbox");
    fireEvent.change(input, { target: { value: "21" } });
    fireEvent.click(decmentBtn);
    expect(getByTestId("inputbox")).toHaveValue("20");
  });

  test("Should reset to max value for more than max input", () => {
    const { getByTestId, getByText } = render(<App />);
    const input = getByTestId("inputbox");
    const intementBtn = getByTestId("Increment");
    fireEvent.change(input, { target: { value: "121" } });
    expect(getByTestId("inputbox")).toHaveValue("100");
    expect(intementBtn).toBeDisabled();
  });

  test("Should reset to default value 0  for negative input", () => {
    const { getByTestId, getByText } = render(<App />);
    const input = getByTestId("inputbox");
    const decmentBtn = getByTestId("Decrement");
    fireEvent.change(input, { target: { value: "-11" } });
    expect(getByTestId("inputbox")).toHaveValue("0");
    expect(decmentBtn).toBeDisabled();
  });
});
