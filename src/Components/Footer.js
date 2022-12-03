import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
import '../ComponentCSS/footer.css'


export default function Footer(){

   
    return(
        <Container style={{
            backgroundImage: `url("../assets/merchandise.jpeg")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '100vh'
            
        }}>
        <Fade right>
            <Box>
                <div  className="words">

                        <h2>Accessories</h2>
            
                </div>

                <div className="btn">
                    
                    <button id="order"> Show Now</button>
                </div>


            </Box>
        </Fade>
            
            
            

        </Container>
    )
}



const Container = styled.div`
display: flex;
justify-content: center;
`
const Box = styled.div`
display: flex;
height: 80vh;
flex-direction: column;
justify-content: space-between;


`
