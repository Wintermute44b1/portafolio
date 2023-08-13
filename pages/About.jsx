import React from 'react'

const About = () => {
  return (
<>
<section class="hero is-success">
  <div class="hero-body">
    <p class="title">
      Tecnologias
    </p>
    <p class="subtitle">
      Que aprendi y puse en practica en este Bootcamp.
    </p>
  </div>
</section>
<div className='box'>
<div className='tile is-ancestor'>
<div className="tile">
  <div className="tile is-parent is-vertical is-10 is-box">
    <article className="tile is-child notification is-info">
      <p className="title">HTML 5 </p>
      <p className="subtitle">La base de todo! <div className='level-right'>
  <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" width={63} height={64} /></div>
</p>
    </article>
    <article className="tile is-child notification is-link">
      <p className="title">CSS</p>
      <p className="subtitle">Que bonito es lo bonito <div className='level-right'>
  <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png" width={63} height={64}/>
</div></p>
    </article>
    <article className="tile is-child box notification is-info">
      <p className="title">Javascript</p>
      <p className="subtitle">Aun hace que me duela la cabeza! <div className='level-right'>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" width={63} height={64}/>
</div></p>
    </article>
    <article className="tile is-child notification is-link">
      <p className="title">React</p>
      <p className="subtitle">Complejo pero poderoso <div className='level-right'>
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width={63} height={64}/>
</div></p>
    </article>
    <article className="tile is-child notification is-info">
      <p className="title">NodeJS + MongoDB</p>
      <p className="subtitle">Logica pura y dura<div className='level-right'>
  <img src="https://icons-for-free.com/iconfiles/png/512/install+javascript+js+node+npm+tools+icon-1320165731324625592.png" width={63} height={64}/>
</div></p>
    </article>
     </div>
     </div>
<div className="tile is-parent">
  <div className="tile is-child box">
    <p className="title">Otras tecnologias</p>
    <p>A la izquierda esta una lista de las tecnologias principales que aprendi en cierto nivel durante este bootcamp pero no fueron las unicas:</p>
    <div className='box is-warning'>
 <div className="field is-grouped is-grouped-multiline">
  <div className="control">
    <div className="tags has-addons">
      <span className="tag is-dark">GIT</span>
      <span className="tag is-info">Control de versiones</span>
    </div>
  </div>
  <div className="control">
    <div className="tags has-addons">
      <span className="tag is-dark">VITE</span>
      <span className="tag is-success">Creacion de proyectos React</span>
    </div>
  </div>
  <div className="control">
    <div className="tags has-addons">
      <span className="tag is-dark">NPM</span>
      <span className="tag is-primary">Gestor de Librerias en NodeJS</span>
    </div>
  </div>
</div>
<div className="control">
    <div className="tags has-addons">
      <span className="tag is-dark">Bootstrap</span>
      <span className="tag is-success">Libreria de CSS</span>
    </div>
  </div>
    </div>
    <p>Por mencionar algunas! </p>
    <p>Pero sigo aprendido mas cada dia, este portafolio esta por ejemplo construido en <strong>React</strong> con <strong>Bulma.io</strong> como libreria de CSS.</p>
    <p>He estado viendo algunos videos sobre Ruby On Rails y me gustaria intentar aprenderlo tambien.</p>

  </div>
  
</div>
</div>
</div>
</>
  )
}

export default About