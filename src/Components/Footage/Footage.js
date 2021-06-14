import React from 'react'
import image from '../../Images/image 172.png';
const Footage = () => {
    return (
        <div className="row">
            <div className="col-md-6 mt-5">
                <img style={{ width: '500px' }} src={image} alt="" />
            </div>
            <div className="col-md-6">
                <div className="row container-fluid">
                    <div className="col-md-12 mt-5">
                        <div className="box1">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Game1</th>
                                    <th>Game2</th>
                                    <th>Game3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Player 1</th>
                                    <th>21</th>
                                    <th>16</th>
                                    <th>14</th>
                                </tr>
                                <tr>
                                    <th>Player 2</th>
                                    <th>16</th>
                                    <th>21</th>
                                    <th>15</th>
                                </tr>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    <div className="col-md-12 mt-5">
                        <h4 className="text-start">Match Stars</h4>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="box">
                                <p>Match</p>
                                <p>Duration</p>
                                <p>15000s</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                <p>AVg</p>
                                <p>Rally length</p>
                                <p>9.6</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                <p>Avg</p>
                                <p>Rest/point</p>
                                <p>9.8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footage
