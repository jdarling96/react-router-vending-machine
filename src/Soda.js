import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
    return (
        <div>
            <img className="Soda" src="https://media.tenor.com/DtzyrD92obIAAAAC/coke-cocacola.gif"/>
            <h2><Link to='/'>GO BACK</Link></h2>
        </div>
    )
}

export default Soda