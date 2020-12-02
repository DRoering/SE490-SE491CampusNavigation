import { Moment } from "moment";
import { useEffect, useState } from "react";
import { Strings, get, Service } from "..";

interface Params {
  api_key?: string;
  maxRecords: number;
  filterByFormula: (id: number) => string;
}

interface ApiResponse {
  id: string;
  fields: Service;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const getServices = (setServices: (s: Service[]) => void, params: Params) => {
  get<ApiResponse>(`${apiUrl}BuildingServices/`, params)
    .then((response) => {
      console.log("Building response: ", response);
      const rawItems = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useService = (params: Params): [Service[], boolean] => {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    let cancel = false;
    if (!cancel)
      getServices(setServices, {
        ...params,
        api_key: apiKey,
        filterByFormula: (id) => `Find("${id}"%2C+Buildings)`,
      });

    return () => {
      cancel = true;
    };
  }, [params.maxRecords]);

  return [services, params.maxRecords != services.length];
};
