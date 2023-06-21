export async function apiRequest(
  method: string,
  url: string,
  data?: any,
): Promise<any> {
  const requestOptions: RequestInit = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    if (method === 'GET') {
      const queryParams = new URLSearchParams(data);
      url += `?${queryParams.toString()}`;
    } else {
      requestOptions.body = JSON.stringify(data);
    }
  }

  const response = await fetch(url, requestOptions);
  return parseJsonResponse(response);
}

// Function to parse the JSON response
export async function parseJsonResponse(response: Response): Promise<any> {
  let json: any = null;
  try {
    json = await response.json();
  } catch (e) {
    // TODO Do something if response has no, or invalid JSON
    // For example, you can log an error message or
    // perform specific error handling
    // handle error
  }

  if (response.ok) {
    return json;
  } else {
    const error = new Error(response.statusText);
    (error as any).isFromServer = true;
    (error as any).response = response;
    (error as any).responseJson = json;

    throw error;
  }
}
