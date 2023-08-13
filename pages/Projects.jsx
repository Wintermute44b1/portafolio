import React from 'react'

const Projects = () => {
  return (
<>
<section className="hero is-dark">
  <div className="hero-body">
    <p className="title">
      Proyectos
    </p>
    <p className="subtitle">
      Proyectos hasta ahora.
    </p>
  </div>
</section>

<div className='tile'>
<div className="tile is-parent">
  <article className="tile is-child notification is-warning">
    <p className="title">Landing Page: Fotokamera</p>
    <p className="subtitle">Landing page sencilla, creada con HTML y CSS.</p>
    <figure className="image is-4by3">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896215/portfolio/fotokamera_hzhrs5.png"  />
    </figure>
    <a href="https://wintermute44b1.github.io/fotokamera_landing/"className='subtitle'>Demo</a>
  </article>
  <article className="tile is-child notification is-dark">
    <p className="title">CRUD Sencillo: Biblioteca</p>
    <p className="subtitle">Sistema sencillo para manejo de inventario, HTML,CSS y JS</p>
    <figure className="image is-4by3">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896213/portfolio/biblioteca_qrwrbo.png" />
    </figure>
    <a href="https://wintermute44b1.github.io/crud_registro_libros/"className='subtitle'>Demo</a>

  </article>
  <article className="tile is-child notification is-warning">
    <p className="title">Consumo de API: Clima</p>
    <p className="subtitle">Proyecto en Equipo, consumo de una API externa.</p>
    <figure className="image is-4by3">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896213/portfolio/clima_wg1nev.png" />
    </figure>
    <a href="https://64d83075f5a8af4f6c46d3b8--kaleidoscopic-malabi-f3dc51.netlify.app/"className='subtitle'>Demo</a>
  </article>  
</div>
</div>
<section className="section">
  <h1 className="title">Mas proyectos..</h1>
  <h2 className="subtitle">
     <strong>Y aun haaay mas!</strong>
  </h2>
</section>
<div className='tile'>
<div className="tile is-parent">
  <article className="tile is-child notification is-dark">
    <p className="title">Crud Avanzado: Pizzeria del Gato Feliz </p>
    <p className="subtitle">React y firebase</p>
  <p className='is-size-1 has-text-centered'>🚧😔🚧</p>
  <p className="subtitle">En proceso de arregarlo, proyecto roto. </p>
  </article>
  <article className="tile is-child notification is-warning">
    <p className="title">E-commerce: El Panal</p>
    <p className="subtitle">React, MongoDB, NodeJS y consumo de APIs de una pasarela de pagos.</p>
    <figure className="image is-4by3">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896213/portfolio/ecommerce_nc74je.png" />
    </figure>
    <a href="https://animated-fairy-907389.netlify.app/"className='subtitle'>Demo</a>
  </article>
  <article className="tile is-child notification is-dark">
    <p className="title">Portafolio</p>
    <p className="subtitle">React y Bulma.io</p>
    <figure className="image is-4by3">
      <img src="https://res.cloudinary.com/dsmkpezps/image/upload/v1691896215/portfolio/portafolio_c7hbnk.png" />
    </figure>
  </article>  
</div>
</div>

</>
  )
}

export default Projects