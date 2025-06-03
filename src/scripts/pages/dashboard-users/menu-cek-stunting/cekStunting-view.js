import CekStuntingPresenter from "./cekStunting-presenter.js";

export default class CekStuntingView {
  async render() {
    return `
        <div id="main-content" class="bg-[#F4FFEF] min-h-screen pt-24 pb-10 px-4 transition-all duration-300 ease-in-out">
        <div class="bg-[#ffffff] p-4 m-4">
                <p class="text-2xl font-bold">Cek Stunting</p>
            </div>
        <section class="bg-white min-h-screen flex flex-col items-center justify-center md:p-6">
            <div class="w-full min-h-screen flex items-center justify-center px-8">
                <div class="space-y-6 p-6 sm:p-8 md:p-12 w-full max-w-6xl">
                <div>
                    <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">Pilih gender</p>
                    <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                    <label for="gender-perempuan" class="gender-option flex flex-col items-center justify-center p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00A63E] transition duration-200">
                        <input type="radio" id="gender-perempuan" name="gender" value="Perempuan" class="sr-only">
                        <svg class="w-16 h-16 sm:w-20 sm:h-20 mb-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        <span class="text-sm sm:text-base text-gray-500">Perempuan</span>
                    </label>
                    <label for="gender-laki" class="gender-option flex flex-col items-center justify-center p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00A63E] transition duration-200">
                        <input type="radio" id="gender-laki" name="gender" value="Laki-laki" class="sr-only">
                        <svg class="w-16 h-16 sm:w-20 sm:h-20 mb-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                        </svg>
                        <span class="text-sm sm:text-base text-gray-500">Laki-laki</span>
                    </label>
                    <div class="p-4 sm:p-6 border border-gray-300 rounded-lg flex flex-col items-center justify-between">
                        <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">Umur</p>
                        <div id="umur-value" class="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">0</div>
                        <div class="flex space-x-4">
                        <button id="umur-decrease" class="w-12 h-12 sm:w-14 sm:h-14 bg-[#00A63E] text-white rounded-full flex items-center justify-center text-3xl font-bold leading-none pb-1 hover:bg-green-700 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-10" fill="currentColor">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </button>
                        <button id="umur-increase" class="w-12 h-12 sm:w-14 sm:h-14 bg-[#00A63E] text-white rounded-full flex items-center justify-center text-3xl font-bold leading-none pb-1 hover:bg-green-700 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-10" fill="currentColor">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 ">
                    <div class="p-4 sm:p-6 border border-gray-300 rounded-lg md:col-span-2">
                    <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">Sesuaikan Tinggi badanmu (cm)</p>
                    <div id="tinggi-value" class="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 text-center">0</div>
                    <input
                        type="range"
                        min="30"
                        max="150"
                        value="0"
                        class="small-thumb-range w-full h-3"
                        id="tinggi-slider"
                    />
                    </div>
                    <div class="p-4 sm:p-6 border border-gray-300 rounded-lg flex flex-col items-center justify-between md:col-span-1">
                    <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">Berat badan (kg)</p>
                    <div id="berat-value" class="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">0</div>
                    <div class="flex space-x-4">
                        <button id="berat-decrease" class="w-12 h-12 sm:w-14 sm:h-14 bg-[#00A63E] text-white rounded-full flex items-center justify-center text-3xl font-bold leading-none pb-1 hover:bg-green-700 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-10" fill="currentColor">
                                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>
                        </button>
                        <button id="berat-increase" class="w-12 h-12 sm:w-14 sm:h-14 bg-[#00A63E] text-white rounded-full flex items-center justify-center text-3xl font-bold leading-none pb-1 hover:bg-green-700 transition duration-200">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-10" fill="currentColor">
                                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                            </svg>
                        </button>
                    </div>
                    </div>
                </div>

                <div class="pt-4">
                    <button id="submit-btn" class="w-full py-3 sm:py-4 bg-gradient-to-r from-[#00A63E] to-[#00DA51] text-white font-semibold text-lg rounded-2xl shadow-md hover:from-green-700 hover:to-green-600 transition duration-300 ease-in-out">
                    Submit data
                    </button>
                </div>
                </div>
            </div>
        </section>
        </div>
    `;
  }

