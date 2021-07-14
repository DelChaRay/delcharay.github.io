import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import calToursHomeImg from '../../../../Assets/Images/CalTours/Home.png';
import calToursFirstImg from '../../../../Assets/Images/CalTours/First.png';
import calToursSecondImg from '../../../../Assets/Images/CalTours/Second.png';
import calToursThirdImg from '../../../../Assets/Images/CalTours/Third.png';


const CalToursPhoneHome = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const CalToursPhoneFirst = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.9)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
`;

const CalToursPhoneSecond = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 5}%) scale(0.7)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-75vh;
left:2vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
`;

const CalToursPhoneThird = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-55vh;
right: 5vw;
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
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <CalToursPhoneThird src={calToursThirdImg} scroll={scrollPercent} alt="CalToursThird" />
        <CalToursPhoneSecond src={calToursSecondImg} scroll={scrollPercent} alt="CalToursSecond" />
        <CalToursPhoneFirst src={calToursFirstImg} scroll={scrollPercent} alt="CalToursFirst" />
        <CalToursPhoneHome src={calToursHomeImg} scroll={scrollPercent} alt="CalToursHome" />
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
