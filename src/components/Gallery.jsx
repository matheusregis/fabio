import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../styles/gallery.css';
export function Gallery () {
  const slideImages = [
    {
      url: 'fotos/0.JPG',
      caption: 'Fachada'
    },
    {
      url: 'fotos/1.jpeg',
      caption: 'Frente'
    },
    {
      url: 'fotos/2.jpeg',
      caption: 'Frente 0'
    },
    {
      url: 'fotos/3.jpeg',
      caption: 'Frente 1'
    },
    {
      url: 'fotos/4.jpeg',
      caption: 'Lateral'
    },
    {
      url: 'fotos/5.jpeg',
      caption: 'Gramado'
    },
    {
      url: 'fotos/6.jpeg',
      caption: 'Gramado 0'
    },
    {
      url: 'fotos/7.jpeg',
      caption: 'Rampa'
    },
    {
      url: 'fotos/8.jpeg',
      caption: 'Garagem'
    },
    {
      url: 'fotos/9.jpeg',
      caption: 'Quarto'
    },
    {
      url: 'fotos/10.jpeg',
      caption: 'Quarto 0'
    },
    {
      url: 'fotos/11.jpeg',
      caption: 'Corredor'
    },
    {
      url: 'fotos/12.jpeg',
      caption: 'Banheiro'
    },
    {
      url: 'fotos/13.jpeg',
      caption: 'Banheiro 0'
    },
    {
      url: 'fotos/14.jpeg',
      caption: 'Quarto 1'
    },
    {
      url: 'fotos/15.jpeg',
      caption: 'Quarto 2'
    },
    {
      url: 'fotos/16.jpeg',
      caption: 'Quarto 3'
    },
    {
      url: 'fotos/17.jpeg',
      caption: 'Quarto 4'
    },
    {
      url: 'fotos/18.jpeg',
      caption: 'sala'
    },
    {
      url: 'fotos/19.jpeg',
      caption: 'sala 0'
    },
    {
      url: 'fotos/20.jpeg',
      caption: 'Cozinha'
    },
    {
      url: 'fotos/21.jpeg',
      caption: 'Gourmet'
    },
    {
      url: 'fotos/22.jpeg',
      caption: 'Churrasqueira'
    },
    {
      url: 'fotos/23.jpeg',
      caption: 'Gourmet 0'
    },
    {
      url: 'fotos/24.jpeg',
      caption: 'Gourmet 1'
    },
    {
      url: 'fotos/25.JPG',
      caption: 'Garagem 0'
    },
  ]
  return (
    <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div className="flex flex-col items-center">
                <img className="images" src={slideImage.url} alt={slideImage.caption} />
                <span >{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
    </div>
  )
}