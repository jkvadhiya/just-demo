
// Header
$('.toggle-menu').click(function () {
    $('.sidebar').addClass('active');
    $('.close-sidebar').addClass('active');
})
$('.close-sidebar').click(function () {
    $('.sidebar').removeClass('active');
    $(this).removeClass('active');
})
$(document).keyup(function (e) {
    $('.sidebar').removeClass('active');
    $('.close-sidebar').removeClass('active');
});

// Sticky header
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.header').addClass('is-sticky');
    }
    else {
        $('.header').removeClass('is-sticky');
    }
});

// smooth scroll jquery
function scrollNav() {
    $('ul a').click(function () {
        $("ul  .active").removeClass("active");
        $(this).addClass("active");

        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 205
        }, 300);
        return false;
    });
}
scrollNav();




// Smooth menu desktop
let highlight;

function addClass(target) {
    target.classList.add('selector-item--active');
}

function selectItem(event) {
    const target = event.target;
    const items = document.querySelectorAll('.selector-item');
    const parent = document.querySelector('.header__menu-inner ul');
    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    items.forEach(el => el.classList.remove('selector-item--active'));

    highlight.style.left = `${targetRect.left - parentRect.left}px`;

    addClass(target);
    setHighlightWidth(target);
}

function setHighlightWidth(target = null) {
    const itemTarget = target || document.querySelector('.selector-item');
    const rect = itemTarget.getBoundingClientRect();

    addClass(itemTarget)

    highlight = document.querySelector('.highlight');
    highlight.style.width = `${rect.width}px`;
}

setHighlightWidth();
