import React from 'react'
import Swal from 'sweetalert2'
const Contact = () => {
  const boton =()=>{
    Swal.fire({
      icon: 'success',
      title: 'Mi telefono! 😊',
      text: '+52-55-31-29-14-23',
      footer: '<p>No me pongas de referencia para prestamos, porfavor! Q(`⌒´Q)</p>'
    })
  }
  return (
<>
<section className="hero is-warning">
  <div className="hero-body">
    <p className="title">
      Contactame! (´• ω •`)
    </p>
    <p className="subtitle">
    </p>
  </div>
</section>
<div className='box is-danger'>
<p className='subtitle'>Puedes contactarme por los siguientes medios</p>
<div className='columns'>
<div className='column'>
<a href="mailto:osjpsi@yandex.com?subject=Hola%Omar"><button className='button is-primary is-light is-large' >E-mail</button></a>
</div>
<div className='column'>
<a href="https://mx.linkedin.com/in/omar-soto-26b1b0155r"><button  className='button is-info is-light is-large' >Linkedin</button></a>
</div>
<div className='column'>
<a href="https://github.com/Wintermute44b1"><button  className='button is-dark is-light is-large' >Github</button></a>
</div>
<div className='column'>
<button onClick={boton} className='button is-success is-light is-large' >Telefono</button>
</div>
</div>
</div>
</>
  )
}

export default Contact