export function showNotification({ message, type = 'success' }) {
    const alertBox = document.createElement('div');

    const bgColor = type === 'success' ? 'bg-green-100 border-green-400 text-green-700'
                 : type === 'error' ? 'bg-red-100 border-red-400 text-red-700'
                 : 'bg-gray-100 border-gray-400 text-gray-700';

    alertBox.className = `fixed top-4 right-4 z-50 w-80 px-5 py-4 rounded-lg shadow border ${bgColor} flex items-start gap-2 animate-slide-in`;
    alertBox.innerHTML = `
        <div class="flex-1 text-sm">${message}</div>
        <button class="text-xl font-bold leading-none hover:opacity-80" aria-label="Close">&times;</button>
    `;

    // Tombol close
    alertBox.querySelector('button').addEventListener('click', () => {
        alertBox.remove();
    });

    // Auto close after 4 seconds
    setTimeout(() => {
        alertBox.remove();
    }, 4000);

    document.body.appendChild(alertBox);
}
