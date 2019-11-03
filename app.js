import renderImage from './util/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import image from './data/images.js';

const myList = document.querySelector('.my-list');
const imageTypeFilter = document.querySelector('.filter');


imageTypeFilter.addEventListener('change', () => {
    const filterString = imageTypeFilter.value;
    let filteredImage = null;

    if(!filterString) {
        filteredImage = image;
    }
    else {
        filteredImage = image.filter(image => {
            if (image.keyword === filteredImage) {
                return true;
            }
            else {
                return false;
            }
        });
    }

    const myImages = filteredImage.map(image => {
        return {
            title: image.title,
            url: image.url,
            horns: image.horns,
            description: image.description,
            keyword: image.keyword
        };
    });

    render(myImages);
});

const mapFunc = ({
    title,
    url,
    horns,
    description,
    keyword,
}) => ({
    title: title,
    url: url,
    horns: horns,
    description: description,
    keyword: keyword
});

const initialImages = image.map(mapFunc);

render(initialImages);

function render(images) {
    while (myList.lastElementChild) {
        myList.lastElementChild.remove();
    }

    images.forEach(image => {
        const htmlString = renderImage(image);
        const dom = htmlToDOM(htmlString);
        myList.appendChild(dom);
    });
}