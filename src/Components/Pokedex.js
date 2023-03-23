// Main component that will hold other components
import Display from './Display';
import axios from 'axios'
import { useState, useEffect } from 'react'


const Pokedex = () => {
    return(
        <>
            <div className="container">
                <div className="left-content">
                    <Display />
                </div>
                <div className="right-content">

                </div>
            </div>
        </>
    )
}

export default Pokedex;