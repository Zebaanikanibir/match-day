import React from 'react'
import img1 from '../../Images/Rectangle 2284.png'
import img2 from '../../Images/Rectangle 2285.png'
import img3 from '../../Images/Rectangle 2626.png'
import img4 from '../../Images/Rectangle 2627.png'
const Highlight = () => {
    return (
        <div>
            <h4 className="text-start">Highlights</h4>
            <div className="row container-fluid">
            
            <div className="col-md-3">
                <img src={img1} alt="" />
            </div>
            <div className="col-md-3">
                <img src={img2} alt="" />
            </div>
           
            <div className="col-md-3">
                <img src={img4} alt="" />
            </div>
            <div className="col-md-3">
                <img src={img3} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Highlight
