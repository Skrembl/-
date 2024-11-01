//* Когда пользователь нажимает на кнопку, переключаться раскрывает содержимое */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// * Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function (e) {
    if (!e.target.matches(".dropbtn")) {
        let myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains("show")) {
            myDropdown.classList.remove("show");
        }
    }
};

// * Когда пользователь нажимает на кнопку, поле ввода сбрасывается
function subscribe() {
    const email = document.getElementById('emailInput').value;
    const validDomains = ['gmail.com', 'mail.ru', 'yandex.ru', 'icloud.com'];
    const isValid = validDomains.some(domain => email.endsWith(domain));
    
    if (isValid) {
        alert('Вы подписались на нашу рассылку!');
        document.getElementById('emailInput').value = ''; // Очищаем поле
    } else {
        alert('Пожалуйста, введите действительный email с одним из следующих доменов: @gmail.com, @mail.ru, @yandex.ru, @icloud.com.');
    }
}

// * Добавление parallax на изображение
let bg = document.querySelector('.mouse-parallax-bg');
window.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    bg.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
});