import "./FormasDePago.css";
const imagen = require("../../assets/images/heroe.png");

export default function FormasDePago() {
  return (
    <section className="catalogo__precios" id="prices">
      <h2>Obtené tu software ¡hoy!</h2>
      <div className="catalogo__precios__fila">
        <div className="catalogo__precios__fila__columnaI">
          <img src={imagen} alt="imagen de héroe" />
        </div>
        <div className="catalogo__precios__fila__columnaD">
          <h3>Te tenemos cubierto</h3>
          <p>
            Introdujimos una nueva forma de pago para que puedas tener tu propia
            herramienta de trabajo. Ahora podes tener el programa perfecto para
            tu negocio abonando una ¡suscripción mensual!, tal y como hacés con
            Netflix® o Spotify®
          </p>
        </div>
      </div>
    </section>
  );
}
