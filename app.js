import renderImage from './util/render-image.js';
import htmlToDOM from './util/html-to-DOM.js';
import image from './data/images.js';

const myList = document.querySelector('.my-list');
const imageTypeFilter = document.querySelector('.filter');


imageTypeFilter.addEventListener('change', () => {
    const filterString = imageTypeFilter.value;
    let filteredImages = null;
    
    if (!filterString) {
        filteredImages = image;
    } 
    else {
        filteredImages = image.filter(images => {
            if (images.keyword === filteredImages) {
                return true;
            }
            else {
                return false;
            }
        });
    }
    
    const myImages = filteredImages.map(images => {
        return {
            title: images.title,
            url: images.url,
            horns: images.horns,
            description: images.description,
            keyword: images.keyword
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

function render(imagesToRender) {
    while (myList.lastElementChild) {
        myList.lastElementChild.remove();
    }

    imagesToRender.forEach(image => {
        const htmlString = renderImage(image);
        const dom = htmlToDOM(htmlString);
        myList.appendChild(dom);
    });
}