import LandingModel from './landing-model.js';
import LandingPresenter from './landing-presenter.js';

export default class LandingPage {
    constructor() {
        this.presenter = null;
    }

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
        <div id="prediction-result" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
        <div class="bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh] w-full max-w-5xl p-6 relative">
            <button id="close-popup" class="absolute top-4 right-4 text-gray-500 hover:text-black text-xl">&times;</button>
            <!-- Isi hasil prediksi akan dimasukkan di sini -->
            <div id="prediction-content"></div>
        </div>
        </div>
    `;
    }

    async afterRender() {
        this.initFormControls();
        const model = new LandingModel();
        this.presenter = new LandingPresenter(model, this);

        this.initFormControls();
    }

    initFormControls() {
        const umurIncrease = document.getElementById('umur-increase');
        const umurDecrease = document.getElementById('umur-decrease');

        umurIncrease.addEventListener('click', () => {
            this.presenter.handleUmurIncrease();
        });

        umurDecrease.addEventListener('click', () => {
            this.presenter.handleUmurDecrease();
        });

        const tinggiSlider = document.getElementById('tinggi-slider');
        tinggiSlider.addEventListener('input', (e) => {
            this.presenter.handleTinggiChange(parseInt(e.target.value));
        });

        const genderInputs = document.querySelectorAll('input[name="gender"]');
        genderInputs.forEach((input) => {
            input.addEventListener('change', () => {
                this.presenter.handleGenderChange(input.value);
            });
        });

        const beratInc = document.getElementById('berat-increase');
        const beratDec = document.getElementById('berat-decrease');

        beratInc.addEventListener('click', () => {
            this.presenter.handleBeratIncrease();
        });

        beratDec.addEventListener('click', () => {
            this.presenter.handleBeratDecrease();
        });

        const submitBtn = document.getElementById('submit-btn');
        submitBtn.addEventListener('click', () => {
            this.presenter.handleSubmit();
        });

        const checkedGender = document.querySelector('input[name="gender"]:checked');
        if (checkedGender) {
            this.updateGenderUI(checkedGender.value);
        }
    }

    updateUmur(value) {
        const umurValue = document.getElementById('umur-value');
        umurValue.textContent = value;
    }

    updateTinggi(value) {
        const tinggiValue = document.getElementById('tinggi-value');
        tinggiValue.textContent = value;
    }

    updateBerat(value) {
        const beratValue = document.getElementById('berat-value');
        beratValue.textContent = value;
    }

    updateGenderUI(value) {
        const labelLaki = document.querySelector('label[for="gender-laki"]');
        const labelPerempuan = document.querySelector('label[for="gender-perempuan"]');

        const svgLaki = labelLaki ?.querySelector('svg');
        const svgPerempuan = labelPerempuan ?.querySelector('svg');

        const spanLaki = labelLaki ?.querySelector('span');
        const spanPerempuan = labelPerempuan ?.querySelector('span');

        if (!labelLaki || !labelPerempuan || !svgLaki || !svgPerempuan || !spanLaki || !spanPerempuan) return;

        if (value === 'Laki-laki') {
            labelLaki.classList.add('border-[#00A63E]', 'bg-[#00A63E]');
            labelPerempuan.classList.remove('border-[#00A63E]', 'bg-[#00A63E]');

            svgLaki.classList.remove('text-gray-500');
            svgLaki.classList.add('text-white');
            svgPerempuan.classList.remove('text-white');
            svgPerempuan.classList.add('text-gray-500');

            spanLaki.classList.remove('text-gray-500');
            spanLaki.classList.add('text-white');
            spanPerempuan.classList.remove('text-white');
            spanPerempuan.classList.add('text-gray-500');
        } else if (value === 'Perempuan') {

            labelPerempuan.classList.add('border-[#00A63E]', 'bg-[#00A63E]');
            labelLaki.classList.remove('border-[#00A63E]', 'bg-[#00A63E]');

            svgPerempuan.classList.remove('text-gray-500');
            svgPerempuan.classList.add('text-white');
            svgLaki.classList.remove('text-white');
            svgLaki.classList.add('text-gray-500');

            spanPerempuan.classList.remove('text-gray-500');
            spanPerempuan.classList.add('text-white');
            spanLaki.classList.remove('text-white');
            spanLaki.classList.add('text-gray-500');
        }
    }

    onPredictionSuccess(result) {
        const container = document.getElementById('prediction-content');
        const popup = document.getElementById('prediction-result');

        const {
            additional_info,
            confidence,
            nutrition_recommendation,
            status
        } = result;

        container.innerHTML = `
            <div class="gradient-bg text-white px-8 py-6 text-center">
                <div class="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                    <span class="text-white font-medium">Status: ${status}</span>
                </div>
                <h1 class="text-3xl font-bold mb-2">Pertumbuhan Anak<br>Di Atas Rata-rata</h1>
                <p class="text-white text-opacity-90 text-lg">Pastikan gizi seimbang dan monitor perkembangan untuk menjaga kesehatan optimal.</p>
            </div>
            
