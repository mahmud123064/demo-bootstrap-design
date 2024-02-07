
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import "./Gallery.css"
import { FaCamera } from "react-icons/fa";

const Gallery = () => {
    return (
        <div className='container'>
            <div className='title'>
                <div>
                    <FaCamera size={70}></FaCamera>
                </div>
                <div className='jumbotron'>
                    <h1>The Image Gallery</h1>
                    <p>The Beautiful images for Platform</p>
                </div>
            </div>
            <SlideshowLightbox className='container mx-auto gallery ' >

                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_1.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_2.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_3.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_4.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_5.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_6.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_7.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_8.png' />
                <img className='w-full rounded img-details' src='../../../public/Gallery/portfolio_item_9.png' />


            </SlideshowLightbox>
        </div>
    );
};

export default Gallery;