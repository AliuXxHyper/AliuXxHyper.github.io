const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
  .then(response => response.json())
  .then(data => { 
    let title = document.getElementById('title')
    let elements = document.getElementById('data')
    let data_nfts = '';
    let contador = 0;
    for (let i = 0; i<300;i++){
        if (data.collections[i].banner_image_url === null){

        }else {
        contador++;
        data_nfts += `
        <div class="pints_columns">
            <img src="${data.collections[i].banner_image_url}" alt="">
            <div>
                <h3>${data.collections[i].name}</h3>
            </div>
        </div>`
        }
    }
    title.innerHTML = ("Cantidad de NFTS: " + contador);
    elements.innerHTML = data_nfts
    console.log(data)
    
})
