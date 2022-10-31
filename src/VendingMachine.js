import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'


const VendingMachine = () => {
    return (
        <main className="VendingMachine"> 
        <h1>Vending Machine</h1>
        <div className="VendingContainer"> 
        <div className="Options">
        
        <h2><Link to='/soda'>Soda</Link></h2>
        <h2><Link to='/chips'>Chips</Link></h2>
        <h2><Link to='/sardines'>Sardines</Link></h2>
        </div>

        </div>
        </main>
    
        
    )

}

export default VendingMachine