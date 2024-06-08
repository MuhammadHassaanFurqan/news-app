var inp = document.getElementById('inp')
function search() {
    fetch(` https://newsapi.org/v2/everything?q=${inp.value}&from=2024-05-04&sortBy=publishedAt&apiKey=85cfc19f6ba3486fae00af298ea2b755`)
        .then(function (data) {
            return data.json()
        })
        .then(function (data) {
            var div = document.getElementById("div")
            for (var i = 0; i < data.articles.length; i++) {
                div.innerHTML += `<div class="card d-flex justify-content-evenly m-3 p-3" style="width: 18rem;">
       <img src=${data.articles[i].urlToImage ? data.articles[i].urlToImage : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s' } class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${data.articles[i].title ? data.articles[i].title :'https://static.vecteezy.com/system/resources/previews/004/639/366/original/error-404-not-found-text-design-vector.jpg' }</h5>
         <p class="card-text">${data.articles[i].content}</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>`
            }
            inp.value = ''
        })
}