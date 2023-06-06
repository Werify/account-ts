export const handleResponse = async (response: Response) => {
  if (response.ok) {
    return await response.json();
  } else {
    const errorMessage = await response.text();
    return Promise.reject(errorMessage);
  }
};
