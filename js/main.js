let btn = document.querySelector('#button')

fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => {
        console.log(data)
       let dropDown = document.querySelector('#catSelect')
        for(let i = 0; i < data.length; i++){
            let text = document.createTextNode(data[i].name)
            let option = document.createElement('option')
            option.value = data[i].id
            option.appendChild(text)
            dropDown.appendChild(option)
        }
    })

function catsOfTheInternet() {
     let search = document.querySelector('select').value
    console.log(search)
    let url = `https://api.thecatapi.com/v1/images/search?breed_ids=${search}&api_key=live_aLlPc8RjcM68uDQZYYdTtqFdpXG83cnWhOdioEgfIvFy4uMbOGxctKctGVWdhWA1`
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('img').src = data[0].url
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
btn.addEventListener('click', catsOfTheInternet);