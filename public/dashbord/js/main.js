const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const validNumberRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
/** index page*/
const clintBox = document.getElementById('clint-box');
const packageBox = document.getElementById('package-box');
const boxes = [clintBox, packageBox];

const showBox = (boxId) => {
    const box = document.getElementById(`${boxId}`);
    boxes.forEach(b => {
        b.classList.add('d-none');
    })
    box.classList.remove('d-none');
}
/**end indexe page */