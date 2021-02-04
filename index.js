/**
 * @param {Element} badges
 */
// function changeBadgesColor(badges) {
//   badges.querySelector('.js-badges').querySelectorAll('.badge-icon')
//     .forEach((innerElement) => {
//       innerElement.style.color = 'white';
//     });

//   badges.querySelector('.js-badges').querySelectorAll('.badge-text')
//     .forEach((innerElement) => {
//       innerElement.style.color = 'white';
//     });
// }

// function darkTheme() {
//   document.getElementById('trello-root').style.backgroundColor = '#202124';

//   document.querySelectorAll('.list').forEach((element) => {
//     element.style.backgroundColor = '#3B3D42';
//   });

//   document.querySelectorAll('.list-header').forEach((element) => {
//     element.querySelector('.list-header-name').style.color = 'white';
//     element.querySelector('.list-header-extras-menu').style.color = 'white';
//     element.querySelector('.list-header-num-cards').style.color = 'white';
//   });

//   document.querySelectorAll('.list-card')
//     .forEach((element) => {
//       element.style.backgroundColor = '#202124';
//       element.querySelector('.list-card-title').style.color = 'white';
//       changeBadgesColor(element.querySelector('.badges'));
//     });
// };

function setDarkMode() {
  const style = document.createElement('link');
  style.rel = 'stylesheet';
  style.type = 'text/css';
  style.href = chrome.extension.getURL('main.css');

  (document.head || document.documentElement).appendChild(style);

  document.getElementById('trello-root').style.backgroundColor = '#202124';
}

setDarkMode();

// darkTheme();
// setInterval(darkTheme, 1000);