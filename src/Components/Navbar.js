import { useState } from 'react';
import '../ComponentCSS/nav.css'
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';





export default function NavBar(){

  const [openclose, setOpenClose] = useState(false)

  function handleOpenClose(){
    setOpenClose(prevState=> !prevState)
  }

 
return (
  <nav>
    <div className="logo">
       <img src="../assets/teslalogo.png" alt="" height="50"/>
    </div>
    <div className="middle">
      
        <li><a href="/">Model S</a></li>
        <li><a href="/">Model 3</a></li>
        <li><a href="/">Model X</a></li>
        <li><a href="/">Model Y</a></li>
        <li><a href="/">Solar Panel</a></li>
        <li><a href="/">Solar Roof</a></li>
      
      
      

    </div>

    <div className="third">
      
        <li><a href="/">Shop</a></li>
        <li><a href="/">Account</a></li>
        <div className="menu">
          <div className='menu' onClick={handleOpenClose} >Menu</div>
        </div>
        
      

    </div>
   
 

  <div className="NavMenu">
    
   
      <MenuBar show={openclose} className="menubar" >
        <Fade bottom>
          <div className="close" >
            <CloseIcon onClick={handleOpenClose}></CloseIcon>
          </div>
        
            <li><a href="/" className='line'>Existing Inventory</a></li>
            <li><a href="/" className='line'>Used Inventory</a></li>
            <li><a href="/" className='line'>Trade-In</a></li>
            <li><a href="/" className='line'>Test Drive</a></li>
            <li><a href="/" className='line'>Insurance</a></li>
            <li><a href="/" className='line'>Cybertruck</a></li>
            <li><a href="/" className='line'>Roadster</a></li>
            <li><a href="/" className='line'>Semi</a></li>
            <li><a href="/" className='line'>Charging</a></li>
            <li><a href="/" className='line'>Powerwall</a></li>
            <li><a href="/" className='line'>Commercial Energy</a></li>
            <li><a href="/" className='line'>Utlities</a></li>
            <li><a href="/" className='line'>Find Us</a></li>
            <li><a href="/" className='line'>Support</a></li>
          </Fade>

      </MenuBar>
  
  </div>





  </nav>
)
}



const MenuBar = styled.div`

position: fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
list-style: none;
width: 300px;
z-index: 10;
display: flex;
flex-direction: column;
gap: 1.2rem;
padding: 30px;
text-align: center;
transform: ${props => props.show ? 'translateX(0%)' : 'translateX(100%)' };


`