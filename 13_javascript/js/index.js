"use strict"

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

document.addEventListener('DOMContentLoaded', function () {

  let tabBtns = document.querySelectorAll('.how__btn');
  let contentTabs = document.querySelectorAll('.tabs__content');
  let menuBtn = document.querySelector('.burger_btn');
  let menuNav = document.querySelector('.nav__list');

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
    event.currentTarget.classList.toggle('active');
    if (event.currentTarget.classList.contains('active')) {
      $(function () {
        $('.nav__list').show('fold').addClass('mobile-menu');
        addOutClickListener()
      })
    } else {
      $(function () {
        $('.nav__list').hide('fold')
      })
    }
  });

  // $(function closeNavMenu() {
  //   $('.nav__list').hide('fold')
  // })


  function addOutClickListener() {
    $(document).mouseup(function (e) {
      let container = $(".nav__list");
      if (container.has(e.target).length === 0){
        container.hide('fold');
      }
      $('.burger__btn').removeClass('active')
    });
  }

  $(function () {
    $("#accordion").accordion({
      icons: false,
      active: false,
      collapsible: true,
    });
  });
})

