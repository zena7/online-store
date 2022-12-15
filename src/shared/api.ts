const API_URL = '';

const api = {
  get: <T = any>(url: string, options: RequestInit): Promise<T> =>
    fetch(`${API_URL}/${url}`, {
      ...options,
      method: 'GET',
    }).then((response) => response.json()),

  post: <T = void>(url: string, options: RequestInit): Promise<T> =>
    fetch(`${API_URL}/${url}`, {
      ...options,
      method: 'POST',
    }).then((response) => response.json()),

  delete: <T = void>(url: string, options: RequestInit): Promise<T> =>
    fetch(`${API_URL}/${url}`, {
      ...options,
      method: 'DELETE',
    }).then((response) => response.json()),

  put: <T = void>(url: string, options: RequestInit): Promise<T> =>
    fetch(`${API_URL}/${url}`, {
      ...options,
      method: 'PUT',
    }).then((response) => response.json()),
};

export default api;
