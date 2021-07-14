import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import home from '../../../../Assets/Images/ActionMap/Home.png';
import state from '../../../../Assets/Images/ActionMap/State.png';
import representatives from '../../../../Assets/Images/ActionMap/Representatives.png';
import events from '../../../../Assets/Images/ActionMap/Events.png';


const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 30}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -240vh;
left:0vw;
/* border: 1px dashed red; */
height: 50vh; 
`;

const States = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 23}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-225vh;
right: 0vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 50vh;
`;

const Events = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 10}%) scale(0.7)`,
  }),
})`
bottom:-125vh;
left:-4vw;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
`;

const Representatives = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.6)`,
  }),
})`
bottom:-80vh;
right: 1vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 50vh;
`;

class VoistrapWebImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <Representatives src={representatives} scroll={scrollPercent} alt="representatives" />
        <Events src={events} scroll={scrollPercent} alt="events" />
        <States src={state} scroll={scrollPercent} alt="state" />
        <Home src={home} scroll={scrollPercent} alt="home" />
      </React.Fragment>
    );
  }
}

VoistrapWebImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default VoistrapWebImages;
