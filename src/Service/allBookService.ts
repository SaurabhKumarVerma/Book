import { IItems } from "../types/apiresponse.interface";
import RestApiService from "./api";

export const getAllBook = (start: number, end: number) => {
  return RestApiService.get<IItems>(
    `?printType=all&startIndex=${start}&maxResults=${end}&printType=all&projection=full&q=all`
  );
};

export const search = (text: string) => {
  return RestApiService.get(`?q=${text}`);
};
