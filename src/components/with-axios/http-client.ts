import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class HttpClient {
  private static instance: AxiosInstance;
  constructor() {
    if (!HttpClient.instance) {
      HttpClient.instance = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/users",
      });
    }
  }
  request(requestParam: AxiosRequestConfig) {
    return HttpClient.instance.request(requestParam);
  }
}

export const httpClient = new HttpClient();
