let generate_btn = document.querySelector(".generate_btn");

generate_btn.addEventListener('click', fetchPics);

function fetchPics() {
    let catImgDiv = document.querySelector(".catImgDiv")
    catImgDiv.innerHTML = ''

    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data) => {
        let catImgUrl = data[0].url

        let catImgEl = document.createElement("img")
        catImgEl.setAttribute('src', `${catImgUrl}`)
        catImgEl.classList.add("showcase")
        
        let catImgDiv = document.querySelector(".catImgDiv")
        catImgDiv.appendChild(catImgEl)
    })
    .catch(err => console.log(err))
}