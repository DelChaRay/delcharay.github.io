import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import home from '../../../../Assets/Images/UnicornBox/Home.png';
import uploading from '../../../../Assets/Images/UnicornBox/Uploading.png';
import listing from '../../../../Assets/Images/UnicornBox/Listing.png';

const HomeTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 15}%) scale(0.6)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-140vh;
left: -20vw;
/* border: 1px dashed red; */
height: 80vh;

`;

const UploadingTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 8}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -120vh;
right:0.5vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const ListingTab = styled.img.attrs({
  style: ({ scroll }) => ({
    transform: `translate(0px,-${(scroll) * 2}%) scale(0.4)`,
  }),
})`
transition: transform 0.2s ease-out;
bottom:-65vh;
left: -10vw;
position: absolute;
/* border: 1px dashed red; */
height: 80vh;
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
    scrollPercent -= scrollOffsetInPercent;
    return (
      <React.Fragment>
        <ListingTab src={listing} scroll={scrollPercent} alt="unicornBoxListing" />
        <UploadingTab src={uploading} scroll={scrollPercent} alt="unicornBoxUploading" />
        <HomeTab src={home} scroll={scrollPercent} alt="unicornBoxHome" />
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
