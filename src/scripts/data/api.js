import CONFIG from '../config';

const ENDPOINTS = {
  BASE: CONFIG.BASE_URL,
  LOGIN: `${CONFIG.BASE_URL}/api/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/api/auth/register`,
  PREDICT: `${CONFIG.BASE_URL}/api/predict`,
  PREDICTIONS: `${CONFIG.BASE_URL}/api/predictions`,
  PREDICTION_DETAIL: (id) => `${CONFIG.BASE_URL}/api/predictions/${id}`
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

export async function predictStuntingGuest({ gender, age, height, weight }) {
  try {
    const response = await fetch(ENDPOINTS.PREDICT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        gender,
        age,
        height,
        weight,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Prediksi gagal');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function predictStuntingWithAuth({ child_id = null, gender, age, height, weight }) {
  try {
    const token = sessionStorage.getItem('token');
    console.log('Token:', token);

    if (!token) {
      throw new Error('Token tidak ditemukan. Silakan login terlebih dahulu.');
    }

    const payload = {
      gender,
      age,
      height,
      weight,
    };

    console.log(payload);

    if (child_id !== null && child_id !== undefined) {
      payload.child_id = child_id;
    }

    const response = await fetch(ENDPOINTS.PREDICTIONS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Prediksi gagal');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export async function getPredictionHistory() {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('Token tidak ditemukan. Silakan login terlebih dahulu.');
    }

    const response = await fetch(ENDPOINTS.PREDICTIONS, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`, 
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Gagal mengambil riwayat prediksi');
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
}

export async function getPredictionById(id) {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('Token tidak ditemukan. Silakan login terlebih dahulu.');
    }

    const response = await fetch(ENDPOINTS.PREDICTION_DETAIL(id), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Gagal mengambil detail prediksi');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
}