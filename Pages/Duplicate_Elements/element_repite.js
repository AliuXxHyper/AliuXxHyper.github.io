class header_duplicate extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
            `<header>
                <div>
                    <img src="../Imgs/logo.png" alt="">
                    <p>zOpen</p>
                </div>
                <nav>
                    <a href="../../index.html">Home</a>
                    <a href="../Gallery/gallery.html">Gallery</a>
                    <a href="../About_us/about_us.html">About us</a>
                    <a href="../Tickets/ticket_buy.html">Boleteria</a>
                </nav>
            </header>`;
    }
}

window.customElements.define("header-duplicate", header_duplicate);

class footer_duplicate extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer>
        <div>
        <p>En colaboración de Racoon pictures</p>
        </div>
        
        <div>
            <a href=""><img src="../Imgs/social_networks/Facebook_logo-1048x1048.png" alt=""></a>
            <a href=""><img src="../Imgs/social_networks/Twitter_logo-1048x1048.png" alt=""></a>
            <a href=""><img src="../Imgs/social_networks/Instagram_logo-1048x1048.png" alt=""></a>
        </div>
        
        <div>
        <p>Todos los derechos resevados</p>
        </div>
    </footer>`;
    }
}

window.customElements.define("footer-duplicate", footer_duplicate);
