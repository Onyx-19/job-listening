import styled from 'styled-components'

const StyleCom = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');
    .header{
      background-color: hsl(180, 29%, 50%);  
      margin-bottom: 5%;
    }
    .divN{
      width: 85%;
      display: flex;
      border: solid hsl(180, 29%, 50%);
      padding: 20px 0;
      border-radius: 5px;
      font-family: spartan;
      margin: 0 0 5% 10%;
      font-size: 15px;
      border-width: 0 0 0 5px;
      box-shadow: 5px 10px 10px hsl(180, 31%, 95%);
    }
    .div{
      width: 85%;
      display: flex;
      padding: 20px 0;
      border-radius: 5px;
      font-family: spartan;
      margin: 0 0 5% 10%;
      font-size: 15px;
      border-width: 0 0 0 5px;
      box-shadow: 5px 10px 10px hsl(180, 31%, 95%);
    }   
    .cont{
      margin: 1px 5px;
      padding: 5px 10px;
      color: hsl(180, 29%, 50%);
    }
    .cont2{
      width: 55%;
    }
    li{
      text-align: center;
    }
    .cont3{
      width: 40%;
      margin: 0 1.5%;
    }
    .cont4{
      margin: 5px 0 0 15px;
      padding: 0;
    }
    .cont5{
      margin: 5px 0 0 15px;
      padding: 0;
    }
    .cont5:hover{
      color: hsl(180, 29%, 50%); 
    }
    .contN{
      color: white;
      background-color:  hsl(180, 29%, 50%);
      margin: 1px 5px;
      padding: 5px 10px;
      border-radius: 15px;
    }
    .contF{
      color: white;
      background-color: hsl(180, 14%, 20%);
      margin: 1px 5px;
      padding: 5px 10px;
      border-radius: 15px;
    }
    .img{
      height: 105%;
      width: 105%;
    }
    button{
      padding: 2.5px 5px;
    }
    .divCont1{
      width: 6%;
      height: 6%;
      padding: 2px 5px;
    }
    .divCont2{
      display: flex;
      margin: 0px;
    }
    .divCont4{
      color: hsl(180, 8%, 52%);
      display: flex;
    }
    .divCont5{
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: right;
    }
    button{
      background-color: hsl(180, 31%, 95%);
      border: 0;
      border-radius: 5px;
      margin-left: 15px;
      padding: 10px 2.5px;
      font-family: spartan;
      color: hsl(180, 29%, 50%);
    }
    button:hover{
      background-color: hsl(180, 29%, 50%);
      color: white;
    }

    @media(max-width: 400px){
      
    }
`

export default StyleCom