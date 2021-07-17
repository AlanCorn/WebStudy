const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

randomize.addEventListener('click', result);

function result() {

    if (customName.value !== '') {
        let name = customName.value;

    }

    if (document.getElementById("american").checked) {
        let weight = Math.round(300);
        let temperature = Math.round(94);

    }

    story.textContent = ;
    story.style.visibility = 'visible';
}