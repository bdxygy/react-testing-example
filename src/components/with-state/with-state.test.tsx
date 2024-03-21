import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { WithStateComponent } from "./with-state";

describe("With State Component", () => {
  test("Component Successfully rendering", () => {
    const { container } = render(<WithStateComponent />);

    expect(container).toBeInTheDocument();
  });

  test("Changed State", async () => {
    const user = userEvent.setup();

    render(<WithStateComponent />);

    await user.click(screen.getByRole("button", { name: "Change Title" }));

    expect(screen.getByText("Title Changed")).toBeInTheDocument();
  });
});
