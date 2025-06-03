import CekStuntingModel from './cekStunting-model.js';
import CekStuntingPresenter from './cekStunting-presenter.js';
import { showNotification } from '../../../utils/template.js';

export default class CekStuntingView {
    constructor() {
        this.presenter = null;
    }
    async render() {
        return `
        <section class="bg-white flex flex-col items-start justify-start p-8 max-sm:pt-20 md:pt-20">
            <div class="bg-gray-200 p-4 mb-8 w-full justify-start">
                <p class="text-2xl font-bold">Cek Stunting</p>
            </div>
            <div class="w-full flex items-start justify-start">
                <div class="space-y-6 max-sm:p-6 w-full max-w-full">
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
        const model = new CekStuntingModel();
        this.presenter = new CekStuntingPresenter(model, this);

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
            gender,
            age,
            height,
            weight,
        } = result;

        const {
            status,
            confidence,
            additional_info,
            nutrition_recommendation
        } = result.result;


        const recommendations = {
            'Severely Stunted': {
                description: 'Sangat Terhambat',
            },
            'Stunted': {
                description: 'Terhambat',
            },
            'Normal': {
                description: 'Normal',
            },
            'Tall': {
                description: 'Di Atas Rata-rata',
            }
        };

        const statusDescription = recommendations[status]?.description || 'Status tidak diketahui';

        container.innerHTML = `
            <form id="hidden-form" class="hidden">
                <input type="hidden" name="gender" value="${gender}">
                <input type="hidden" name="age" value="${age}">
                <input type="hidden" name="height" value="${height}">
                <input type="hidden" name="weight" value="${weight}">
                <input type="hidden" name="status" value="${status}">
                <input type="hidden" name="confidence" value="${confidence}">
            </form>
             <div class="gradient-bg text-white px-8 py-6 text-center">
                 <h1 class="text-3xl font-bold mb-2">Hasil Pengecekan Pertumbuhan  Tinggi anak</h1>
                 <div class="inline-block bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
                     <span class="text-white text-2xl font-semibold">${statusDescription}</span>
                 </div>
                 <p class="text-white text-opacity-90 text-lg">${nutrition_recommendation.description}</p>
             </div>
             
             <!-- Main Content -->
             <div class="p-8">
                 <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                     <!-- Left Column - Information -->
                     <div class="space-y-8">

                         <!-- Growth Information -->
                         <div class="bg-gray-100 rounded-2xl p-6">
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
                                 <div class="grid grid-cols-1 gap-3 mb-4">
                                     ${nutrition_recommendation.food.map(food => `
                                     <div class="flex items-center bg-white rounded-lg p-3">
                                         <span class="text-2xl mr-3">🥗</span>
                                         <span class="text-gray-700">${food}</span>
                                     </div>`).join('')}
                                 </div>
                             </div>
                         </div>
                     </div>
                     
                     <!-- Right Column - Image and Suggestions -->
                     <div class="space-y-6">
                        <div class="text-center">
                            <div class="inline-block bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
                                <span class="text-blue-700 font-semibold">Tingkat Akurasi: ${confidence}%</span>
                            </div>
                        </div>
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
                                         <h3 class="font-semibold text-gray-800 mb-2">Pola Makan</h3>
                                         <p class="text-gray-600 text-sm">${nutrition_recommendation.frequency}</p>
                                     </div>
                                 </div>
                             </div>
                             
                             <div class="suggestion-card bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
                                 <div class="flex items-start">
                                     <div class="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                         <span class="text-yellow-700 font-bold text-sm">2</span>
                                     </div>
                                     <div>
                                         <h3 class="font-semibold text-gray-800 mb-2">Catatan</h3>
                                         <p class="text-gray-600 text-sm">${nutrition_recommendation.notes}</p>
                                     </div>
                                 </div>
                             </div>
                             
                             <div class="suggestion-card bg-blue-50 border border-blue-100 rounded-2xl p-6">
                                 <div class="flex items-start">
                                     <div class="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                         <span class="text-blue-700 font-bold text-sm">3</span>
                                     </div>
                                     <div>
                                         <h3 class="font-semibold text-gray-800 mb-2">Suplemen</h3>
                                         <p class="text-gray-600 text-sm">${nutrition_recommendation.supplements}</p>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="flex justify-end gap-4 mt-8">
                <button type="button" id="cancel-button" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded-lg">
                    Batal
                </button>
                <button type="button" id="save-btn" form="hidden-form" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">
                    Simpan
                </button>
            </div>
         `;

        popup.classList.remove('hidden');

        document.getElementById('close-popup').addEventListener('click', () => {
            popup.classList.add('hidden');
        });

        document.getElementById('cancel-button').addEventListener('click', () => {
            popup.classList.add('hidden');
        });

        document.getElementById('save-btn').addEventListener('click', () => {
            this.presenter.handleSaveBtn();
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
        showNotification({
            message: 'Gagal menyimpan data: ' + (message || 'Terjadi kesalahan.'),
            type: 'error'
        });
    }

    savePredictionError(errorMessage) {
        showNotification({
            message: 'Gagal menyimpan data: ' + (errorMessage || 'Terjadi kesalahan.'),
            type: 'error'
        });
    }


    savePredictionSuccess(result) {
        const popup = document.getElementById('prediction-result');

        showNotification({
            message: result.message || 'Data berhasil disimpan.',
            type: 'success'
        });

        popup.classList.add('hidden');
    }



}