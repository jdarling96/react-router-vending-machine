import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css'

const Sardines = () => {
    return (
        <div className="SardinesContainer">
            <img className="Sardines" src="https://media.tenor.com/CRrH5FNFLbYAAAAM/sardines-fish.gif"/>
            <Link to='/'>GO BACK</Link>

        </div>
    )
}

export default Sardines