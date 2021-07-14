import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import sixPackAbsHomeImg from '../../../../Assets/Images/SixPackAbs/Home.png';
import sixPackAbsFirstImg from '../../../../Assets/Images/SixPackAbs/First.png';
import sixPackAbsSecondImg from '../../../../Assets/Images/SixPackAbs/Second.png';
import sixPackAbsThirdImg from '../../../../Assets/Images/SixPackAbs/Third.png';


const SixPackAbsPhoneHome = styled.img.attrs({
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

const SixPackAbsPhoneFirst = styled.img.attrs({
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

const SixPackAbsPhoneSecond = styled.img.attrs({
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

const SixPackAbsPhoneThird = styled.img.attrs({
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

class SixPackAbsImages extends Component {
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
        <SixPackAbsPhoneThird src={sixPackAbsThirdImg} scroll={scrollPercent} alt="SixPackAbsThird" />
        <SixPackAbsPhoneSecond src={sixPackAbsSecondImg} scroll={scrollPercent} alt="SixPackAbsSecond" />
        <SixPackAbsPhoneFirst src={sixPackAbsFirstImg} scroll={scrollPercent} alt="SixPackAbsFirst" />
        <SixPackAbsPhoneHome src={sixPackAbsHomeImg} scroll={scrollPercent} alt="SixPackAbsHome" />
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
