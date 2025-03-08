import React from 'react'
import { Link } from 'react-router-dom';

function MorraGame(props) {
    const {img,title,sale,subTitle,price} = props.data;
  return (
    <div>
        <Link to='/product'>
            <div className='picture'>
                <img src={img} width={"100%"} alt={props.alt}/>
            </div>
            <div className='meta'>
                <div className='flexarea'>
                    <h3>{title}</h3>
                    {/* <span>{sale}</span> */}
                </div>
                <div className='flexarea'>
                    <h4>{subTitle}</h4>
                    {/* <span className='price'>{price}</span> */}
                </div>
            </div>
        </Link>
    </div>
  )
}

export default MorraGame