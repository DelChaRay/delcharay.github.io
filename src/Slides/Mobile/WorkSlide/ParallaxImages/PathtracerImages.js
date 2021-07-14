import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import spheres from '../../../../Assets/Images/Pathtracer/Spheres.png';
import dragons from '../../../../Assets/Images/Pathtracer/Dragon.png';
import copperBunny from '../../../../Assets/Images/Pathtracer/CopperBunny.png';
import goldenDragon from '../../../../Assets/Images/Pathtracer/GoldenDragon.png';


const Spheres = styled.img.attrs({
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

const Dragons = styled.img.attrs({
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

const GoldenDragon = styled.img.attrs({
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

const CopperBunny = styled.img.attrs({
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

class PathtracerImages extends Component {
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
        <CopperBunny src={copperBunny} scroll={scrollPercent} alt="copperBunny" />
        <GoldenDragon src={goldenDragon} scroll={scrollPercent} alt="goldenDragon" />
        <Dragons src={dragons} scroll={scrollPercent} alt="dragons" />
        <Spheres src={spheres} scroll={scrollPercent} alt="spheres" />
      </React.Fragment>
    );
  }
}

PathtracerImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default PathtracerImages;
