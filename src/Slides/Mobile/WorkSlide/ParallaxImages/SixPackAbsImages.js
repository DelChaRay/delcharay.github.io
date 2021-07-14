import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sixPackAbsHomeImg from '../../../../Assets/Images/SixPackAbs/Home.png';
import sixPackAbsFirstImg from '../../../../Assets/Images/SixPackAbs/First.png';
import sixPackAbsSecondImg from '../../../../Assets/Images/SixPackAbs/Second.png';
import sixPackAbsThirdImg from '../../../../Assets/Images/SixPackAbs/Third.png';


const SixPackAbsPhoneHome = styled.img.attrs({
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

const SixPackAbsPhoneFirst = styled.img.attrs({
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

const SixPackAbsPhoneThird = styled.img.attrs({
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

const SixPackAbsPhoneSecond = styled.img.attrs({
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

class SixPackAbsImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <SixPackAbsPhoneSecond src={sixPackAbsSecondImg} scroll={scrollPercent} alt="sixPackAbsSecond" />
        <SixPackAbsPhoneThird src={sixPackAbsThirdImg} scroll={scrollPercent} alt="sixPackAbsThird" />
        <SixPackAbsPhoneFirst src={sixPackAbsFirstImg} scroll={scrollPercent} alt="sixPackAbsFirst" />
        <SixPackAbsPhoneHome src={sixPackAbsHomeImg} scroll={scrollPercent} alt="sixPackAbsHome" />
      </React.Fragment>
    );
  }
}

SixPackAbsImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default SixPackAbsImages;
