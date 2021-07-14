import React, { Component } from 'react';
import styled from 'styled-components';
import vhCheck from 'vh-check';
import TextContent from './TextContent';
import ImageContent from './ImageContent';

const Container = styled.div`
    display: flex;
    flex-flow: row nowrap;
    /* border: 1px dashed red; */
`;

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vh: 0,
      slideNumber: 0,
    };
    this.pageSplitTimes = 1.3;
    this.lastScrollTop = 0;
    this.scrollDirectionDown = true;
    this.handleScroll = this.handleScroll.bind(this);
    this.workDetails = [
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
      {
        number: 'Project 1',
        projectName: '6-Pack Abs',
        projectDesc: 'An iOS mobile application that conveniently, through auditory cues, guides users through an abdominal workout routine.',
        projectType: 'iOS APP',
        roles: ['Swift', 'UITableView', 'Model-View-Controller'],
      },
      {
        number: 'Project 2',
        projectName: 'CalTours',
        projectDesc: 'A campus tour iOS mobile application that gives users information about various points of interest around the Cal campus.',
        projectType: 'iOS APP',
        roles: ['Swift', 'PageViewController', 'JSON', 'Model-View-Controller'],
      },
      {
        number: 'Project 3',
        projectName: 'ActionMap',
        projectDesc: 'A web application that politically informs users by allowing them to view political representatives and events in their area.',
        projectType: 'WEB APP',
        roles: ['Ruby on Rails', 'RESTful API', 'Travis CI', 'Codecov', 'Model-View-Controller', 'Agile lifecycle'],
      },
      {
        number: 'Project 4',
        projectName: 'MOOCbase',
        projectDesc: 'Developed a custom relational database management system in Java to better understand the internals of databases.',
        projectType: 'Database System',
        roles: ['Java', 'Multi granularity locking', 'Database recovery', 'Query optimization', 'B+ tree indices'],
      },
      {
        number: 'Project 5',
        projectName: 'UnicornBox',
        projectDesc: 'An end-to-end encrypted file sharing system that allows users to safely and securely share files.',
        projectType: 'WEB APP',
        roles: ['Go', 'Argon2', 'RSA', 'SHA-256 hashing', 'Salting'],
      },
      {
        number: 'Project 6',
        projectName: 'Pathtracer',
        projectDesc: 'A physically-based renderer that uses a pathtracing algorithm to generate realistic pictures.',
        projectType: 'Graphics Renderer',
        roles: ['C++', 'OpenGL', 'Physically Based Lighting', 'Bounding Volume Hierarchy'],
      },
      {
        number: '',
        projectName: '',
        projectDesc: '',
        projectType: '',
        roles: [''],
      },
    ];
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    const vhDiff = vhCheck().offset;
    this.setState(
      {
        vh: Math.round(
          (window.document.documentElement.clientHeight + vhDiff) * this.pageSplitTimes,
        ),
      },
    );
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    const { body, documentElement } = event.srcElement;
    const { vh, slideNumber } = this.state;
    const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
    if (scrollDistance > this.lastScrollTop) {
      this.scrollDirectionDown = true;
    } else {
      this.scrollDirectionDown = false;
    }
    this.lastScrollTop = scrollDistance;
    // console.log(scrollDistance);

    if (Math.floor(scrollDistance / vh) !== slideNumber
      && slideNumber < this.workDetails.length - 1) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    } else if (slideNumber === this.workDetails.length - 1
      && (Math.floor(scrollDistance / vh) < slideNumber)) {
      this.setState({ slideNumber: Math.floor(scrollDistance / vh) });
    }
  }

  changeTextContentBasedOnScroll() {
    const { slideNumber } = this.state;
    const refresh = true;
    return (
      <TextContent
        number={this.workDetails[slideNumber].number}
        projectName={this.workDetails[slideNumber].projectName}
        projectDesc={this.workDetails[slideNumber].projectDesc}
        projectType={this.workDetails[slideNumber].projectType}
        roles={this.workDetails[slideNumber].roles}
        refreshToggle={refresh}
      />
    );
  }

  render() {
    return (
      <Container>
        {this.changeTextContentBasedOnScroll()}
        <ImageContent pageSplitTimes={this.pageSplitTimes} />
      </Container>
    );
  }
}

export default Work;
