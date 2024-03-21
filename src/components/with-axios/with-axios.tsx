import { useEffect, useState } from "react";
import { httpClient } from "./http-client";

export const WithAxiosComponent = () => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  const get = async () => {
    setLoading(true);
    const response = await httpClient.request({
      params: {
        limit: 1,
      },
    });

    setData(() => {
      setLoading(false);
      return response.data[0];
    });
  };

  useEffect(() => {
    get();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return <div>{data && <h1>{data.name}</h1>}</div>;
};
