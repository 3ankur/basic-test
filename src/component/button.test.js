import { render } from "@testing-library/react";
import Button from "./button";

describe("Button Component", () => {
  test("Should render without fail", () => {
    const { getByTestId } = render(
      <Button clickHandler={jest.fn()} name="testid" cssClassName="testclass" />
    );

    expect(getByTestId("testid")).toBeInTheDocument();
  });

  test("button should be disable for isDisable props", () => {
    const { getByTestId } = render(
      <Button
        clickHandler={jest.fn()}
        name="testid"
        cssClassName="testclass"
        isDisable={true}
      />
    );
    expect(getByTestId("testid")).toBeDisabled();
  });
});
