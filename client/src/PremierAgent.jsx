import React from 'react';
import styled from 'styled-components';

// styled components
import {
  AgentContainer,
  Radio,
  Avatar,
  Infobox,
  Badge,
  Name,
  ReviewContainer,
  Stars,
  SalesContainer
} from '../styles.js';

const PremierAgent = ({ pAgents }) => {
  return (
    <AgentContainer>
      <div className="left">
        <input type="radio" />
        <Avatar src={pAgents.url}></Avatar>
        <Infobox>
          <Name>{pAgents.name}</Name>
          <ReviewContainer>
            <span className="starContainer">
              <Stars src="https://s3.amazonaws.com/xillowstars/stars.png" ></Stars>
            </span>
            <span>(<a className="reviewColor">{pAgents.reviews}</a>)</span>
          </ReviewContainer>
          <SalesContainer>
            <span className="salesCount">{pAgents.recentSales}</span>
            <span className="salesText">Recent sales</span>
          </SalesContainer>
          <a className="phoneNumber">{pAgents.phone}</a>
        </Infobox>
      </div>
      <Badge>Premier Agent</Badge>
    </AgentContainer >

  )
}

export default PremierAgent;