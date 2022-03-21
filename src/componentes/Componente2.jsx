import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente2 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='divN'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807565/images/manage_u9cajn.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>Manage</h5>
                            <h5 className='contN'>NEW!</h5>
                            <h5 className='contF'>FEATURED</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Fullstack Developer</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>1d ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Part time</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>Remote</h4>
                        </div>
                    </div>
                    <div className='cont3'>
                        <div className='divCont5'>
                            <button>Fullstack</button>
                            <button>Midweight</button>
                            <button>Python</button>
                            <button>React</button>
                        </div>
                    </div>
                </div>
            </StyleCom>
        )
    }
}