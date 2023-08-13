import React from 'react'

const Me = () => {
  return (
    <>
    <div className='box'>
<div>
  <h1 className='title has-text-centered'>Hola Mundo... Bienvenido a mi Portafolio!</h1>
  <div className='has-text-right'>
<div className='level-right'>
<figure className="image is-128x128">
  <img className="is-rounded" src="public/assets/images/me.jpg" />
  
</figure>
</div>
</div>
<div className='tile'>
<article className="message is-warning">
  <div className="message-body">
   <strong className='subtitle is-1'>Mi nombre es Omar</strong> 
   <div className='content is-medium'>
   <p>aqui podras encontrar los proyectos que he realizado en el Bootcamp Ucamp de desarrollo web fullstack 16, algunos estan en un <strong><p className='is-italic'> estado de Work in progress.</p></strong> eso significa
   que aun estoy puliendolos y agreando nuevas funcionalidades. No olvides visitar la pagina de Contact si tienes alguna recomendacion para mi! </p>
   </div>
  </div>
</article>
</div>
</div>
</div>
    </>
  )
}

export default Me