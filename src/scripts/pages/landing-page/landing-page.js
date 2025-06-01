export default class LandingPage {
    async render() {
        let artikelHTML = '';
        for (let i = 1; i <= 3; i++) {
            artikelHTML += `
                <div class="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                    <div class="relative h-60 bg-gradient-to-r from-blue-100 to-blue-200">
                        <img src="/images/image1.png" alt="Artikel" class="w-full h-full object-cover">
                    </div>
                    <div class="p-6 pt-12">
                        <h3 class="text-2xl font-bold text-gray-800 mb-2">Antisipasi Generasi Stunting Indonesia Emas</h3>
                        <p class="text-xl leading-[28px] text-gray-600 mb-4">
                            Dokter Hasto mengatakan angka stunting disebabkan berbagai faktor kekurangan gizi pada bayi.
                        </p>
                        <a href="#" class="text-[#00A63E] text-sm font-semibold flex items-center">
                            Read more
                            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3">
                                </path>
                            </svg>
                        </a>
                    </div>
                </div>
            `;
        }
        return `
        <section class="landing-page flex flex-col md:flex-row items-center justify-between px-6 md:px-28 bg-white min-h-screen">
            <!-- Text Section -->
            <div class="max-w-xl w-full mb-12 md:mb-0 md:mr-12 text-left md:text-left">
                <p class="text-4xl md:text-[48px] text-left font-bold text-gray-800 md:leading-[57px] leading-[50px] mb-6 tracking-wide">
                    <span class="text-green-600 decoration-4 decoration-green-500">Tumbuh Kembang Anak Tidak Optimal?</span> <br> 
                    <span class="text-black-600 decoration-4 decoration-black-500">Cek dan Cegah Stunting Sejak Dini!</span>
                </p>
                <p class="text-[28px] font-normal text-[#8A8585] mb-8 leading-[43px]">
                    Dengan teknologi AI, kami membantu orang tua dan tenaga kesehatan mendeteksi risiko stunting secara cepat dan mudah.
                </p>
                <div class="flex justify-center">
                    <a href="#cek-stunting" class="bg-gradient-to-r from-[#00A63E] to-[#00DA51] text-white font-semibold py-3 px-16 rounded-2xl shadow-md transition duration-300 ease-in-out">
                        Cek Sekarang
                    </a>
                </div>
            </div>

            <!-- Image Section -->
            <div class="flex justify-center items-center w-full max-w-md">
            <img src="/images/boy_with_ruler.png" alt="Anak dengan pengukur tinggi" class="w-full h-auto object-contain" />
            </div>
        </section>

        <section id="tentang-kami" class="py-16 md:py-24">
                <div class="text-center mb-12">
                    <h2 class="text-xl mb-16 md:text-[36px] font-bold text-[#00A63E]">Tentang Kami</h2>
                    <div class="w-16 h-[2px] bg-black mx-auto mt-4"></div>
                </div>
            <div class=" bg-[#F8FEEB] container mx-auto px-4 py-16 md:py-24">
                <div class="flex flex-col md:flex-row items-center justify-center p-8 md:p-12">
                    <!-- Gambar -->
                    <div class="flex-1 flex justify-center mb-8 md:mb-0 md:mr-12">
                        <img src="/images/growsmart-2.webp" alt="logo pangan" class="w-[622px] h-auto object-contain">
                    </div>

                    <!-- Teks -->
                    <div class="flex-1 text-center md:text-left">
                        <h3 class="text-xl md:text-[40px] font-bold text-gray-800 mb-4 leading-[56px]">
                        PANTAU TUMBUH KEMBANG DENGAN <span class="text-[#00A63E]">GROWSMART</span>
                        </h3>
                        <div class="w-24 h-1 bg-gray-300 mx-auto md:mx-0 mb-6"></div>
                        <p class="text-base md:text-[28px] text-gray-700 leading-[33px] tracking-wider">
                        Growsmart merupakan Platform Smart Detection Stunting untuk Memantau Tumbuh Kembang Anak Secara Optimal. Dengan hasil dan rekomendasi yang tepat kita akan bisa mencegah stunting pada anak sedini mungkin.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section class="bg-white py-16 md:py-24">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center mb-28">
                    <img src="/images/chatbot.png" alt="Growsmart Robot" class="w-32 h-32 md:w-32 md:h-32 object-contain mb-4">
                    <h2 class="text-2xl text-[#00A63E] md:text-3xl font-bold">Fitur Growsmart</h2>
                </div>


                <div class="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-4 max-w-full">

                    <div class="p-2 flex flex-col items-left text-left w-5/6 ">
                        <div class="mb-6">
                            <p class="text-xl md:text-[40px] font-bold text-[#00A63E] mb-6 whitespace-nowrap">FITUR YANG TERSEDIA</p>
                            <p class="text-lg md:text-[40px] font-bold text-gray-800 mb-2 whitespace-nowrap">Kalkulasi BMI dengan AI</p>
                        </div>
                        <div class="flex items-center space-x-4 mb-2">
                            <div class="w-[145px] h-[3px] bg-black"></div>
                            <img src="/images/HeartRate.png" alt="Growsmart Robot" class="w-12 h-auto">
                        </div>
                        <div class="w-fit md:w-fit">
                            <p class="text-2xl text-gray-700 mb-4 leading-relaxed tracking-wider">
                                Kami mengkalkulasi form indeks data seperti Umur, Tinggi, dan berat badan yang kemudian akan dihasilkan hasil prediksi.
                            </p>
                            <p class="text-2xl font-semibold text-gray-700 leading-relaxed tracking-wider">
                                Login untuk dapat menyimpan hasil dan memantau perkembangan jangka panjang!
                            </p>
                        </div>
                    </div>
                    <div class="p-6 flex flex-col items-left text-left justify-end w-5/6">
                        <div class="mb-4">
                            <img src="/images/diet.png" alt="Food Recommendation Icon" class="w-16 h-16 md:w-20 md:h-20 object-contain">
                        </div>
                        <h4 class="text-lg md:text-[34px] font-semibold text-gray-800 mb-6 leading-[40px]">Food Recomendation</h4>
                        <p class="text-[28px] text-gray-700 leading-relaxed">
                            Dapatkan rekomendasi gizi
                        </p>
                    </div>

                    <div class="p-6 flex flex-col items-left text-left selt-center w-5/6">
                        <div class="mb-4">
                            <img src="/images/stats.png" alt="Food Recommendation Icon" class="w-16 h-16 md:w-20 md:h-20 object-contain">
                        </div>
                        <h4 class="text-lg md:text-[34px] font-semibold text-gray-800 mb-6 leading-[40px]">Nutritional Value</h4>
                        <p class="text-[28px] text-gray-700 leading-relaxed">
                            Dapatkan rekomendasi nutrisi
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section id="cek-stunting" class="bg-white min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 md:mt-12">
        <div class="text-center mb-12">
            <h2 class="text-xl mb-16 md:text-[36px] font-semibold text-[#00A63E]">Cek Prediksi Stunting</h2>
            <div class="w-16 h-[2px] bg-black mx-auto mt-4"></div>
        </div>

        <div class="bg-[#F8FEEB] w-full min-h-screen flex items-center justify-center px-8">
            <div class="space-y-6 p-6 sm:p-8 md:p-12 w-full max-w-6xl">
            <div>
                <p class="text-base sm:text-lg font-medium text-gray-700 mb-4">Pilih gender</p>
                <div class="grid grid-cols-3 max-sm:grid-cols-1 gap-4">
                <label for="gender-perempuan" class="gender-option flex flex-col items-center justify-center p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00A63E] transition duration-200">
                    <input type="radio" id="gender-perempuan" name="gender" value="perempuan" class="sr-only">
                    <svg class="w-16 h-16 sm:w-20 sm:h-20 mb-2 text-gray-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                    <span class="text-sm sm:text-base text-gray-500">Perempuan</span>
                </label>
                <label for="gender-laki" class="gender-option flex flex-col items-center justify-center p-4 sm:p-6 border border-gray-300 rounded-lg cursor-pointer hover:border-[#00A63E] transition duration-200">
                    <input type="radio" id="gender-laki" name="gender" value="laki-laki" class="sr-only">
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
        <section id="artikel" class="bg-white py-16 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-48 h-48 bg-[radial-gradient(circle,theme(colors.green.200)_1px,transparent_1px)] bg-[length:16px_16px] opacity-70"></div>

            <div class="container mx-auto px-4 relative z-10">
                <h2 class="text-2xl md:text-3xl font-semibold text-[#00A63E] text-center mb-4">Artikel Terkait</h2>
                <div class="w-20 h-1 bg-gray-300 mx-auto mb-12"></div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-sm:px-4">
                    ${artikelHTML}
                </div>
            </div>
        </section>
    `;
    }

    async afterRender() {
        this.initFormControls();
    }

    initFormControls() {
        const umurValue = document.getElementById('umur-value');
        const umurIncrease = document.getElementById('umur-increase');
        const umurDecrease = document.getElementById('umur-decrease');
        let umur = parseInt(umurValue.textContent);

        const genderOptions = document.querySelectorAll('.gender-option');

        genderOptions.forEach(option => {
            const input = option.querySelector('input[type="radio"]');
            const svg = option.querySelector('svg');
            const namegender = option.querySelector('span');

            input.addEventListener('change', () => {
                genderOptions.forEach(o => {
                    o.classList.remove('bg-[#00A63E]', 'text-white', 'border-[#00A63E]', 'shadow-md');
                    o.classList.add('border-gray-300', 'text-gray-500');

                    const otherSvg = o.querySelector('svg');
                    otherSvg.classList.remove('text-white');
                    otherSvg.classList.add('text-gray-500');

                    const text = o.querySelector('span');
                    text.classList.remove('text-white');
                    text.classList.add('text-gray-500');
                });

                option.classList.add('bg-[#00A63E]', 'text-white', 'border-[#00A63E]', 'shadow-md');
                option.classList.remove('border-gray-300', 'text-gray-700');

                svg.classList.remove('text-gray-500');
                svg.classList.add('text-white');

                namegender.classList.remove('text-gray-500');
                namegender.classList.add('text-white');
            });
        });

        umurIncrease.addEventListener('click', () => {
            if (umur < 100) {
                umur++;
                umurValue.textContent = umur;
            }
        });

        umurDecrease.addEventListener('click', () => {
            if (umur > 0) {
                umur--;
                umurValue.textContent = umur;
            }
        });

        // Tinggi badan slider
        const tinggiSlider = document.getElementById('tinggi-slider');
        const tinggiValue = document.getElementById('tinggi-value');

        tinggiSlider.addEventListener('input', () => {
            tinggiValue.textContent = tinggiSlider.value;
        });

        // Berat badan
        const beratValue = document.getElementById('berat-value');
        const beratIncrease = document.getElementById('berat-increase');
        const beratDecrease = document.getElementById('berat-decrease');
        let berat = parseInt(beratValue.textContent);

        beratIncrease.addEventListener('click', () => {
            if (berat < 150) {
                berat++;
                beratValue.textContent = berat;
            }
        });

        beratDecrease.addEventListener('click', () => {
            if (berat > 0) {
                berat--;
                beratValue.textContent = berat;
            }
        });

        // Submit button
        const submitBtn = document.getElementById('submit-btn');

        submitBtn.addEventListener('click', () => {
            const gender = document.querySelector('input[name="gender"]:checked').value;

            const data = {
                gender: gender,
                umur: umur,
                tinggi: parseInt(tinggiSlider.value),
                berat: berat,
            };

            console.log('Data yang dikirim:', data);

            alert(`Data terkirim:\nGender: ${data.gender}\nUmur: ${data.umur}\nTinggi: ${data.tinggi} cm\nBerat: ${data.berat} kg`);
        });
    }
}