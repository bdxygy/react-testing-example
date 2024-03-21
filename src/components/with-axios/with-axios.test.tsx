import { render, screen, waitFor } from "@testing-library/react";
import { WithAxiosComponent } from "./with-axios";
import { httpClient } from "./http-client";

jest.mock("./http-client", () => ({
  httpClient: {
    request: jest.fn().mockReturnValue({
      data: [
        {
          name: "test",
        },
      ],
    }),
  },
}));

describe("With Axios Component", () => {
  test("Component Successfully rendering", async () => {
    const { queryByText, getByText, container } = render(
      <WithAxiosComponent />
    );
    expect(container).toBeInTheDocument();
    expect(queryByText("Loading...")).toBeTruthy();
    expect(httpClient.request).toHaveBeenCalled();

    await waitFor(() => expect(getByText("test")).toBeInTheDocument());
  });
});