            <!-- Main Content -->
            <div class="p-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <!-- Left Column - Information -->
                    <div class="space-y-8">
                        <!-- Confidence Level -->
                        <div class="text-center">
                            <div class="inline-block bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
                                <span class="text-blue-700 font-semibold">Tingkat Kepercayaan: ${confidence}%</span>
                            </div>
                        </div>
                        
                        <!-- Growth Information -->
                        <div class="bg-gray-50 rounded-2xl p-6">
                            <h2 class="text-xl font-bold text-gray-800 mb-4">Keterangan Pertumbuhan</h2>
                            <div class="space-y-3 text-gray-700">
                                <div class="flex items-start">
                                    <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>${additional_info.height_explanation}</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>${additional_info.weight_explanation}</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Tinggi Normal: ${additional_info.normal_height.toFixed(2)} cm</p>
                                </div>
                                <div class="flex items-start">
                                    <div class="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                    <p>Berat Normal: ${additional_info.normal_weight.toFixed(2)} kg</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Nutrition Recommendations -->
                        <div>
                            <h2 class="text-xl font-bold text-gray-800 mb-4">Rekomendasi Gizi</h2>
                            <div class="bg-blue-50 rounded-2xl p-6 mb-4">
                                <p class="text-gray-700 mb-4">${nutrition_recommendation.description}</p>
                                <div class="grid grid-cols-1 gap-3 mb-4">
                                    ${nutrition_recommendation.food.map(food => `
                                    <div class="flex items-center bg-white rounded-lg p-3">
                                        <span class="text-2xl mr-3">🥗</span>
                                        <span class="text-gray-700">${food}</span>
                                    </div>`).join('')}
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <p><strong>Frekuensi:</strong> ${nutrition_recommendation.frequency}</p>
                                    <p><strong>Catatan:</strong> ${nutrition_recommendation.notes}</p>
                                    <p><strong>Suplemen:</strong> ${nutrition_recommendation.supplements}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Right Column - Image and Suggestions -->
                    <div class="space-y-6">
                        <!-- Food Bowl Image -->
                        <div class="text-center">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                 alt="Healthy food bowl" 
                                 class="food-image w-full max-w-md mx-auto object-cover h-64">
                        </div>
                        
                        <!-- Suggestions -->
                        <div class="space-y-4">
                            <div class="suggestion-card bg-purple-50 border border-purple-100 rounded-2xl p-6">
                                <div class="flex items-start">
                                    <div class="w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span class="text-purple-700 font-bold text-sm">1</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800 mb-2">Suggestion 1</h3>
                                        <p class="text-gray-600 text-sm">Berikan makanan bergizi seimbang seperti roti gandum, ikan tuna, dan kacang almond untuk mendukung pertumbuhan yang sehat.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="suggestion-card bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                                <div class="flex items-start">
                                    <div class="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span class="text-yellow-700 font-bold text-sm">2</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800 mb-2">Suggestion 2</h3>
                                        <p class="text-gray-600 text-sm">Monitor BMI secara rutin untuk mencegah obesitas dan pastikan aktivitas fisik yang cukup sesuai dengan usianya.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="suggestion-card bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                <div class="flex items-start">
                                    <div class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                        <span class="text-blue-700 font-bold text-sm">3</span>
                                    </div>
                                    <div>
                                        <h3 class="font-semibold text-gray-800 mb-2">Suggestion 3</h3>
                                        <p class="text-gray-600 text-sm">Konsultasi rutin dengan dokter anak untuk memantau perkembangan dan mendapatkan panduan nutrisi yang tepat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        popup.classList.remove('hidden');

        document.getElementById('close-popup').addEventListener('click', () => {
            popup.classList.add('hidden');
        });
    }

    showLoading() {
        const btn = document.getElementById('submit-btn');
        if (btn) {
        btn.disabled = true;
        btn.innerHTML = `
            <svg class="animate-spin h-5 w-5 text-white inline-block mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
            </svg>
            Loading...
        `;
        }
    }

    hideLoading() {
        const btn = document.getElementById('submit-btn');
        if (btn) {
        btn.disabled = false;
        btn.innerHTML = 'Submit';
        }
    }

    onPredictionError(message) {
        alert(`Terjadi kesalahan: ${message}`);
    }

}