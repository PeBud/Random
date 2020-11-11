/*jshint esversion: 6 */
const sections = document.querySelectorAll('section');
const space = document.querySelector('.space');
const backgrounds = ['black',
  'darkblue',
  'darkgreen',
];

const options = {
  threshold: 0.7,
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const backgroundsIndex = entry.target.getAttribute('data-index');
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left,
    };
    if (entry, isIntersecting) {
      space.style.setProperty('left', `${directions.left}px`);
      space.style.setProperty('top', `${directions.top}px`);
      space.style.setProperty('width', `${directions.width}px`);
      space.style.setProperty('height', `${directions.height}px`);
      space.style.background = backgrounds[backgroundsIndex];
    }
  });
}

sections.forEach(section => {
  observer.observer(section);
});
