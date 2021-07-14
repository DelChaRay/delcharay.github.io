import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import home from '../../../../Assets/Images/UnicornBox/Home.png';
import uploading from '../../../../Assets/Images/UnicornBox/Uploading.png';
import listing from '../../../../Assets/Images/UnicornBox/Listing.png';

const UploadingTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 13}%) scale(0.8)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-220vh;
left: 2vw;
transform-origin: left center;
/* border: 1px dashed red; */
height: 70vh;

`;

const HomeTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 9}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -210vh;
right: 3vw;
transform-origin: right center;
/* border: 1px dashed red; */
height: 70vh; 
`;

const ListingTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 3}%) scale(0.5)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-135vh;
left: 3vw;
transform-origin: left center;
position: absolute;
/* border: 1px dashed red; */
height: 70vh;
`;

class UnicornBoxImages extends Component {
  render() {
    let { scrollPercent } = this.props;
    const {
      boxHeight, index, scrollHeight, screenHeight,
    } = this.props;
    const heighttoBeReducedinVH = ((boxHeight * index) - 100);
    const scrollOffset = (screenHeight * heighttoBeReducedinVH) / 100;
    const scrollOffsetInPercent = (scrollOffset * 100 / scrollHeight);
    // console.log('Voistrap scrollOffsetPercent ', scrollOffsetInPercent);
    console.log('scrollPercent ', scrollPercent);
    scrollPercent -= scrollOffsetInPercent;
    if (scrollPercent > 0 && scrollPercent < 0.1) {
      console.log('afterUnicornBox');
    }
    return (
      <React.Fragment>
        <ListingTab src={listing} scroll={scrollPercent} alt="Listing" />
        <HomeTab src={home} scroll={scrollPercent} alt="Home" />
        <UploadingTab src={uploading} scroll={scrollPercent} alt="Uploading" />
      </React.Fragment>
    );
  }
}

UnicornBoxImages.propTypes = {
  boxHeight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  screenHeight: PropTypes.number.isRequired,
  scrollHeight: PropTypes.number.isRequired,
  scrollPercent: PropTypes.number.isRequired,
};

export default UnicornBoxImages;
