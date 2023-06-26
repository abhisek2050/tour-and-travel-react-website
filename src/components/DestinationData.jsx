import './DestinationDataStyle.css';
import React from 'react'

const DestinationData = (props) => {
    return (
        <>
            <div className={props.clsName}>
                <div className="des-text">
                    <h2>{props.heading}</h2>
                    <p>
                        {props.text}
                    </p>
                </div>
                <div className="des-image">
                    <img src={props.img1} alt="image" />
                    <img src={props.img2} alt="image" />
                </div>
            </div>
        </>
    )
}

export default DestinationData