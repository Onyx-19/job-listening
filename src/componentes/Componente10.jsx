import React, { Component } from 'react'
import StyleCom from "../style/StyleCom";

export default class Componente1 extends Component {
    render() {
        return (
            <StyleCom>
                <div className='div'>
                    <div className='divCont1'>
                        <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807566/images/the-air-filter-company_c2vwvh.svg" alt="img" />
                    </div>
                    <div className='cont2'>
                        <div className='divCont2'>
                            <h5 className='cont'>The Air Filter Company</h5>
                        </div>
                        <div className='divCont3'>
                            <h2 className='cont5'>Front-end Dev</h2>
                        </div>
                        <div className='divCont4'>
                            <h4 className='cont4'>1mo ago</h4>
                            <h4 className='cont4'>•</h4>                            
                            <h4 className='cont4'>Part time</h4>
                            <h4 className='cont4'>•</h4>
                            <h4 className='cont4'>Worldwide</h4>
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