import DashboardModel from './dashboard-model.js';
import DashboardPresenter from './dashboard-presenter.js';

export default class DashboardView {
    constructor() {
        this.presenter = null;
        this.predictions = null; // null artinya loading
    }

    async render() {
        let content = '';
        const userData = JSON.parse(sessionStorage.getItem('user') || '{}');
        const userName = userData.name || 'Pengguna';

        if (this.predictions === null) {
            // loading state
            content = `
                <div class="flex justify-center items-center h-96 col-span-3">
                    <div class="text-center">
                        <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid mx-auto mb-4"></div>
                        <p class="text-gray-700 text-lg font-semibold">Memuat data prediksi...</p>
                    </div>
                </div>
            `;
        } else if (this.predictions.length === 0) {
            // empty state
            content = `
                <p class="text-center text-gray-500 col-span-3">Belum ada data prediksi</p>
            `;
        } else {
            // data available
            content = this.predictions.map(prediction => {
                const tanggal = new Date(prediction.created_at).toLocaleDateString('id-ID');
                return `
                    <div class="bg-white rounded-xl shadow-md p-4">
                        <div class="bg-green-400 rounded-md h-48 mb-2"></div>
                        <div class="flex flex-col gap-2 mt-4">
                            <h2 class="text-xl font-bold text-gray-800">${prediction.status}</h2>
                            <p class="text-sm text-gray-500">Dihitung pada ${tanggal}</p>
                        </div>
                        <div class="flex justify-center items-center mt-4 p-4">
                            <button class="read-advice-btn bg-gradient-to-r from-[#F9EC7D] to-[#F5B100] text-yellow-800 py-2 px-4 rounded-full font-semibold mt-2 flex items-center space-x-2"
                                data-id="${prediction.id}">
                                <p><span class="font-medium">Read</span> <span class="font-semibold">Advice</span></p>
                                <div class="bg-black rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                `;
            }).join('');
        }

        return `
            <div id="root" class="mt-24">
                <div class="bg-gray-200 p-4 m-4">
                    <p class="text-2xl font-bold">Halo ${userName}, Selamat Datang</p>
                </div>
                <section class="p-4 m-4 bg-gray-200">
                    <div class="flex justify-center mb-8 mt-6">
                        <div class="bg-gradient-to-r from-[#F9EC7D] to-[#F5B100] text-yellow-800 text-3xl py-4 px-10 rounded-full font-bold">
                            Progres Tracking
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        ${content}
                    </div>
                </section>
            </div>
        `;
    }

    renderPredictions(predictions) {
        this.predictions = predictions.map(p => ({
            id: p.id,
            status: p.status,
            created_at: p.created_at
        }));
    }

    showLoading() {
        this.predictions = null;
    }

    async afterRender() {
        const model = new DashboardModel();
        this.presenter = new DashboardPresenter(model, this);
        await this.presenter.loadPredictions();

        document.querySelectorAll('.read-advice-btn').forEach(button => {
            button.addEventListener('click', async (event) => {
                const predictionId = event.currentTarget.dataset.id;
                await this.presenter.loadPredictionDetailById(predictionId);
            });
        });

    }

    showAdvicePopup(prediction) {
        const popup = document.createElement('div');
        const {
            status,
            confidence,
            additional_info,
            nutrition_recommendation
        } = prediction;

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


        popup.className = 'fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50';
        popup.innerHTML = `
        <div class="bg-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh] w-full max-w-5xl p-6 relative">
            <button id="close-popup" class="absolute top-7 right-7 text-gray-500 bg-gray-300 rounded-md w-7 h-7 hover:text-black text-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-4 h-4 fill-current">
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </button>
            <div class="gradient-bg text-white px-8 py-6 text-center rounded-lg">
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
        </div>
    `;

        document.body.appendChild(popup);

        document.getElementById('close-popup').addEventListener('click', () => {
            popup.remove();
        });
    }

}