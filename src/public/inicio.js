import React from 'react';

import { Link } from 'react-router-dom'

const Inicio = () => {
    return (
        <div>
            <div className='container'>
                <div className='header'>
                    <img className="imgdimen" src='/img/bus.png' alt='pasajes terminal viajes' /><span className="titleheader">TRANSTINT BOL</span>
                </div>
            </div>
            <div id='conteItemsCarrucel'>
                <div className='itemCarrucel' id='itemCarrucel-1' >
                    <div className="imagenCarrucel" id='imagenCarrucel-1'>
                        A
                    </div>
                    <div className="flechasCarrucel">
                        <Link to='#itemCarrucel-3'><i>I</i></Link>
                        <Link to='#itemCarrucel-2'><i>D</i></Link>

                    </div>
                </div>
                <div className='itemCarrucel' id='itemCarrucel-2'>
                    <div className="imagenCarrucel" id='imagenCarrucel-2'>
                        B
                    </div>
                    <div className="flechasCarrucel">
                        <Link to='#itemCarrucel-1'><i>I</i></Link>
                        <Link to='#itemCarrucel-3'><i>D</i></Link>
                    </div> 
                </div>
                <div className='itemCarrucel' id='itemCarrucel-3'>
                    <div className="imagenCarrucel" id='imagenCarrucel-3'>
                        C
                    </div>
                    <div className="flechasCarrucel">
                        <Link to='#itemCarrucel-2'><i>I</i></Link>
                        <Link to='#itemCarrucel-1'><i>D</i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Inicio;
