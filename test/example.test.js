// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderImage from '../util/render-image.js';

const test = QUnit.test;

QUnit.module('Render Image');

test('renders html from the data', assert => {
    //Arrange
    // Set up your parameters and expectations
    const image = {
        title: 'Uniwhal',
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        horns: 1,
        keyword: 'narwhal',
        description: 'A unicorn and a narwhal nuzzling their horns'
    };
    const expected = /*html*/ `
    <li>
        <h2>Uniwhal</h2>
        <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg">
        <p>Horns: 1</p>
        <p>A unicorn and a narwhal nuzzling their horns</p>
        <p>narwhal</p>
</li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const html = renderImage(image);

    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(html, expected);
});
