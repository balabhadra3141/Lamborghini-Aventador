const navMenu = document.querySelector('#nav-menu'),
      navToggle = document.querySelector('#nav-toggle'),
      navClose = document.querySelector('#nav-close');

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    })
}

/* Menu hidden by navClose icon*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
}
// ------------------------------------------------------------------

/* Menu hidden by nav-link when clicked*/

const navLink = document.querySelectorAll('.nav-link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// ------------------------------------------------------------------

const swiperHome = new Swiper('.home-swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2, '0') + "</span>";
        },
    },

    // autoplay: {
    //     delay: 3000,
    // }
})

// ----------------------------------------------------------------- 

const bgHeader = () =>{
    const header = document.querySelector('#header');
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader);

// ----------------------------------------------------------------- 

const scrollUp = () =>{
	const scrollUp = document.querySelector('#scrollup');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

// ----------------------------------------------------------------- 

const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY;

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link');
		}else{
			sectionsClass.classList.remove('active-link');
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive);

// -----------------------------------------------------------------

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    // reset: true // for Animation repeat
});

sr.reveal(`.home-bg`, {scale: 1.1, opacity: 1});
sr.reveal(`.home-swiper`, {origin: 'right',distance: '300px', delay: 800});
sr.reveal(`.home-data`, {origin: 'bottom',distance: '120px', delay: 1200});
sr.reveal(`.swiper-pagination-bullet`, {origin: 'top', delay: 1600, opacity: 0});
sr.reveal(`.home-button`, {origin: 'top', delay: 2000});
sr.reveal(`.about-data, .contact-content`, {origin: 'left'});
sr.reveal(`.about-video, .contact-img`, {origin: 'right'});
sr.reveal(`.models-card`, {interval: 100});
sr.reveal(`.info-img`, {distance: '120px'});
sr.reveal(`.info-content-number`, {origin: 'bottom', distance: '80px', delay: 800});
sr.reveal(`.info-group`, {interval: 100, delay: 1200});
sr.reveal(`.footer-container`);