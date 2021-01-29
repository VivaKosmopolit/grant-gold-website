// Call Login modal window
const body = document.querySelector('body');
const modalWrapper = document.createElement('div');
modalWrapper.classList.add('modal-wrapper');
const modalWindow = document.createElement('div');
modalWindow.classList.add('modal-window');
const btnWrapper = document.createElement('div');
btnWrapper.classList.add('btn-wrapper');
const closeBtn = document.createElement('span');
closeBtn.classList.add('close-btn');
const modalName = document.createElement('div');
modalName.classList.add('modal-name');
modalName.innerHTML = 'Вход в личный кабинет';
const formTag = document.createElement('form');
formTag.id = 'login-form';
const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.required = true;
inputEmail.placeholder = 'E-mail или телефон';
const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.required = true;
inputPassword.placeholder = 'Пароль';
const passwordRecovery = document.createElement('a');
passwordRecovery.classList.add('password-recovery');
passwordRecovery.style.cursor = 'pointer';
passwordRecovery.target = '_blank';
passwordRecovery.innerHTML = 'Забыли пароль?';
const accountReg = document.createElement('a');
accountReg.classList.add('user-reg');
accountReg.style.cursor = 'pointer';
accountReg.target = '_blank';
accountReg.innerHTML = 'Зарегистрироваться';
const userReg = document.createElement('button');
userReg.classList.add('btn--modal');
userReg.type = 'submit';
userReg.formTarget = 'login-form';
userReg.innerHTML = 'Войти';

const loginBtn = document.querySelector('.login-btn').addEventListener('click', () => {
    body.prepend(modalWrapper);
    modalWrapper.appendChild(modalWindow);
    modalWindow.appendChild(btnWrapper);
    btnWrapper.appendChild(closeBtn);
    modalWindow.appendChild(modalName);
    modalWindow.appendChild(formTag);
    formTag.appendChild(inputEmail);
    formTag.appendChild(inputPassword);
    formTag.appendChild(passwordRecovery);
    formTag.appendChild(userReg);
    formTag.appendChild(accountReg);
});

// Close Login modal window
function doModalClose() {
    modalWrapper.remove();
}

closeBtn.addEventListener('click', doModalClose);
modalWrapper.addEventListener('click', doModalClose);
modalWindow.addEventListener('click', (e) => {
    e.stopPropagation();
    passwordRecovery.href = "http://www.google.com/";
    accountReg.href = "registration.html";
});
