function WallepaperChecked() {
    if (document.getElementById('switch').checked) {
        fondo.style.background="url(../../imgs/fondo.jpg)";
    }else if (document.getElementById('switch')){
        fondo.style.background="white";
    }
}

function menu() {
    if (document.getElementById('menu-icon').checked) {
        fondo.style.background="black";
    }else if (document.getElementById('menu-icon')) {
        fondo.style.background="white";
    }
}
const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.opensea.io/api/v1/collections?offset=0&limit=300', options)
  .then(response => response.json())
  .then(response => {
    response.forEach(usuario => {
        console.log(url.image_url)
        const p = document.createElement('p')
        package.innerHTML = url.image_url
        aplicacion.appendChild(p)
    });
        console.log(response)}
  )
  .catch(err => console.error(err));