import React from 'react'
import image from '../../Images/image 173.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import './Analysis.css';
const Analysis = () => {
    return (
        <div className="div mt-5">
            <div>
                <ul className="a-box">
                    <li id="list">Shot Analysis</li>
                    <li>Game Overview</li>
                    <li>Winners & Error</li>
                    <li>Rally length Analysis</li>
                    <li>Area Wise Analysis</li>
                </ul>
            </div>
            <div className="row div1">
                <div className="col-md-4">
                    <h4>Net Drop</h4>
                    <img src={image} alt="" /> <br />


                    <label for="shot" className="start">Select shot type</label> <br />
                    <select id="shot" name="shot" className="pink">
                        <option value="Net drop">Net drop</option>
                        <option value="Net drop">Net drop</option>
                    </select>
                    <label for="game" className="start">Select Game</label> <br />
                    <select id="game" name="game" className="pink">
                        <option value="Net drop">Game 2</option>
                        <option value="Net drop">Game 2</option>
                    </select>
                </div>
                <div className="col-md-8">
                    <div className="d-flex justify-content-around align-items-center">
                        <h4>Shot Analysis</h4>
                        <div className="d-flex justify-content-around">
                            <div><h6>Cross</h6>
                            <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                            <div><h6>Straight</h6>
                            <FontAwesomeIcon icon={faArrowUp} />
                            </div>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className="ash">
                                <th >Game2</th>
                                <th colspan="2">Odd
                                <div className="d-flex justify-content-around">
                                <FontAwesomeIcon icon={faArrowUp} />
                                <FontAwesomeIcon icon={faArrowUp} />
                                </div>
                                </th>
                                <th colspan="2">even 
                                <div className="d-flex justify-content-around">
                                <FontAwesomeIcon icon={faArrowUp} />
                                <FontAwesomeIcon icon={faArrowUp} />
                                </div>
                                </th>
                                <th >Odd Overhead
                                <div className="d-flex justify-content-around">
                                <FontAwesomeIcon icon={faArrowUp} />
                                <FontAwesomeIcon icon={faArrowUp} />
                                 </div>

                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>Count</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>N/A</th>
                                </tr>
                                
                                <tr className="ash">
                                    <th>Winner</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>N/A</th>
                                </tr>
                                <tr>
                                    <th>Winner%</th>
                                    <th>30%</th>
                                    <th>40%</th>
                                    <th>30%</th>
                                    <th>40%</th>
                                    <th>N/A</th>
                                </tr>
                                <tr className="ash">
                                    <th>Errors</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>30</th>
                                    <th>40</th>
                                    <th>N/A</th>
                                </tr>
                                <tr>
                                    <th>Errors%</th>
                                    <th>30%</th>
                                    <th>40%</th>
                                    <th>30%</th>
                                    <th>40%</th>
                                    <th>N/A</th>
                                </tr>
                            </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Analysis
