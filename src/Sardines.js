import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css'

const Sardines = () => {
    return (
        <div className="SardinesContainer">
            <img className="Sardines" src="https://media.tenor.com/CRrH5FNFLbYAAAAM/sardines-fish.gif"/>
            <h2><Link to='/'>GO BACK</Link></h2>

        </div>
    )
}

export default Sardines