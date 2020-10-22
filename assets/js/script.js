// Preloader
$(window).on('load', function () {

    $(".loader_inner").fadeOut();
    $(".loader").delay(500).fadeOut("slow");

});
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

// Mouse
const updateProperties = (elem, state) => {
    elem.style.setProperty('--x', `${state.x}px`)
    elem.style.setProperty('--y', `${state.y}px`)
    elem.style.setProperty('--width', `${state.width}px`)
    elem.style.setProperty('--height', `${state.height}px`)
    elem.style.setProperty('--radius', state.radius)
    elem.style.setProperty('--scale', state.scale)
}

document.querySelectorAll('.cursor').forEach(cursor => {
    let onElement

    const createState = e => {
        const defaultState = {
            x: e.clientX,
            y: e.clientY,
            width: 30,
            height: 30,
            radius: '50%'
        }

        const computedState = {}

        if (onElement != null) {
            const { top, left, width, height } = onElement.getBoundingClientRect()
            const radius = window.getComputedStyle(onElement).borderTopLeftRadius

            computedState.x = left + width / 2
            computedState.y = top + height / 2
            computedState.width = width
            computedState.height = height
            computedState.radius = radius
        }

        return {
            ...defaultState,
            ...computedState
        }
    }

    document.addEventListener('mousemove', e => {
        const state = createState(e)
        updateProperties(cursor, state)
    })

    document.querySelectorAll('a, button').forEach(elem => {
        elem.addEventListener('mouseenter', () => (onElement = elem))
        elem.addEventListener('mouseleave', () => (onElement = undefined))
    })
})

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



// column gap
$("#column-gap").keyup(function () {
    let cgap = $("#column-gap").val();
    $(".content__view-inner").css('column-gap', +cgap);
    // console.log(cgap);
});
// Row gap
$("#row-gap").keyup(function () {
    let rgap = $("#row-gap").val();
    $(".content__view-inner").css('row-gap', +rgap);
    // console.log(cgap);
});

// Add row
$(document).ready(function () {
    $("#col-add").click(function () {
        $(".content__view-inner").css('grid-template-columns', '1fr');
        // console.log(cgap);
        $("#col-here").append('<div class="content__control-box-child"><div class="content__control-box-child--inner"><div class="content__control-box-child--input"><input placeholder="No"></div><div class="content__control-box-child--input"><input placeholder="FR"></div><div class="content__control-box-child--remove"><a href="#"><i class="fal fa-trash-alt"></i></a></div></div></div>');
    });
    $("#row-add").click(function () {
        $("#row-here").append('<div class="content__control-box-child"><div class="content__control-box-child--inner"><div class="content__control-box-child--input"><input placeholder="No"></div><div class="content__control-box-child--input"><input placeholder="FR"></div><div class="content__control-box-child--remove"><a href="#"><i class="fal fa-trash-alt"></i></a></div></div></div>');
    });
});



// on add row button pr  grid-template-columns add karavani chhe using for loop i++

for (var i = 0, l = arr.length; i < l; i++) {
    sum += arr[i];
}
console.log(sum);

$("li").each(function (index) {
    console.log(index + ": " + $(this).text());
});