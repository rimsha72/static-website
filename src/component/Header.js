import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import { useWindowSize } from '../utitlity/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircle, faDownload, faHamburger, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../style.css'

export default function Header() {
    const [width, height] = useWindowSize();
    const [open , setOpen] = useState(false);

  return (
        <div className="fixed-top container-fluid px-0 mx-0 px-xs-1 px-sm-2 px-md-5 px-1 py-1 pt-2 shadow-nav" style={{backgroundColor : '#FFFFFF'}}>
            <header className={`d-flex flex-wrap align-items-center justify-content-md-between justify-content-sm-between justify-content-center py-2 mb-4 px-sm-1 px-xs-1 mx-xs-1 mx-sm-1 pt-3`}>
            <Link to="/" className={`${(width > 600 || width > 400) ? 'd-flex' : ''}  align-items-center col-sm-6 col-xs-6 col-md-3 col-lg-2 col-auto mb-2 mb-md-0 text-dark text-decoration-none`}>
                <img src={require('../assets/images/name_logo.png')} alt='Name Logo' style={{width : width < 600 ? '80%': '50%'}}/>
            </Link>

            {
                width > 768 &&
                <ul className="nav col-sm-auto col-sm-6 col-md-auto col-lg-8 col-12  mb-2 justify-content-center mb-md-0">
                    <li className='mx-md-4 mx-xl-4  mx-sm-1 mx-0'><Link to="/" className="nav-link px-2 link-dark">Home</Link></li>
                    <li className='mx-md-4 mx-xl-4 mx-sm-1 mx-0 '><Link to="/about-us" className="nav-link px-2 link-dark">About Us</Link></li>
                    <li className='mx-md-4 mx-xl-4 mx-sm-1 mx-0'><Link to="#" className="nav-link px-2 link-dark">Services</Link></li>
                    <li className='mx-md-4 mx-xl-4 mx-sm-1 mx-0'><Link to="#" className="nav-link px-2 link-dark">Blog</Link></li>
                    <li className='mx-md-4 mx-xl-4 mx-sm-1 mx-0 '><Link to="#" className="nav-link px-2 link-dark">Career</Link></li>
                    <li className='mx-md-4 mx-xl-4 mx-sm-1 mx-0 '><Link to="/contact-us" className="nav-link px-2 link-dark">Contact Us</Link></li>
                </ul>
            }
            
            <div className="col-sm-6 col-xs-6 col-md-5 col-lg-2 col-1 text-end">
               
                     {/* <Button className={'d-xs-block d-sm-block d-lg-none d-md-none d-block float-end'} title={<FontAwesomeIcon icon={faDownload} />}/> */}

                     <Button className={'d-xs-none d-sm-none d-lg-block d-md-block d-none float-end'} title={'Download App'}/>
                {
                    width < 600 &&
                    (
                        open ?
                        <button style={{height : 40, width : 45, border : 0}} className='core-button ms-2'><FontAwesomeIcon icon={faXmark} size={70} onClick={() => setOpen(!open)}/></button>
                        :
                        <button style={{height : 40, width : 45, border : 0}} className='core-button ms-2'><FontAwesomeIcon icon={faBars} size={70} onClick={() => setOpen(!open)}/></button>
                    )
                }
            </div>
            
            </header>
            {
                open &&
                <nav className="navbar m-0 p-0">
                    <ul className="nav navbar-nav mx-2" style={{width : width}}>
                        <li className="nav-item nav-mobile" >
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="/"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;Home </Link>
                        </li>
                        <li className="nav-item nav-mobile">
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="/about-us"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;About Us </Link>
                        </li>
                        <li className="nav-item nav-mobile">
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="#"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;Services </Link>
                        </li>
                        <li className="nav-item nav-mobile">
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="#"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;Blog </Link>
                        </li>
                        <li className="nav-item nav-mobile">
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="#"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;Career </Link>
                        </li>
                        <li className="nav-item nav-mobile">
                        <Link className="nav-link fw-normal fs-4 align-content-center justify-content-center cursor-pointer" to="/contact-us"><FontAwesomeIcon icon={faCircle} style={{fontSize : 12}} />&nbsp;&nbsp;Contact </Link>
                        </li>
                    </ul>
                </nav>
            }
        </div>
  )
}
