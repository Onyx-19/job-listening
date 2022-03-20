import React, { Component } from 'react'
import styled from 'styled-components'

const Scontainer = styled.div`
    /* background-color: aqua; */
    display: flex;
    border: solid;
    border-radius: 15px;
    
    .cont{
        /* background-color: red; */
        margin: 1px 5px;
        padding: 0px;
    }
    .cont2{
        /* background-color: gray; */
        width: 65%;
    }
    .cont3{
        /* background-color: silver; */
        width: 30%;
        margin: 0 1.5%;

    }
    .img{
        height: 95%;
        width: 95%;
    }
    button{
        padding: 2.5px 5px;
    }
`
const Scontainer1 = styled.div`
    /* background-color: red; */
    width: 6%;
    height: 6%;
    padding: 0.5%;
`
const Scontainer2 = styled.div`
    /* background-color: orange; */
    /* width: 10%; */
    /* height: 0.5%; */
    display: flex;
    margin: 0px;
    padding: 0.5%;
`
const Scontainer3 = styled.div`
    /* background-color: blue; */
    padding: 0.5%;

`
const Scontainer4 = styled.div`
    /* background-color: green; */
    display: flex;
    padding: 0.4%;

`
const Scontainer5 = styled.div`
    /* background-color: yellow; */
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

`

export default class Componente1 extends Component {

    render() {
        return (
            <Scontainer>
                <Scontainer1>
                    <img className='img' src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1647807566/images/the-air-filter-company_c2vwvh.svg" alt="img" />
                </Scontainer1>
                <div className='cont2'>
                    <Scontainer2>
                        <h4 className='cont'>Photosnap</h4>
                        <h4 className='cont'>New!</h4>
                        <h4 className='cont'>Featured</h4>
                    </Scontainer2>
                    <Scontainer3>
                        <h2 className='cont'>Senior Frontend Developer</h2>
                    </Scontainer3>
                    <Scontainer4>
                        <h4 className='cont'>1d ago</h4>
                        <h4 className='cont'>Full time</h4>
                        <h4 className='cont'>USA only</h4>
                    </Scontainer4>

                </div>
                <div className='cont3'>
                    <Scontainer5>
                        <button>Frontend</button>
                        <button>Senior</button>
                        <button>HTML</button>
                        <button>CSS</button>
                        <button>JavaScript</button>
                    </Scontainer5>
                </div>

            </Scontainer>
        )
    }
}