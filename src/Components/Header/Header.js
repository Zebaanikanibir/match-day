import React from 'react'
import image1 from '../../Images/1570683425-removebg-preview 1.png';
import image2 from '../../Images/carolina-china-removebg-preview 1.png';
import img1 from '../../Images/Ellipse 900.png';
import img2 from '../../Images/Ellipse 92.png';
import './Header.css';

const Header = () => {
  return (
    <div className="row container-fluid header">
        <div className="col-md-4">
            <img src={image1} alt="" />
        </div>
        <div className="col-md-4">
            <h1>Olympic Tokyo</h1>
            <h6>Semi Finale court 1</h6>
            <div className="row">
                <div className="col-md-4">
                    <img src={img1} alt="" />
                </div>
                <div className="col-md-4">
                    <div>
                        v/s
                    </div>
                    <p><small>11-21,21-14,21-14</small></p>
                </div>
                <div className="col-md-4">
                <img src={img2} alt="" />
                </div>
            </div>
        </div>
        <div className="col-md-4">
        <img src={image2} alt="" />
        </div>
    </div>
  )
}

export default Header
