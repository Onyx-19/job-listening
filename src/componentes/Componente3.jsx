import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente3 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='div'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807563/images/account_uocyxr.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>Account</h5>
                            <h5 className='contN'>NEW!</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Junior Frontend Developer</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>2d ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Part Time</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>USA only</h4>
                        </div>
                    </div>
                    <div className='cont3'>
                        <div className='divCont5'>
                            <button>Frontend</button>
                            <button>Junior</button>
                            <button>JavaScript</button>
                            <button>React</button>
                            <button>Sass</button>
                        </div>
                    </div>
                </div>
            </StyleCom>
        )
    }
}