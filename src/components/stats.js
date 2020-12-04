import React from 'react'
import styled from 'styled-components'
import { BsGraphUp } from 'react-icons/bs'
import { FaCheck } from 'react-icons/fa'
import { RiWechatFill } from 'react-icons/ri'


const StatsData = [
    {
        icon: (<BsGraphUp color='#4A3D42'/>),
        title: "High Quality",
        desc: "Our Dog Door Stopper is made of high quality iron that's sturdy enough to hold your doors wide open.",
        desc1: "It also gives a vintage look to your home and it will make for a great conversation piece to everyone who walks through your door",
        desc2: "Besides the quality iron, we made it with love and put a lot of thought into it, so your pets can roam happily around your home."
    },
    {
        icon: (<FaCheck color='green'  />),
        title: "Functionality",
        desc: "It really does what it claims to do, and will do that for years to come, as we're sure it will join your family antique collection.",
        desc1: "We care about your floors and walls too - that's why we've added an ANTI SLIP pad that will protect your floors from scratching.",
        desc2: "You don't have to worry about your doors being slammed anymore with the Half-Moon Door Stopper."
    },
    {
        icon: (<RiWechatFill color='#000' />),
        title: "Customer Service",
        desc: "It means the world to us to make sure that you get the best experience with our products." ,
        desc1:"If any problems occur, don't worry!",
        desc2:"Contact us on any chosen platform or simply click 'Talk with us' Button and our customer service team will help you out as soon as possible!"
    },
]
const Stats = () => {
    return (
        <StatsContainer>
            <Wrapper data-aos="fade-right"> {StatsData.map((item,index)=> {
                return ( <StatsBox key={index}>
                                <Icon>{item.icon}</Icon>
                                <Title>{item.title}</Title>
                                <Desc>{item.desc}</Desc>
                                <br></br>
                                <Desc>{item.desc1}</Desc>
                                
                                <br></br>
                                <Desc>{item.desc2}</Desc>
                        </StatsBox>)
             })}
    </Wrapper>    
        </StatsContainer>
    )
}

export default Stats

const StatsContainer=styled.div`
width:100%;
height:1200px;
background:#FFF;
display:flex;
flex-direction: column;
justify-content: center;
margin-right: 100px;
`
const Wrapper=styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap: 10px;
margin-right:40px;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}

@media screen and (max-width: 500px){
    grid-template-columns: 1fr;
}
`

const StatsBox = styled.div`
height:100%;
width:100%;
padding: 2rem;
`
const Icon = styled.div`
font-size: 3rem;
margin-bottom: 1rem;
`
const Desc = styled.div`
color: #000;
font-weight:550;
`
const Title = styled.p`
font-size: clamp(1rem, 2.5vw, 1.5rem);
margin-bottom: 0.5rem;
font-weight:800;
color: #4A3D42;
`