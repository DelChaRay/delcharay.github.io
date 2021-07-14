import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import home from '../../../../Assets/Images/ActionMap/Home.png';
import states from '../../../../Assets/Images/ActionMap/State.png';
import representatives from '../../../../Assets/Images/ActionMap/Representatives.png';
import events from '../../../../Assets/Images/ActionMap/Events.png';


const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 36}%) scale(0.99)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -250vh;
left:2vw;
transform-origin: left center;
/* border: 1px dashed red; */
width: 80vw; 
`;

const States = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 25}%) scale(0.9)`,
  }),
})`
position: absolute;
bottom:-210vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
width: 80vw;
`;

const Events = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
bottom:-160vh;
left:2vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
`;

const Representatives = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 4}%) scale(0.7)`,
  }),
})`
bottom:-120vh;
right: 2vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
width: 80vw;
`;

class ActionMapImages extends Component {
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
        <States src={states} scroll={scrollPercent} alt="states" />
        <Home src={home} scroll={scrollPercent} alt="home" />
      </React.Fragment>
    );
  }
}

ActionMapImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default ActionMapImages;
