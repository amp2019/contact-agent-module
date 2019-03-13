import React from 'react';

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


const ListedAgent = ({ lAgent }) => {
  return (
    <AgentContainer>
      <div className="left">
        <Radio type="radio"></Radio>
        <Avatar src={lAgent.imgurl}></Avatar>
        <Infobox>
          <Name>{lAgent.name}</Name>
          <ReviewContainer>
            <span className="starContainer">
              <Stars src="https://s3-us-west-2.amazonaws.com/amenities-photos/pillow/5-Star-Rating.png" ></Stars>
            </span>
            <span>(<a className="reviewColor">{lAgent.reviews}</a>)</span>
          </ReviewContainer>
          <SalesContainer>
            <span className="salesCount">{lAgent.recentSales}</span>
            <span className="salesText">Recent sales</span>
          </SalesContainer>
          <a className="phoneNumber">{lAgent.phone}</a>
        </Infobox>
      </div>
      <Badge>Listing Agent</Badge>
    </AgentContainer>

  )
}

export default ListedAgent;