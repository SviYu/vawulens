import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_3.jpg';
import './gallery.css';

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images)

  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda ullam debitis sit necessitatibus vitae alias officiis exercitationem.
      </Header>

      <section className='gallery'>
        <div className="container gallery_container">
          {
            images.map((image, idx) => {
              return <article key={idx}>
                  <img src={image} alt={`Gallery Photoshoot #${idx + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery