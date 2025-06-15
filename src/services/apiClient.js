import { getAccessToken, refreshToken, clearTokens } from './authService';

export async function fetchWithAuth(path, init = {}) {
  const url = path.startsWith('/api') ? path : `/api${path}`;
  const token = getAccessToken();

  init.headers = {
    'Content-Type': 'application/json',
    ...(init.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };

  let res = await fetch(url, init);

  if (res.status === 401) {
    try {
      const newAccess = await refreshToken();
      init.headers.Authorization = `Bearer ${newAccess}`;
      res = await fetch(url, init);
    } catch {
      clearTokens();
      window.location.href = '/signin';
      throw new Error('Сессия истекла, повторный вход обязателен');
    }
  }

  return res;
}
