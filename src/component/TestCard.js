import { faQuoteLeft, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function TestCard() {
  return (
    <div className='border-1 border-secondary py-3 px-2  ' style={{backgroundColor : '#ECECEC', borderRadius : 25, boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
      <div className='d-flex justify-content-between align-content-center align-items-center w-100 px-2 py-1'>
         <img src={require('../assets/images/testo.png')}  style={{width : 40}}/>
         <span style={{width : '75%', fontSize : 13}}>Lorem Ipsum</span>
         <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <p style={{fontSize : 10, color : 'gray'}} className='px-2 pt-2'>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text
      </p>
      <div className='d-flex justify-content-between align-content-center align-items-center w-100 px-2'>
         <div className=''>
            <FontAwesomeIcon icon={faStar} color={'orange'} size={15} style={{color : 'orange'}}/>
            <FontAwesomeIcon icon={faStar} color={'orange'} size={15} style={{color : 'orange'}}/>
            <FontAwesomeIcon icon={faStar} color={'orange'} size={15} style={{color : 'orange'}}/>
            <FontAwesomeIcon icon={faStar} color={'orange'} size={15} style={{color : 'orange'}}/>
            <FontAwesomeIcon icon={faStarHalf} color={'orange'} size={15} style={{color : 'orange'}}/>
         </div>
         <span style={{fontSize : 10, color : '#00C5C1'}}>15 October</span>
      </div>
    </div>
  )
}
