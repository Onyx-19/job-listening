import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente1 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='div'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807565/images/myhome_o1sgio.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>MyHome</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Junior Frontend Developer</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>5d ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Contract</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>USA only</h4>
                        </div>
                    </div>
                    <div className='cont3'>
                        <div className='divCont5'>
                            <button>Frontend</button>
                            <button>Senior</button>
                            <button>CSS</button>
                            <button>JavaScript</button>
                        </div>
                    </div>
                </div>
            </StyleCom>
        )
    }
}