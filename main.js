let inputs = document.querySelectorAll('input');
let search = document.querySelector('.btn');
let section = document.querySelector('section');


search.addEventListener('click', function() {

    let apiUrl = `https://api.escuelajs.co/api/v1/products/?price_min=${inputs[0].value}&price_max=${inputs[1].value}`

    fetch(apiUrl)
    .then(response => response.json())
    .then(response => renderer(response))
})




function renderer(apiList) {

    apiList.forEach(obj => {
        section.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src="${obj.images[0]}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${obj.title}</h5>
        <h5 class="card-title">${obj.price}</h5>
        <a href="#" class="btn btn-primary">Buy now</a>
        </div>
    </div>
    `;
    })

    
}