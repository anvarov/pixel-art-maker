const formInput = document.getElementById('sizePicker')
// adding event listener for form submit
formInput.addEventListener('submit', makeGrid, false);
// event delegation with target on 'td' element

function changeColor(e) {
    const target = e.target;
    const color = document.getElementById('colorPicker').value;
    // if a cell has not been painted, set a new color
    if (target.tagName.toLowerCase() == 'td' && target.getAttribute('class') != 'painted') {
        target.bgColor  = color;
        target.setAttribute('class', 'painted')
    }
    // if a cell has already been painted, remove color and set it to transparent
    else if (target.tagName.toLowerCase() == 'td' && target.getAttribute('class') == 'painted') {
        target.bgColor  = 'transparent';
        target.setAttribute('class', 'transparent')
    }
}

function makeGrid(event) {
    event.preventDefault();
    // removing previous grid
    document.getElementById('pixel_canvas').remove();
    // creating a new grid
    const table = document.createElement('table');
    // traversing to the last h2 element 'Design Canvas'
    const last_h2 = document.getElementsByTagName('h2')[2];
    table.setAttribute('id', 'pixel_canvas');
    // inserting after last h2 element new grid as a sibling
    last_h2.after(table);
    const height = formInput.height.value;
    const width = formInput.width.value;
    for (let i = 0; i < height; i++) {
        let tr = document.createElement('tr');
        table.appendChild(tr);
        for (let j = 0; j < width; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
    document.querySelector('table').addEventListener('mousedown', changeColor);
}