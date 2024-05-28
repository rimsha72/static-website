import React from 'react'
import Header from '../../component/Header'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className='p-0 m-0'>
      <Header />
      <div className='d-flex' style={{height : 50}} />
      <div className='container-fluid mt-5 pt-5 px-5' style={{marginTop : 200}}>
        <span className='fw-bold' style={{fontSize : 22}}>Bridechilla: Your Ultimate Bridal Consultancy App!</span><br></br><br></br>
         <p className='' style={{color : 'gray'}}>
         
         Welcome to Bridechilla, your all-in-one solution for a stress-free and joyous journey to the altar! We understand that planning a wedding can be overwhelming, and every bride deserves a team of experts to make her dream day truly magical. That's where Bridechilla comes in—a revolutionary consultancy app designed to connect brides with a curated selection of professionals across various domains. <br></br><br></br>

        About the Founder:
        Divya Chaudhary is an Indian entrepreneur, makeup artist, business owner of DC Makeup Studios and the founder of Bridechilla. She is known for her elegant and natural style of makeup. Her bridal makeup aims to accentuate the features and characteristics of the brides instead of overdoing it. Her passion for makeup artistry and experience with multiple brides marked the birth of her very first baby, Bridechilla. <br></br><br></br>

        <span className='fw-bold text-dark'>1. Makeup Artists:</span> <br></br>
        Envision your perfect bridal look with our team of skilled makeup artists. From traditional to natural and elegant looks, they'll transform your vision into reality, ensuring you glow with confidence on your special day. <br></br><br></br>

            <span className='fw-bold text-dark'>2. Dermatologists: </span> <br></br>
               Achieve that radiant bridal glow with the help of our experienced dermatologists. Whether it's skincare routines, pre-wedding treatments, or advice on maintaining a flawless complexion, our experts are here to ensure you look your absolute best.<br></br><br></br>

            <span className='fw-bold text-dark'>3. Wardrobe Specialists:</span> <br></br>
               Find the dress of your dreams with the assistance of our wardrobe specialists. From bridal gowns to bridesmaid dresses, they'll guide you through the latest trends, help you choose the perfect attire, and ensure you step down the aisle in style. Not just that, they can also help you with your after-wedding and outing looks.<br></br><br></br>

            <span className='fw-bold text-dark'>4. Tarot Card Readers:</span> <br></br>
               Add a touch of mystique to your wedding preparations with insights from our talented tarot card readers. Gain clarity and guidance for your journey ahead, as they explore the mystical realm to provide you with a unique perspective on your upcoming nuptials.<br></br><br></br>

            <span className='fw-bold text-dark'>5. Nutritionists:</span> <br></br>
               Achieve your health and wellness goals with the support of our nutritionists. Whether you're aiming for a fitness boost or seeking dietary advice to look and feel your best on your wedding day, our experts will create personalised plans to fit your needs.<br></br><br></br>

            <span className='fw-bold text-dark'>6. Mental Health Counsellors:</span> <br></br>
               Embrace the emotional journey of wedding planning with the help of our skilled counsellors. From pre-wedding jitters to navigating family dynamics, our counsellors provide a safe space for brides to discuss and overcome any challenges they may encounter.<br></br><br></br>

            Bridechilla is not just an app; it's your personal team of wedding consultants dedicated to making your journey to the altar as smooth and enjoyable as possible. Even if marriage is not on your mind, Bridechilla will help you with all these services for any spectacular day in your life. Say goodbye to stress and hello to a blissful wedding experience with Bridechilla!<br></br><br></br>

         </p>
      </div>
      <div className='w-100 row p-4'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Home</Link>
          <Link className='fw-normal me-2' href="/about-us" style={{textDecoration : 'none', color : 'black'}}>About Us</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Services</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Blogs</Link>
          <Link className='fw-normal me-2' href="#" style={{textDecoration : 'none', color : 'black'}}>Career</Link>
          <Link className='fw-normal me-2' href="/contact-us" style={{textDecoration : 'none', color : 'black'}}>Contact Us</Link>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
          <div className='float-end'> 
            <img src={require('../../assets/images/Facebook.png')} style={{width : 20, marginRight : 10}}/>
            <img src={require('../../assets/images/Insta.png')} style={{width : 20, marginRight : 10}}/>
            <img src={require('../../assets/images/Twitter.png')} style={{width : 20, marginRight : 10}}/>
          </div>
        </div>
    </div>
      </div>
  )
}
