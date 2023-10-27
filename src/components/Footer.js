import FooterColumn from './FooterColumn';

function Footer() {
    const empresaChildren = ["Quiénes Somos", "Canal Ético", "Trabajo con Nosotros", "Sala de Prensa", "Decathlon Afiliados", "Decathlon Marketplace", "Vende en Decathlon.es", "Sostenibilidad", "Innovación"];
    const compraChildren = ["Método de entrega/Gasto de envío", "Métodos de pago", "Preguntas frecuentes", "Envío Canarias/Ceuta/Melilla/Andorra", "Single Day", "Regalos para deportistas", "Rebajas", "Botas de fútbol"];
    const postCompraChildren = ["Cambios y Devoluciones", "Factura formato electrónico", "Tu opinión cuenta", "Comunicados seguridad", "Tax free", "Clasificación de nuestros productos", "Servicio de montaje"];
    const serviciosChildren = ["Alquiler", "Soporte técnico", "Tarjeta regalo", "Clubes, colegios y empresas", "Personalización", "Financiación", "Extensión de garantía", "Equipaciones clubes", "Postventa"];
    const ventajasChildren = ["Decathlon Live", "Ventajas y servicios", "Decathlon segunda vida", "Revender mis productos"];

    return (
        <div>
            <footer>
                <div className="footerColumns">
                    <FooterColumn title="Decathlon Empresa" submenus={empresaChildren} />
                    <FooterColumn title="Compra" submenus={compraChildren} />
                    <FooterColumn title="Post-Compra" submenus={postCompraChildren} />
                    <FooterColumn title="Servicios" submenus={serviciosChildren} />
                    <FooterColumn title="Ventajas" submenus={ventajasChildren} />
                </div>
                <div className="footerSocial">
                    <div className="questions">
                        <h3>Pregúntanos lo que quieras</h3>
                        <a><img alt=""iconMessage/></a>
                        <p>Lo sentimos, en estos momentos el servicio no está disponible o estamos fuera del horario de atención al cliente (lunes a sábado de 10:00h-20:00h).</p>
                    </div>
                    <div className="app">
                        <h3>App Decathlon</h3>
                        <div><img alt="iconApple"/></div>
                        <div><img alt="iconAndroid"/></div>
                    </div>
                    <div className="socialMedia">
                        <h3>Redes sociales</h3>
                        <div><img alt="iconFacebook"/></div>
                        <div><img alt="iconInstagram"/></div>
                        <div><img alt="iconTwitter"/></div>
                        <div><img alt="iconYoutube"/></div>
                        <div><img alt="iconPinterest"/></div>
                    </div>
                    <div className="partner">
                        <h3>Partner</h3>
                        <div><img alt="iconLemonway"/></div>
                    </div>
                </div>
                <div className="footerCopyright">
                    <p>Copyright © 2021 Decathlon.es. Todos los derechos reservados.</p>
                    <p>*Consulta los métodos, plazos y gastos de envío disponibles en el siguiente <a>enlace</a>.</p>
                    <p>**Los precios de venta de los artículos de nuestro catálogo incluyen IVA. Los precios para las entregas con destino a Canarias, Ceuta, Melilla y Andorra incluyen impuestos indirectos. Los precios de venta de los artículos de nuestro catálogo son los recomendados desde central a día de ayer. Gastos de envío no incluidos. Fotos de los productos no contractuales.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
