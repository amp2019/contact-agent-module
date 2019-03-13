import React from 'react';
import ListedAgent from './ListedAgent.jsx';
import PremierAgent from './PremierAgent.jsx';
import axios from 'axios';

// styled components
import { Ad } from '../styles.js';


class AllAgents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lAgent: {},
      pAgent0: {},
      pAgent1: {},
      pAgent2: {},
    };
  }
  componentDidMount() {
    let homeId = 99
    if (this.props.houseId) {
      
      homeId = this.props.houseId;
    }
    //props is passed down initially in the index.html, down to agentContact, which is equal to App,
    axios.get(`http://localhost:8083/houseId/listedAgent/${homeId}`)
      .then(response => {
        const listAgent = response.data.agent;
        //console.log(listAgent)
        this.setState({ lAgent: listAgent });
      });
    axios.get(`http://localhost:8083/houseId/premierAgents`)
      .then(response => {
        const preAgent0 = response.data[0];
        const preAgent1 = response.data[1];
        const preAgent2 = response.data[2];
        this.setState({
          pAgent0: preAgent0,
          pAgent1: preAgent1,
          pAgent2: preAgent2,
        });
      });
  }

  render() {
    return (
      <div>
        <ListedAgent lAgent={this.state.lAgent} />
        <PremierAgent pAgents={this.state.pAgent0} />
        <PremierAgent pAgents={this.state.pAgent1} />
        <PremierAgent pAgents={this.state.pAgent2} />
        <Ad>Learn how to appear as the agent above</Ad>
      </div>
    )
  }
};

export default AllAgents;