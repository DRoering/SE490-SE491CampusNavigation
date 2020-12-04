import { Moment } from "moment";
import { useEffect, useState } from "react";
import { Strings, get, Service } from "..";

interface Params {
  api_key?: string;
  filterByFormula: string;
  maxRecords: number;
  sort?: string;
}

interface ApiResponse {
  id: string;
  fields: Service;
  createdTime: Moment | string;
}

const { apiUrl, apiKey } = Strings;

const sortString = "&sort[0][field]=serviceId&sort[0][direction]=asc";

const getServices = (setServices: (s: Service[]) => void, params: Params) => {
  get<{ records: ApiResponse[] }>(`${apiUrl}BuildingServices`, params)
    .then((response) => {
      console.log("Building response: ", response);
      const rawItems: Service[] = [];

      response.data.records.forEach((record) => {
        rawItems.push(record.fields);
      });

      setServices(rawItems);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const useServices = (params: Params): [Service[], boolean] => {
  const [services, setServices] = useState<Service[]>([]);

  console.log(params);

  useEffect(() => {
    let cancel = false;
    if (!cancel)
      getServices(setServices, {
        api_key: apiKey,
        ...params,
      });

    return () => {
      cancel = true;
    };
  }, [params.maxRecords]);

  return [services, params.maxRecords != services.length];
};
