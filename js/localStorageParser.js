window.onload = function () {
    let favCount = document.querySelector('.fav-count');
    let result = localStorage.getItem('favCounts');
    if (result > 0) {
        favCount.style.display = 'block';
        favCount.innerHTML = result;
    }
}