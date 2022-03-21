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

    .divCont1{
      width: 11% !important;
      margin: -40px 0 0 0;
    }
    .img{
      margin: 0 0 0 0;
      height: 40px !important;
      width: 40px !important;
    }
    .divN{
      width: 80% !important;
      margin: 25px 5px !important;
      font-size: 11px !important;
      display: block !important;
    }
    .divCont2{
      margin-top: 20px !important;
    }
    .divCont4{
      width: 160% !important;
      border: solid;
      border-width: 0 0 2.5px 0;
      margin: 0 5px 10px 15px;
      padding: 0 0 5px 0;
    }      
    .cont3{

      width: auto !important;
    }
    .cont5{
      width: 300px;
      justify-content: none !important;
    }
    .divCont5{
      justify-content: left !important;
    }
    button{
      font-size: 10px;
      margin: 0 0 0 5px !important;
    }

    .div{
      width: 80% !important;
      margin: 25px 5px !important;
      font-size: 11px !important;
      display: block !important;
    }   
} 

`

export default StyleCom