"use strict"

document.addEventListener('DOMContentLoaded', function () {

  let tabBtns = document.querySelectorAll('.how__btn');
  let contentTabs = document.querySelectorAll('.tabs__content');
  let menuBtn = document.querySelector('#burger_btn');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;
      for (let tab of tabBtns) {
        tab.classList.remove('active')
      }
      event.currentTarget.classList.add('active');
      contentTabs.forEach(function (tab) {
        tab.classList.remove('active');
      })
      document.querySelector(`[data-target=${path}]`).classList.add('active');
    })
  });

  menuBtn.addEventListener('click', (event) => {
    event.currentTarget.classList.add('active');
    // if (event.currentTarget.classList.contains('active')) {
    $(function () {
      $('.nav__list_mobile').show('fold').addClass('mobile-menu');
    })
    // } else {
    //   $(function () {
    //     $('.nav__list_mobile').hide('fold')
    //   })
    // }
  });

  $('.menu-close__btn').on('click', (event) => {
    $('.nav__list_mobile').hide('fold');
    menuBtn.classList.remove('active');
  });


  let searchOpenBtn = document.getElementById('search_open');
  let searchCloseBtn = document.querySelector('.header__search-close-button');
  let searchForm = document.getElementById('form_search');

  searchOpenBtn.addEventListener('click', () => {
    searchForm.classList.add('active')
  })
  searchCloseBtn.addEventListener('click', () => {
    searchForm.classList.remove('active')
  })
  document.addEventListener('click', (e) => {
    let target = e.target;
    if (!target.closest('.form-container')) {
      searchForm.classList.remove('active');
      searchForm.querySelector('.header__search-input').value = '';
    }
  })

  $(function () {
    $("#accordion").accordion({
      icons: false,
      active: false,
      collapsible: true,
      heightStyle: 'content',
    });
  });

  const swiperHero = new Swiper('.swiper-container_hero', {
    loop: true,
    speed: 800,
    autoplay: {
      delay: 2500,
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    pagination: {
      el: '.swiper-bullet-pagination.hero__pagination',
      type: 'bullets',
      clickable: true,
    },
  });
})

