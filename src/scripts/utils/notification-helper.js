export class NotificationHelper {
    static showToast(message, isError = false) {
        const toast = document.createElement("div");
        toast.className = `notification ${isError ? "error" : ""}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        // Animasi masuk
        setTimeout(() => {
            toast.classList.add("show");
        }, 100);

        // Animasi keluar
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300); // tunggu transisi
        }, 3000);
    }
}
