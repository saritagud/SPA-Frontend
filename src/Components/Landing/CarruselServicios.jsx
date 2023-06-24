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
      className="w-[80%]"
    >
      <div className=' rounded-xl'>
        <img src="src\assets\carrusel.jpg" alt="Image " className=' rounded-t-xl h-[50vh]' />
        <div className='bg-vino rounded-b-xl text-white font-BreeSerif p-4 mb-8 text-start'>
        <p >Tratamiento facial rejuvenecedor</p>
        <p >50$</p>
        </div>
        
      </div>

      <div className=' rounded-xl'>
        <img src="src\assets\carrusel.jpg" alt="Image " className=' rounded-t-xl h-[50vh]' />
        <div className='bg-vino rounded-b-xl text-white font-BreeSerif p-4 mb-8 text-start'>
        <p >Tratamiento facial rejuvenecedor</p>
        <p >50$</p>
        </div>
        
      </div>

      <div className=' rounded-xl'>
        <img src="src\assets\carrusel.jpg" alt="Image " className=' rounded-t-xl h-[50vh]' />
        <div className='bg-vino rounded-b-xl text-white font-BreeSerif p-4 mb-8 text-start'>
        <p >Tratamiento facial rejuvenecedor</p>
        <p >50$</p>
        </div>
        
      </div>
        
      
    </ResponsiveCarousel>
  );
}

export default Carrusel;
