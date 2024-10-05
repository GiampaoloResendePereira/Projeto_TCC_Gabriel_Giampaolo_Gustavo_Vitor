import React from 'react'
import NavBar from '../layout/NavBarElement'

function CalculoFrete() {
  return (
    <>
    <NavBar/>
    
    <div className = 'calculo'>
        <div>
           <form action="">Digite o CEP para destino
           <br />
             <input type="text" />
           </form>
        </div>
    <div>
        <form action=""></form>
    </div>
    </div>
    <div className = "Frete">

    </div>
    </>
        
    
  )
}

export default CalculoFrete
