import { useEffect, useState } from "react";
import { httpClientObservables } from "./http-client-observables";
import { tap } from "rxjs";

export const WithAxiosObservablesComponent = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const get = () => {
    httpClientObservables
      .request({
        params: {
          limit: 1,
        },
      })
      .pipe(tap(() => setLoading(true)))
      .subscribe({
        next: (data: any) => setData(data[0]),
        error: () => setLoading(false),
        complete: () => setLoading(false),
      });
  };

  useEffect(() => {
    get();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return <>{data && <div>Observables: {data.name}</div>}</>;
};
