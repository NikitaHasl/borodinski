const modalLogin = document.querySelector("#modal-login");
const buttonOpen = document.querySelector("#modal-login-open");
const buttonClose = modalLogin?.querySelector(".modal-login__close");

if (modalLogin && buttonOpen && buttonClose) {
	//Открытие по кнопке
	buttonOpen.addEventListener("click", () => {
		modalLogin.showModal();
	});

	//Закрытие по крестику
	buttonClose.addEventListener("click", () => {
		modalLogin.close();
	});

	//Закрытие по клику затемненной области
	modalLogin.addEventListener("click", (event) => {
		if (event.target === modalLogin) {
			modalLogin.close();
		}
	});

	//Закрытие по клику затемненной области
	modalLogin.addEventListener("close", (event) => {
		buttonOpen.focus();
	});
}
