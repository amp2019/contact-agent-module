// import styled from 'styled-components';

// AllAgents
export const Ad = styled.a`
font-size: 12;
font-weight: 300;
text-decoration: none;
color: #0074e4;
`;

// App
export const Title = styled.h2`
  display: block;
  font-family: Gotham,gotham,Verdana,sans-serif;
  font-size: 13px;
  line-height: 1.5;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const AppContainer = styled.div`
display: block;
width: 300px;
height: 796px;
border: 1px solid #ccc;
border-top: 2px solid #0074e4;
box-shadow: 0 0 2px rgba(0,0,0,.2);
padding: 10px;
`;

export const FinePrint = styled.p`
margin-top: 10px;
font-size: 13px;  //self
font-family: Gotham,gotham,Verdana,sans-serif;
line-height: 1.5;
    font-weight: 400;
    color: #666;
`;

export const Spacer = styled.hr`
margin-top: 0;
padding-bottom: 0;
margin-bottom: 15px;
border-color: #ccc;
    border-style: solid;
    border-width: 0 0 1px;
`;

// Form
export const FormContainer = styled.div`
  box-sizing: border-box;
  display: block;
  font-family: Gotham,gotham,Verdana,sans-serif;
  line-height: 1.5;
  color: #444;
`;

export const Input = styled.input`
  padding-left: 25px;
  margin-bottom: 7px; //self
  min-height: 30px;
  font-size: .86666667rem;
  height: 30px;
  line-height: 1.5em;
  width: 100%;
  border: 1px solid #aaa;
  background-color: #fff;
  box-shadow: inset 0 2px 2px #fafafa, 0 0 0 #62aef7;
  box-sizing: border-box;
  color: inherit;
  font: inherit;

  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
`;

export const Button = styled.button`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  display: inline-block;
  padding: .4em .67em;
  text-align: center;
  white-space: normal;
  background: #0074e4;
  color: #fff;
  margin-bottom: 10px;
`;

export const ContactAgent = styled.span`
font-size: 18px; //self
box-sizing: border-box;
color: #fff;
text-align: center;
white-space: normal;
line-height: 1.5;

`;

export const FinanceInfo = styled.input`
content: "";
border: 1px solid #aaa;
border-color: #666;
background-color: #fff;
`;

export const FinanceSpan = styled.span`
color: #444;
`;

// ListedAgent & PremierAgent
export const AgentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-diretion: row;
  margin-bottom: 10px;

  .left {
    display: flex;
    align-items: center;

  }
`;

export const Radio = styled.input`
  content: "";
  border: 1px solid #aaa;
  background-color: #fff;
  border-radius: 99px;
`;

export const Avatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 5px;
`;

export const Infobox = styled.div`
  display: block;
  line-height: 1em;
  letter-spacing: normal;
  word-spacing: normal;
  text-rendering: auto;
  font-family: Gotham,gotham,Verdana,sans-serif;

  .phoneNumber {
    font-size: 14px;
    display: block;
    font-family: Gotham,gotham,Verdana,sans-serif;
    color: #444;
  }
`;

export const Badge = styled.span`
display: inline-block;
    max-width: 45px;
    padding: 1px 2px;
    font-family: arial,sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
    line-height: 8px;
    border-radius: 2px;
    border: 1px solid #eee;
    color: #aaa;
`;

export const Name = styled.span`
color: #0074e4;
display: block;
font-size: 15px;
font-family: Gotham,gotham,Verdana,sans-serif;
`;

export const ReviewContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 3px;  //self
  .starContainer {
    display: flex;
    flex-direction: row;
    color: #03c04a;
  }
  .reviewColor {
    font-size: 15px;
    color: #0074e4;
  }
`;

export const Stars = styled.img`
width:95px;
height:20px;
`;

export const SalesContainer = styled.span`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 3px;  //self
  .salesCount {
    display: inline-block;
    text-align: center;
    font-size: 14px;
    color: #fff;
    background-color: #1b5098;
    padding: 2px;
    min-width: 20px;
    font-weight: 700;
    border-radius: 2px;
    line-height: 13px;
    height: auto;
  }
  .salesText {
    font-size: 14px;  //self
    color: #444;
  }
`;