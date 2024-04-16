import React from 'react';
import { faWind, faCloud } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function WhetherBox(props){
    return(
            <div className="col-xs-12 col-sm-4">
                <div className="whether text-center">
                    <p>{props.item.title}</p>
                    <h3 className="vh3">{props.item.remark}</h3>
                    <div>
                        <img src={props.item.weatherIcon} alt="whether icon" className="weatherIcon" />
                    </div>
                    <h1 className="temp">{props.item.TempMin} | {props.item.TempMax}</h1>
                    <div className="whether-details">
                        <ul>
                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faWind} />
                                </div>
                                <div className="data">
                                    <p>{props.item.Wind}</p>
                                </div>
                            </li>
                        
                            <li>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faCloud} />
                                </div>
                                <div className="data">
                                    <p>{props.item.clouds}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}