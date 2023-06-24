import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Carrusel(){
  

  return (
    <ResponsiveCarousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      showThumbs={false}
      showStatus={false}
      className="w-full"
    >
      <div>
        <img src="src\assets\persona2.jpg" alt="Image 1" />
        <p >Tratamiento facial rejuvenecedor</p>
        <p >50$</p>
      </div>
    </ResponsiveCarousel>
  );
}

export default Carrusel;
