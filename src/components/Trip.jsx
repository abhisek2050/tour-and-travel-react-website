import './TripStyle.css';
import React from 'react'
import TripData from './TripData'
import TripImg1 from '../assets/5.jpg'
import TripImg2 from '../assets/6.jpg'
import TripImg3 from '../assets/8.jpg'

const Trip = () => {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p className='para'>You can discover unique destinations using Google Maps. </p>
            <div className="tripcard">
                <TripData img={TripImg1}
                    heading='Trip in Indonesia'
                    text="The Ministry of Tourism and Creative Economy 
                    introduced Indonesia care, a symbol of support 
                    for Indonesia’s strong effort in implementing the 
                    cleanliness, health, safety, and environment 
                    protocols across the tourism industry as mandatory 
                    precautions. All to assure travelers that 
                    Indonesia care for your safety, health, hygiene and comfort."/>

                <TripData img={TripImg2}
                    heading='Trip in Malaysia'
                    text="The Ministry of Tourism and Creative Economy 
                    introduced Indonesia care, a symbol of support 
                    for Indonesia’s strong effort in implementing the 
                    cleanliness, health, safety, and environment 
                    protocols across the tourism industry as mandatory 
                    precautions. All to assure travelers that 
                    Indonesia care for your safety, health, hygiene and comfort."/>

                <TripData img={TripImg3}
                    heading='Trip in France'
                    text="The Ministry of Tourism and Creative Economy 
                    introduced Indonesia care, a symbol of support 
                    for Indonesia’s strong effort in implementing the 
                    cleanliness, health, safety, and environment 
                    protocols across the tourism industry as mandatory 
                    precautions. All to assure travelers that Indonesia 
                    care for your safety, health, hygiene and comfort."/>
            </div>
        </div>
    )
}

export default Trip