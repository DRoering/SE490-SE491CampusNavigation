export interface HTTPResponse<RData> {
  success: boolean;
  message: string;
  data: RData;
}

export interface HTTP {
  get<RData = Record<string, unknown>>(
    url: string,
    params?: unknown
  ): Promise<HTTPResponse<RData>>;
  post<RData = Record<string, unknown>>(
    url: string,
    pdata: Record<string, unknown>
  ): Promise<HTTPResponse<RData>>;
}
