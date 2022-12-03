import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import '../ComponentCSS/Section.css';
import database from './displayData';

 
const Sections = ()=>{
    
    const [data, setData ] = useState(database);
    

    

    return(
       
        <div className="div">
        {data.map((item)=>{
            const {name, description, bigpicture, id, icon} = item
            return(
                <div className="first-section"
                key={id} 
            	style={{
                backgroundImage: `url(${bigpicture})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: '100%',
               
            }}
            
            >
            <Fade bottom>
            
            <div className="box">
            <div  className="words">
                <div className="headline">
                    <h2>{name}</h2>
                </div>
                <div className="sub-headline">
                    <a  href="/" className="sub"> {description}</a>
                </div>
                
                
            </div>

            <div className="btn">
                <div className="btns">

                    <button id="order"> Custom Order</button>
                    <button id="inventory">Existing Inventory</button>

                </div>
                

                <div className='downarrow'>
                    <img src={icon} alt="" height={20}/>
                </div>
            </div>


            </div>
            </Fade>
            


        </div>
            )
            

        })}
        </div>
    )

}

export default Sections;