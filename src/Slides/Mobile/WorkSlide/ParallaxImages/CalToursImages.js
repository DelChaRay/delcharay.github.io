import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import homeImg from '../../../../Assets/Images/CalTours/Home.png';
import firstImg from '../../../../Assets/Images/CalTours/First.png';
import secondImg from '../../../../Assets/Images/CalTours/Second.png';
import thirdImg from '../../../../Assets/Images/CalTours/Third.png';

const First = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -170vh;
transform-origin: left center;
left:2vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const Home = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8.5}%) scale(0.62)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-125vh;
right: 2vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 80vh;
`;

const Third = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3.5}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-110vh;
left:10vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

const Second = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.45)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-105vh;
right: 10vw;
transform-origin: right center;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

class CalToursImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight) + index - 1;
    // console.log('WMF scrollOffsetPercent ', scrollOffsetInPercent);
    scrollPercent -= scrollOffsetInPercent;
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('WMF');
    }
    return (
      <React.Fragment>
        <Third src={thirdImg} scroll={scrollPercent} alt="third" />
        <Second src={secondImg} scroll={scrollPercent} alt="second" />
        <Home src={homeImg} scroll={scrollPercent} alt="Home" />
        <First src={firstImg} scroll={scrollPercent} alt="First" />
      </React.Fragment>
    );
  }
}

CalToursImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default CalToursImages;
