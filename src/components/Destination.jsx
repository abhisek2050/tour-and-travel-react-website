import React from 'react'
import './DestinationStyle.css'
import DesImg1  from '../assets/1.jpg'
import DesImg2  from '../assets/2.jpg'
import DesImg3  from '../assets/3.jpg'
import DesImg4  from '../assets/4.jpg'
import DestinationData from './DestinationData'

const Destination = () => {
  return (
    <div className='destination'>
        <h1>Popular Destination</h1>
        <p className='para'>Tours gives you oppertunity to see alot, within a time frame</p>

        <DestinationData
        clsName="first-des"
        heading="Taal Volkano, Batangas" 
        text = "Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorum voluptatibus autem debitis voluptatum aliquid porro assumenda
        voluptatem vitae reprehenderit nisi odit id omnis consequatur
        doloremque praesentium, dolore sit voluptate aspernatur expedita ut
        eveniet magnam perspiciatis asperiores doloribus.
        Quidem eveniet quaerat doloribus reiciendis cum odio mollitia nulla,
        magni voluptate blanditiis alias."

        img1= {DesImg1}
        img2= {DesImg2}
        />

        <DestinationData
        clsName="first-des-reverse"
        heading="Mt. Daguldul, Batangas" 
        text = "Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Ea fugiat atque incidunt velit 
        ratione ipsa! Error, natus fugit. Natus neque fuga 
        consequuntur esse molestiae vero animi magni aut 
        adipisicing elit. Ea fugiat atque incidunt velit 
        ratione ipsa natus fugit. Natus neque fuga 
        consequuntur esse molestiae vero animi magni aut 
        adipisicing elit. Ea fugiat atque incidunt velit 
        ratione ipsa esse molestiae vero animi magni aut."

        img1= {DesImg3}
        img2= {DesImg4}
        />
    </div>
  )
}

export default Destination