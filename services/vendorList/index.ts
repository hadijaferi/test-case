import {TReq, TRes} from "@/services/vendorList/TVendorList";
import Axios, { AxiosRequestConfig, AxiosResponse} from "axios";

export const api = Axios.create({
    baseURL: 'https://snappfood.ir/mobile/v3/restaurant/',
});

const request = {
    get: <T>(
        endpoint: string,
        options: AxiosRequestConfig = {},
    ): Promise<AxiosResponse<T>> => {
        return api.get(endpoint, options);
    },
}

export const getVendorList = async (body: {
  page: unknown;
  lat: string;
  long: string;
  page_size: number;
}) => {
  const { data }: { data: TRes } = await request.get("vendors-list", {
    params: body,
  });
  return data;
};
