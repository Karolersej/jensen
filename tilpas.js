window.onload = function () {
	const colour_btn_els = document.querySelectorAll('.colours .colour');
	const capacity_btn_els = document.querySelectorAll('.capacity .size');
	const imagery_el = document.querySelector('.imagery');
	const image_el = document.querySelector('.imagery .image');

	for (let i = 0; i < capacity_btn_els.length; i++) {
		let btn = capacity_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.capacity .size.selected').classList.remove('selected');
			this.classList.add('selected');
		});
	}

	for (let i = 0; i < colour_btn_els.length; i++) {
		let btn = colour_btn_els[i];

		btn.addEventListener('click', function () {
			document.querySelector('.colours .colour.selected').classList.remove('selected');
			this.classList.add('selected');
			image_el.src = "images/mtb-" + this.dataset.name + '.jpg';
			imagery_el.style.backgroundColor = this.dataset.colour;
		});
	}
	
 /* -----------  HAMBURGER MENU CLICK ------------ */ 
		const menu_btn = document.querySelector('.hamburger');
		const mobile_menu = document.querySelector('.mobile-nav');
	
		menu_btn.addEventListener('click', function () {
			menu_btn.classList.toggle('aktiv');
			mobile_menu.classList.toggle('aktiv');
		});
	}