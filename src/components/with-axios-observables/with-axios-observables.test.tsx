import { render, screen, waitFor } from "@testing-library/react";
import { WithAxiosObservablesComponent } from "./with-axios-observables";
import { httpClientObservables } from "./http-client-observables";
import { Subject, of, throwError } from "rxjs";

jest.mock("./http-client-observables", () => ({
  httpClientObservables: {
    request: jest.fn().mockImplementation(() =>
      of([
        {
          name: "Observable test",
        },
      ])
    ),
  },
}));

describe("With Axios Observables Component", () => {
  test("Component Successfully rendering", () => {
    const { container } = render(<WithAxiosObservablesComponent />);
    expect(container).toBeTruthy();
  });

  test("Statefull success", async () => {
    render(<WithAxiosObservablesComponent />);
    expect(httpClientObservables.request).toHaveBeenCalled();
  });

  test("Statefull error", async () => {
    (httpClientObservables.request as jest.Mock).mockImplementation(() =>
      throwError(() => new Error("error"))
    );
    render(<WithAxiosObservablesComponent />);
    expect(httpClientObservables.request).toHaveBeenCalled();
  });
});
