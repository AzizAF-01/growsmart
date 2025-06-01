import CONFIG from '../config';

const ENDPOINTS = {
  BASE: CONFIG.BASE_URL,
  LOGIN: `${CONFIG.BASE_URL}/api/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/api/auth/register`,
};

export async function login({ email, password }) {
  try {
    const response = await fetch(ENDPOINTS.LOGIN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Login gagal');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function register({ name, email, password }) {
  try {
    const response = await fetch(ENDPOINTS.REGISTER, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Registrasi gagal');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}
