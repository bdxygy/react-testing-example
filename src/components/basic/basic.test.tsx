import { render, screen } from "@testing-library/react";
import { BasicComponent } from "./basic";

describe("Basic Component", () => {
  test("Sucessfully render component", () => {
    render(<BasicComponent />);

    screen.getAllByRole("heading", {
      name: "Basic Component",
    });
  });
});
