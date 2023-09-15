// contentScript.js

function changeHeadingBackground() {
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((heading) => {
    heading.style.backgroundColor = 'lightblue';
  });
}

changeHeadingBackground();
