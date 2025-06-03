import RiwayatPresenter from "./riwayat-presenter";
import { NotificationHelper } from "../../../utils/notification-helper.js";
export default class RiwayatView {
  constructor() {
    this.presenter = RiwayatPresenter;
  }

  async render() {
    return `
      <div id="main-content" class="bg-[#F4FFEF] min-h-screen pt-24 pb-10 px-4 transition-all duration-300 ease-in-out">
        <div class="bg-white p-4 m-4">
          <p class="text-2xl font-bold">Riwayat</p>
        </div>
        <section class="p-4 m-4 bg-white">
          <div class="overflow-x-auto">
            <table class="w-full text-sm border-collapse">
              <thead class="bg-green-600 text-white">
                <tr>
                  <th class="p-2 text-left">Tanggal</th>
                  <th class="p-2 text-left">Gender</th>
                  <th class="p-2 text-left">Umur</th>
                  <th class="p-2 text-left">Tinggi</th>
                  <th class="p-2 text-left">Berat</th>
                  <th class="p-2 text-left">Status</th>
                  <th class="p-2 text-left">Aksi</th>
                </tr>
              </thead>
              <tbody id="history-table-body" class="text-gray-700"></tbody>
            </table>
          </div>
        </section>

        <!-- Modal Detail -->
        <div id="modal-detail" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-2xl p-6">
            <h2 class="text-xl font-bold mb-4">Detail Riwayat</h2>
            <div id="modal-detail-content"></div>
            <div class="text-right mt-4">
              <button id="close-detail" class="px-4 py-2 bg-green-600 text-white rounded">Tutup</button>
            </div>
          </div>
        </div>

        <!-- Modal Delete -->
        <div id="modal-delete" class="fixed inset-0 z-50 hidden bg-black bg-opacity-50 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-lg w-11/12 max-w-sm p-6">
            <h2 class="text-lg font-bold mb-4">Hapus Riwayat</h2>
            <p>Apakah kamu yakin ingin menghapus riwayat ini?</p>
            <div class="flex justify-end gap-2 mt-6">
              <button id="confirm-delete" class="px-4 py-2 bg-red-600 text-white rounded">Hapus</button>
              <button id="cancel-delete" class="px-4 py-2 bg-gray-300 text-black rounded">Batal</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  async showTable(data) {
    const tbody = document.getElementById("history-table-body");

    if (!data.length) {
      tbody.innerHTML = `<tr><td colspan="7" class="p-4 text-center text-gray-500">Tidak ada data riwayat.</td></tr>`;
      return;
    }

    tbody.innerHTML = data
      .map((row) => {
        const created = new Date(row.created_at).toLocaleDateString();
        return `
          <tr class="border-b">
            <td class="p-2">${created}</td>
            <td class="p-2">${row.gender}</td>
            <td class="p-2">${row.age}</td>
            <td class="p-2">${row.height} cm</td>
            <td class="p-2">${row.weight} kg</td>
            <td class="p-2">${row.status}</td>
            <td class="p-2 flex gap-2">
              <button class="text-green-600 hover:underline" data-action="detail" data-id="${row.id}">👁️</button>
              <button class="text-red-600 hover:underline" data-action="delete" data-id="${row.id}">🗑️</button>
            </td>
          </tr>
        `;
      })
      .join("");

    this.bindEvents();
  }

  bindEvents() {
    document.querySelectorAll("[data-action='detail']").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.presenter?.handleShowDetail?.(btn.dataset.id);
      });
    });

    document.querySelectorAll("[data-action='delete']").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.presenter?.handleShowDeleteConfirm?.(btn.dataset.id);
      });
    });

    document.getElementById("close-detail")?.addEventListener("click", () => {
      document.getElementById("modal-detail")?.classList.add("hidden");
    });

    document.getElementById("cancel-delete")?.addEventListener("click", () => {
      document.getElementById("modal-delete")?.classList.add("hidden");
    });

    const confirmBtn = document.getElementById("confirm-delete");
    confirmBtn?.addEventListener("click", () => {
      const id = confirmBtn.dataset.id;
      this.presenter?.handleDelete?.(id);
    });
  }

  showDetailModal(data) {
    const modal = document.getElementById("modal-detail");
    const content = document.getElementById("modal-detail-content");
    content.innerHTML = this.renderDetailContent(data);
    modal.classList.remove("hidden");
  }

  renderDetailContent(data) {
    const nutrition = data.nutrition_recommendation || {};
    const additional = data.additional_info || {};

    return `
      <p><strong>Confidence:</strong> ${data.confidence}%</p>
      <p><strong>Rekomendasi:</strong> ${nutrition.description || "-"}</p>
      <p><strong>Notes:</strong> ${nutrition.notes || "-"}</p>
      <p><strong>Frekuensi Makan:</strong> ${nutrition.frequency || "-"}</p>
      <p><strong>Suplemen:</strong> ${nutrition.supplements || "-"}</p>
      <p><strong>Berat Ideal:</strong> ${additional.normal_weight?.toFixed(2) || "-"} kg</p>
      <p><strong>Tinggi Ideal:</strong> ${additional.normal_height?.toFixed(2) || "-"} cm</p>
      <p><strong>Penjelasan Berat:</strong> ${additional.weight_explanation || "-"}</p>
      <p><strong>Penjelasan Tinggi:</strong> ${additional.height_explanation || "-"}</p>
    `;
  }

  confirmDelete(id) {
    const modal = document.getElementById("modal-delete");
    const confirmBtn = document.getElementById("confirm-delete");
    confirmBtn.dataset.id = id;
    modal.classList.remove("hidden");
  }

  hideDeleteModal() {
    document.getElementById("modal-delete")?.classList.add("hidden");
  }

  showError(message) {
    NotificationHelper.showToast("Gagal memuat data", true)
  }; // error  }

  async afterRender() {
    const token = sessionStorage.getItem("token");

    this.presenter.init({
      view: this,
      token,
    });
  }
}
