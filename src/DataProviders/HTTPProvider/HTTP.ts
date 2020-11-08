import { HTTPResponse } from "./HTTPInterface";
import axios from "axios";

export const HTTP = {
  get<RData>(url: string, params?: unknown): Promise<HTTPResponse<RData>> {
    return new Promise<HTTPResponse<RData>>(
      (successCallback, errorCallback) => {
        axios
          .get(url, { params })
          .then((data) => {
            successCallback({
              success: data.status === 200,
              message: data.statusText || "",
              data: data.data,
            });
          })
          .catch((error) => {
            console.error(error.error);
            errorCallback({
              success: false,
              message: error.statusText || "",
            });
          });
      }
    );
  },

  post<RData>(url: string, data: unknown): Promise<HTTPResponse<RData>> {
    return new Promise<HTTPResponse<RData>>(
      (successCallback, errorCallback) => {
        axios
          .post(url, data)
          .then((data) => {
            successCallback({
              success: data.status === 200,
              message: data.statusText || "",
              data: data.data,
            });
          })
          .catch((error) => {
            console.log(error.error);
            errorCallback({
              success: false,
              message: error.statusText || "",
            });
          });
      }
    );
  },
};
