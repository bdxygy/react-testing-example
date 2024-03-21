import { render, screen } from "@testing-library/react";
import { WithConditionalComponent } from "./with-conditional";
import userEvent from "@testing-library/user-event";

describe("With Conditional Component", () => {
  test("Component Successfully rendering", () => {
    const { container } = render(<WithConditionalComponent />);

    expect(container).toBeInTheDocument();
  });

  test("Change State Display Successfully Cahgend", async () => {
    const user = userEvent.setup();

    render(<WithConditionalComponent />);

    await user.click(screen.getByText("Change to Display"));

    expect(screen.getByText("To Display")).toBeInTheDocument();
  });
});
