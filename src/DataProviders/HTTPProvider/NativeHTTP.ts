import { HTTPResponse } from "./HTTPInterface";
import { HTTP } from "@ionic-native/http";

export const NativeHTTP = {
  get<RData>(
    url: string,
    params?: { [i: string]: string }
  ): Promise<HTTPResponse<RData>> {
    return new Promise<HTTPResponse<RData>>(
      (successCallback, errorCallback) => {
        if (params) {
          const paramArray = [];
          for (const i in params) {
            paramArray.push(`${i}=${encodeURIComponent(params[i])}`);
          }
          if (!url.includes("?")) url += "?";
          url += paramArray.join("&");
        }

        HTTP.get(url, {}, {})
          .then((data) => {
            successCallback({
              success: data.status === 200,
              message: data.error || "",
              data: data.data && JSON.parse(data.data),
            });
          })
          .catch((error) => {
            console.error(error.error);
            errorCallback({
              success: false,
              message: error.error || "",
              data: error.data,
            });
          });
      }
    );
  },

  post<RData>(
    url: string,
    data: Record<string, unknown>
  ): Promise<HTTPResponse<RData>> {
    return new Promise<HTTPResponse<RData>>(
      (successCallback, errorCallback) => {
        HTTP.post(url, data, {})
          .then((data) => {
            successCallback({
              success: data.status === 200,
              message: data.error || "",
              data: data.data,
            });
          })
          .catch((error) => {
            errorCallback({
              success: false,
              message: error.error || "",
              data: error.data,
            });
          });
      }
    );
  },
};
