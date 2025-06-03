export default class DashboardView {
  async render() {
    // Ambil data user dari sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("user"));
    const userName = userData?.name || "Pengguna";

    return `
        <div class="bg-[#F4FFEF] min-h-screen pt-24 pb-10 px-4 ">
          <div class="bg-[#ffffff] p-4 m-4">
            <p class="text-2xl font-bold">Halo ${userName}, Selamat Datang</p>
          </div>
          <section class="p-4 m-4 bg-[#ffffff]">
            <div class="flex justify-center mb-8 ">
              <div class="bg-yellow-300 text-yellow-800 text-2xl py-3 px-6 rounded-full font-semibold">
                Progres Tracking
              </div>
            </div>
  
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              ${[1, 2, 3]
                .map(
                  () => `
                  <div class="bg-white rounded-xl shadow-md p-4">
                    <div class="bg-green-400 rounded-md h-48 mb-2"></div>
                    <h2 class="text-lg font-semibold text-gray-800">Normal</h2>
                    <p class="text-sm text-gray-500">Di kalkulasi pada 13 Mei 2025</p>
                    <button class="bg-yellow-400 text-yellow-800 py-2 px-4 rounded-full font-semibold mt-2 flex items-center space-x-2">
                      <span>Read Advice</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                `
                )
                .join("")}
            </div>
          </section>
        </div>
      `;
  }

  async afterRender() {}
}
