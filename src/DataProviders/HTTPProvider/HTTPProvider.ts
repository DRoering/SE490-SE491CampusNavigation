import { HTTP } from "./HTTP";
import { NativeHTTP } from "./NativeHTTP";
import { HTTPResponse } from "./HTTPInterface";
import { isPlatform } from "@ionic/core";

export function get<RData>(
  url: string,
  params?: unknown
): Promise<HTTPResponse<RData>> {
  return isPlatform("hybrid")
    ? NativeHTTP.get(url, params as { [i: string]: string })
    : HTTP.get(url, params);
}

export function post<RData>(
  url: string,
  data: Record<string, unknown>
): Promise<HTTPResponse<RData>> {
  return isPlatform("hybrid")
    ? NativeHTTP.post(url, data)
    : HTTP.post(url, data);
}
