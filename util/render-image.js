export default function renderImage(imageItem) {
    const html = /*html*/`
    <li>
    <h2>${imageItem.title}</h2>
    <img src="${imageItem.url}">
    <p>Horns: ${imageItem.horns}</p>
    <p>${imageItem.description}</p>
    <p>${imageItem.keyword}</p>
</li>
    `;

    return html;
}