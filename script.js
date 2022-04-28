const elList = document.querySelector('.films__card-wrapper');
const elTemplate = document.getElementById('template').content;
const elForm = document.querySelector('.form');
let elInput = document.querySelector('.films__input-serach');

function renderArr(arr, list) {
    list.innerHTML = null
    console.log(arr);
    arr.forEach(item => {
        console.log(item)
        let cloneTemplate = elTemplate.cloneNode(true)
        cloneTemplate.querySelector('.films__img').src = item.Poster
        cloneTemplate.querySelector('.films__card-title').textContent = item.Title
        cloneTemplate.querySelector('.films__release-date').textContent = item.Year

        list.appendChild(cloneTemplate)
    })
}


elForm.addEventListener('submit', (e) => {
    e.preventDefault()
    elInputValue = elInput.value.trim() || 'spider'
    
    console.log(elInputValue)   
    fetch(`http://www.omdbapi.com/?apikey=8d34cdb&s=${elInputValue}`)
    .then(res => res.json())
    .then(data => renderArr(data.Search, elList))
})


