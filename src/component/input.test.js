import { render } from "@testing-library/react";
import Input from "./input";

describe("Input Component", () => {
  test("Should render without fail", () => {
    const { getByTestId } = render(
      <Input
        changeHandler={jest.fn()}
        value={20}
        name="testInput"
        cssClassName="testclass"
      />
    );

    expect(getByTestId("testInput")).toBeInTheDocument();
    expect(getByTestId("testInput")).toHaveValue("20");
  });
});
