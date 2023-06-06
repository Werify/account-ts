export interface IApiResponse {
  message: string;
  succeed: boolean;
  metas: any;
}

export const handleResponse = async (response: Response) => {
  if (response.ok) {
    return (await response.json()) as IApiResponse;
  } else {
    const errorMessage = await response.text();
    return Promise.reject(errorMessage);
  }
};
