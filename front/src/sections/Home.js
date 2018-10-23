import React, { Component } from 'react';
import './home.scss'

export default class HomePage extends Component {
  render() {
    return (



      <div class="container">
        <section>
          <div class="image" data-type="background" data-speed="2"></div>
          <div class="stuff" data-type="content"><h1>StreetSound</h1></div>
        </section>

        <section>
          <div class="image" data-type="background" data-speed="7"></div>
          <div class="stuff" data-type="content"><h2>Encuentra por genero musical a tus artistas callejeros</h2><p>Una nueva experiencia.</p></div>
        </section>

        <section>
          <div class="image" data-type="background" data-speed="6"></div>
          <div class="stuff" data-type="content">Encuentra en nosotros una manera diferente de pasear.</div>
        </section>

        <section>
          <div class="image" data-type="background" data-speed="5"></div>
          <div class="stuff" data-type="content">Recibe notificaciones de los musicos.</div>
        </section>

        <section>
          <div class="image" data-type="background" data-speed="3"></div>
          <div class="stuff" data-type="content">Una nueva forma de ver la música.</div>
        </section>

        <section>
          <div class="image" data-type="background" data-speed="3"></div>
          <div class="stuff" data-type="content">Únete a StreetSound.</div>
        </section>
      </div>

      //             <container>

      //   <div className="container">
      //   <section className="background">
      //     <div className="content-wrapper">
      //       <p className="content-title">Full Page Parallax Effect</p>
      //       <p className="content-subtitle">Scroll down and up to see the effect!</p>
      //     </div>
      //   </section>
      //   <section className="background">
      //     <div className="content-wrapper">
      //       <p className="content-title">Cras lacinia non eros nec semper.</p>
      //       <p className="content-subtitle">className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ut massa mattis nibh semper pretium.</p>
      //     </div>
      //   </section>
      //   <section className="background">
      //     <div className="content-wrapper">
      //       <p className="content-title">Etiam consequat lectus.</p>
      //       <p className="content-subtitle">Nullam tristique urna sed tellus ornare congue. Etiam vitae erat at nibh aliquam dapibus.</p>
      //     </div>
      //   </section>
      // </div>


      //             </container>
    )
  }
}