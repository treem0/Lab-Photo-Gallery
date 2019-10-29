import renderImage from './util/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import image from './data/images.js';

const myList = document.getElementById('my-list');

image.forEach(image => {
    const htmlString = renderImage(image);

    const dom = htmlToDOM(htmlString);

    myList.appendChild(dom);
});


