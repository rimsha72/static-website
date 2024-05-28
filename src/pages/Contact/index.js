import React from 'react'
import Header from '../../component/Header'
import Button from '../../component/Button'
import { Link } from 'react-router-dom'

export default function index() {
  return (
    <div className='container-fluid'>
       <Header />
       <div className='mt-5 pt-5' style={{height : 50}}></div>
       <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-9">
                <h1 className="mb-3">Contact Us</h1>
                <form>
                    <div className="row g-3">
                    <div className="col-md-6">
                        <label for="your-name" className="form-label">Your Name</label>
                        <input type="text" className="form-control" id="your-name" name="your-name" required />
                    </div>
                    <div className="col-md-6">
                        <label for="your-surname" className="form-label">Your Surname</label>
                        <input type="text" className="form-control" id="your-surname" name="your-surname" required />
                    </div>
                    <div className="col-md-6">
                        <label for="your-email" className="form-label">Your Email</label>
                        <input type="email" className="form-control" id="your-email" name="your-email" required />
                    </div>
                    <div className="col-md-6">
                        <label for="your-subject" className="form-label">Your Subject</label>
                        <input type="text" className="form-control" id="your-subject" name="your-subject" />
                    </div>
                    <div className="col-12">
                        <label for="your-message" className="form-label">Your Message</label>
                        <textarea className="form-control" id="your-message" name="your-message" rows="5" required></textarea>
                    </div>
                    <div className="col-12">
                        <div className="row">
                        <div className="col-md-6">
                            <Button title={'Send'}/>
                        </div>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
       </div>

       <div className='w-100 row p-4'>
        <div className='col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12'>
          <Link className='fw-normal me-2' href="/" style={{textDecoration : 'none', color : 'black'}}>Home</Link>
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
