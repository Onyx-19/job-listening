import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente9 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='div'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807563/images/eyecam-co_xzlcvl.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>Eyecam Co.</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Full Stack Engineer</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>3w ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Full time</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>Worldwide</h4>
                        </div>
                    </div>
                    <div className='cont3'>
                        <div className='divCont5'>
                            <button>Fullstack</button>
                            <button>Midweight</button>
                            <button>JavaScript</button>
                            <button>Python</button>
                            <button>Django</button>
                        </div>
                    </div>
                </div>
            </StyleCom>
        )
    }
}