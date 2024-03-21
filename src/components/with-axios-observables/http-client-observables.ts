import { Subject } from "rxjs";
import { httpClient } from "../with-axios/http-client";
import { AxiosError, AxiosRequestConfig } from "axios";

class HttpClientObservables {
  request(requestParam: AxiosRequestConfig) {
    const subject = new Subject();

    httpClient
      .request(requestParam)
      .then(({ data }) => subject.next(data))
      .catch(({ response }: AxiosError) => {
        subject.error(response?.data);
      })
      .finally(() => subject.complete());

    return subject;
  }
}

export const httpClientObservables = new HttpClientObservables();
