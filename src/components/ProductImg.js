import React from 'react'
import '../styles/ProductImg.css'
import main_image from '../../public/assets/image-product-1.jpg'
import image1 from '../../public/assets/image-product-1-thumbnail.jpg'
import image2 from '../../public/assets/image-product-2-thumbnail.jpg'
import image3 from '../../public/assets/image-product-3-thumbnail.jpg'
import image4 from '../../public/assets/image-product-4-thumbnail.jpg'


function ProductImg() {
  return (
    <div className='images-div'>
        <div className='main-image-div'>          
          <img src={main_image} alt={main_image}/>
        </div>
        <div className='main-thumbnails-div'>            
          <img src={image1} alt={image1}/>
          <img src={image2} alt={image2}/>
          <img src={image3} alt={image3}/>
          <img src={image4} alt={image4}/>
        </div>
    </div>
  )
}

export default ProductImg