  async afterRender() {
    this.initFormControls();
  }

  initFormControls() {
    const umurValue = document.getElementById("umur-value");
    const umurIncrease = document.getElementById("umur-increase");
    const umurDecrease = document.getElementById("umur-decrease");
    let umur = parseInt(umurValue.textContent);

    const genderOptions = document.querySelectorAll(".gender-option");

    genderOptions.forEach((option) => {
      const input = option.querySelector('input[type="radio"]');
      const svg = option.querySelector("svg");
      const namegender = option.querySelector("span");

      input.addEventListener("change", () => {
        genderOptions.forEach((o) => {
          o.classList.remove(
            "bg-[#00A63E]",
            "text-white",
            "border-[#00A63E]",
            "shadow-md"
          );
          o.classList.add("border-gray-300", "text-gray-500");

          const otherSvg = o.querySelector("svg");
          otherSvg.classList.remove("text-white");
          otherSvg.classList.add("text-gray-500");

          const text = o.querySelector("span");
          text.classList.remove("text-white");
          text.classList.add("text-gray-500");
        });

        option.classList.add(
          "bg-[#00A63E]",
          "text-white",
          "border-[#00A63E]",
          "shadow-md"
        );
        option.classList.remove("border-gray-300", "text-gray-700");

        svg.classList.remove("text-gray-500");
        svg.classList.add("text-white");

        namegender.classList.remove("text-gray-500");
        namegender.classList.add("text-white");
      });
    });

    umurIncrease.addEventListener("click", () => {
      if (umur < 100) {
        umur++;
        umurValue.textContent = umur;
      }
    });

    umurDecrease.addEventListener("click", () => {
      if (umur > 0) {
        umur--;
        umurValue.textContent = umur;
      }
    });

    // Tinggi badan slider
    const tinggiSlider = document.getElementById("tinggi-slider");
    const tinggiValue = document.getElementById("tinggi-value");

    tinggiSlider.addEventListener("input", () => {
      tinggiValue.textContent = tinggiSlider.value;
    });

    // Berat badan
    const beratValue = document.getElementById("berat-value");
    const beratIncrease = document.getElementById("berat-increase");
    const beratDecrease = document.getElementById("berat-decrease");
    let berat = parseInt(beratValue.textContent);

    beratIncrease.addEventListener("click", () => {
      if (berat < 150) {
        berat++;
        beratValue.textContent = berat;
      }
    });

    beratDecrease.addEventListener("click", () => {
      if (berat > 0) {
        berat--;
        beratValue.textContent = berat;
      }
    });

    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click", async () => {
      const token = sessionStorage.getItem("token");
      if (!token) {
        alert("Anda harus login terlebih dahulu.");
        return;
      }

      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      if (!gender) {
        alert("Silakan pilih gender terlebih dahulu.");
        return;
      }

      const umur = parseInt(document.getElementById("umur-value").textContent);
      const berat = parseFloat(document.getElementById("berat-value").textContent);
      const tinggi = parseInt(tinggiSlider.value);

      const data = {
        token,
        gender,
        age: umur,
        height: tinggi,
        weight: berat,
        // child_id: optional
      };

      try {
        const response = await CekStuntingPresenter.check(data);

        console.log("Prediction response:", response); // Debug

        if (response.prediction) {
          const prediction = response.prediction;
          const message = response.message;

          alert(
            `${message}\n\nStatus: ${prediction.status}\nConfidence: ${prediction.confidence}%\nRekomendasi: ${prediction.nutrition_recommendation}`
          );
        } else {
          alert(
            `${response.message}\n\nSilakan cek hasil prediksi terbaru Anda di halaman Riwayat.`
          );
          // Opsional: redirect langsung ke halaman riwayat
          // window.location.href = "/riwayat.html";
        }
      } catch (error) {
        alert("Gagal memproses data. Silakan coba lagi.");
        console.error(error);
      }
    });

  }
}