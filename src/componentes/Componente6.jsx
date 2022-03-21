import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente6 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='div'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807563/images/faceit_rkwlq9.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>FaceIt</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Junior Backend Developer</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>2w ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Full time</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>UK only</h4>
                        </div>
                    </div>
                    <div className='cont3'>
                        <div className='divCont5'>
                            <button>Backend</button>
                            <button>Junior</button>
                            <button>Ruby</button>
                            <button>RoR</button>
                        </div>
                    </div>
                </div>
            </StyleCom>
        )
    }
}