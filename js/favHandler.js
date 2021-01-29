let count = 0;
let modules = [];
let favCount = document.querySelector('.fav-count');
const favButton = document.querySelector('.favorite-btn');
// Favorite button behavior
function favoriteButton (e) {
    if (!e.classList.contains('clicked') === true) {
        e.classList.add('fav-active', 'clicked');
        favCount.style.display = 'block';
        count++
        favCount.innerHTML = count;
    } else {
        e.classList.remove('clicked', 'fav-active');
        count--;
        favCount.innerHTML = count;
        if (count < 1) {
            favCount.style.display = 'none';
        }
    }
    localStorage.setItem('favCounts', count);
}
