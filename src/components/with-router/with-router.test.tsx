import { render, screen } from "@testing-library/react";
import { WithRouterComponent as WR } from "./with-router";
import userEvent from "@testing-library/user-event";
import React from "react";
import { AppRouterContextProviderMock } from "@unit-test-app-pnpm/__test__/router-provider.test";

describe("With Router Component", () => {
  test("Component Successfully rendering", () => {
    const push = jest.fn();
    const { container } = render(
      <AppRouterContextProviderMock router={{ push }}>
        <WR />
      </AppRouterContextProviderMock>
    );

    expect(container).toBeInTheDocument();
  });

  test("redirect", async () => {
    const user = userEvent.setup();
    const push = jest.fn();
    render(
      <AppRouterContextProviderMock router={{ push }}>
        <WR />
      </AppRouterContextProviderMock>
    );

    await user.click(screen.getByRole("button", { name: "Redirect" }));
    expect(push).toHaveBeenCalled();
  });
});
