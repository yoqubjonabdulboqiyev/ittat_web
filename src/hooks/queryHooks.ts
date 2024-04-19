import { useQuery, UseQueryOptions } from "react-query";
import { useMutation, UseMutationOptions } from "react-query";
import { AxiosResponse } from "axios";
import { MethodProps } from "../utilities/types";
import api from "../fetchapi";

const useApi = <Data = any, Error = any>(
  url: string,
  params: object = {},
  options: UseQueryOptions<AxiosResponse<Data>, Error> = {}
) =>
  // @ts-ignore
  useQuery([url, params], async () => api.get<Data>(url, { params }), {
    ...options,
  });

const useApiMutation = <Variables = any, Response = any, Error = any>(
  url: string,
  method: MethodProps,
  // @ts-ignore
  options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
  useMutation<AxiosResponse<Response>, Error, Variables>(
    (data: any) => {
      const response = api({ url, method, data });
      return response;
    },
    // @ts-ignore
    { ...options }
  );
const useRequest = <Variables = any, Response = any, Error = any>(
  url: string,
  method: MethodProps,
  // @ts-ignore
  options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
  useMutation<AxiosResponse<Response>, Error, Variables>(
    (data: any) => {
      const response = api({ url, method, data });
      return response;
    },
    // @ts-ignore
    { ...options }
  );

const useApiMutationWithId = <Variables = any, Response = any, Error = any>(
  url: string,
  method: MethodProps,
  // @ts-ignore
  options: UseMutationOptions<AxiosResponse<Response>, Error, Variables> = {}
) =>
  useMutation<AxiosResponse<Response>, Error, Variables>(
    ({ id, data }: any) => {
      url = id ? url + "?id=" + id : url;
      const response = api({ url, method, data });
      return response;
    },
    // @ts-ignore
    { ...options }
  );

export { useApi, useApiMutation, useApiMutationWithId };
