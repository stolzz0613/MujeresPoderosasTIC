import footer from '../styles/footer.module.scss'

function Footer() {
    return (
        <div className={footer.container}>
            <div class={footer.column1}>
                <img src="https://i.imgur.com/KHRZxOv.png"/>
            </div>
            <div class={footer.column2}>
                <h4>Equipo de Desarrollo</h4>
                <p>
                    Andres Julian Bustos Castelblanco <br/>
                    andres0613@utp.edu.co
                </p>
                <p>
                    Angelica Arrubla Hernandez <br/>
                    ange.arrubla@gmail.com
                </p>
            </div>
            <div class={footer.column3}>
                <p>
                    Johanna Mahuth Tafur <br/>
                    jmahuth@gmail.com
                </p>
                <p>
                    Tatiana García Grajales <br/>
                    tatiana.g2@utp.edu.co
                </p>
                <p>
                    Sandra Yelitza Castelblanco Celis <br/>
                    sandrayelitzacc@gmail.com
                </p>
            </div>
            <div class={footer.column4}>
                <h4>Términos y Condiciones</h4>
                <a href="https://docs.google.com/document/d/e/2PACX-1vRgr1Ox4ZTKiq2vxRRlmsO3KN5vsi776WI_vIkYaanGr592lLg7sd_J88owvIP9nA/pub">
                    <p>Descarga archivo para conocer términos y condiciones de la web</p>  
                </a>
            </div>
            <div class={footer.column5}>
                <h4>Ponte en Contacto</h4>
                <div class={footer.social}>
                    <a href="https://t.me/joinchat/ga0oWIwc6kQ2OTFh">
                        <i class="bi bi-telegram"></i>
                    </a>
                    <a href="https://twitter.com/tic_senior">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCirFzPbe8w920ojxp4bmdug">
                        <i class="bi bi-youtube"></i>
                    </a>
                    <a href="https://www.instagram.com/tic_senior/">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="mujeres.poderosas.ticsenior@gmail.com">
                        <i class="bi bi-mailbox"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer

