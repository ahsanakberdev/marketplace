import React from 'react'
import { Heart } from '../Imports/ImportImages'

function ProductBox(props) {
    const data = props.data;
  return (
    <div className='slide-item'>
        <div className='picture'>
            <img src={data.img} width={"100%"} alt={props.alt}/>
            <div className='hoveritem'>
                <div className='heart'>
                    <img src={Heart} width={'14px'} alt='heart'/>
                </div>
                <span>buy now</span>
            </div>
        </div>
        <div className='meta'>
            <div className='flexarea'>
                <h3>{data.title}</h3>
                {data.salePrice === null ? null : <span>sale</span>}  
            </div>
            <div className='flexarea'>
                <h4>{data.subTitle}</h4>
                <span className='price'>{data.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ProductBox