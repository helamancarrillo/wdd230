
document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('banner');
    const closeBannerButton = document.getElementById('closeB');

    const today = new Date();
    const dayOfWeek = today.getDay();  

    if (dayOfWeek === 1 || dayOfWeek === 2 || dayOfWeek === 3) { 
        banner.classList.remove('hidden');
    }

    closeBannerButton.addEventListener('click', function () {
        banner.classList.add('hidden');
    });
});