// File: /data/api.js
import CONFIG from "../config";

const ENDPOINTS = {
  BASE: CONFIG.BASE_URL,
  LOGIN: `${CONFIG.BASE_URL}/api/auth/login`,
  REGISTER: `${CONFIG.BASE_URL}/api/auth/register`,
  PROFILE: `${CONFIG.BASE_URL}/api/auth/me`,
  UPDATEPROFILE: (id) => `${CONFIG.BASE_URL}/api/auth/me/${id}`,
  PREDICT: `${CONFIG.BASE_URL}/api/predict`, //untuk guest -> ditampilkan di landing page
  HISTORY : `${CONFIG.BASE_URL}/api/predictions`,
  HISTORY_BY_ID: (id) => `${CONFIG.BASE_URL}/api/predictions/${id}`,
  DELETE_HISTORY: (id) => `${CONFIG.BASE_URL}/api/predictions/${id}`,
  PREDICTION: `${CONFIG.BASE_URL}/api/predictions`,
  PREDICTION_DETAIL: (id) => `${CONFIG.BASE_URL}/api/predictions/${id}`
};

// Login user
export async function login({ email, password }) {
  try {
    const response = await fetch(ENDPOINTS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Login gagal");
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
}

// Register user
export async function register({ name, email, password }) {
  try {
    const response = await fetch(ENDPOINTS.REGISTER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        data: { name },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Registrasi gagal");
    }

    return await response.json(); // { message, user }
  } catch (error) {
    throw error;
  }
}

// Get user profile from token
export async function getProfile(token) {
  try {
    const response = await fetch(ENDPOINTS.PROFILE, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Gagal memuat profil");
    }

    return await response.json(); // { user }
  } catch (error) {
    throw error;
  }
}

// Update user profile
export async function updateProfile({ id, token, email, password, data }) {
  try {
    const response = await fetch(ENDPOINTS.UPDATEPROFILE(id), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        ...(email && { email }),
        ...(password && { password }),
        ...(data && { data }),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Gagal memperbarui profil");
    }

    return await response.json(); // { message, user }
  } catch (error) {
    throw error;
  }
}

// Guest prediction (non-auth)
export async function predictStuntingGuest({ gender, age, height, weight }) {
  try {
    const response = await fetch(ENDPOINTS.PREDICT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
      throw new Error(error.error || "Prediksi gagal");
    }

    return await response.json(); // hasil prediksi
  } catch (error) {
    throw error;
  }
}

// Authenticated prediction (user login required)
export async function predictStuntingUser({ token, gender, age, height, weight, child_id = null }) {
  try {
    const response = await fetch(ENDPOINTS.PREDICTION, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        gender,
        age,
        height,
        weight,
        ...(child_id && { child_id }), // optional, only added if not null
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Prediksi gagal");
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
}


export async function getPredictionHistory(token) {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('Token tidak ditemukan. Silakan login terlebih dahulu.');
    }

    const response = await fetch(ENDPOINTS.HISTORY, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Gagal memuat riwayat");
    }

    return await response.json(); // { user }
  } catch (error) {
    throw error;
  }
}

export async function getPredictionHistoryById(id, token) {
  try {
    const token = sessionStorage.getItem('token');

    if (!token) {
      throw new Error('Token tidak ditemukan. Silakan login terlebih dahulu.');
    }

    const response = await fetch(ENDPOINTS.HISTORY_BY_ID(id), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Gagal memuat riwayat");
    }

    return await response.json(); // { user }
  } catch (error) {
    throw error;
  }
}

export async function deletePredictionHistoryById(id, token) {
  try {
    const response = await fetch(ENDPOINTS.DELETE_HISTORY(id), {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || "Gagal menghapus riwayat");
    }

    return await response.json(); // { message }
  } catch (error) {
    throw error;
  }
}

export async function predictStuntingWithAuth({ child_id = null, gender, age, height, weight }) {
  try {
    const token = sessionStorage.getItem('token');

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

    const response = await fetch(ENDPOINTS.PREDICTION, {
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
export default {
  login,
  register,
  getProfile,
  updateProfile,
  predictStuntingGuest,
  predictStuntingUser,
  getPredictionHistory,
  getPredictionHistoryById,
  deletePredictionHistoryById,
};
