import React from 'react';
import PropTypes from 'prop-types';
import Box from './common/Box';
import Heading from './common/Heading';
import Container from './common/UI/Container';
import Text from './common/Text';
import Image from './common/Image';
import PersonImage from '../images/person.png';
import WelcomeWrapper from "./welcome.style";

import { FaLinkedin, FaGithub, FaCamera, FaTwitter} from 'react-icons/fa';

// data
const links = [
  {
    text: "linkedin",
    url: "https://www.linkedin.com/in/zawadzkimarcin/",
    icon: <FaLinkedin/>
  },
  {
    text: "github",
    url: "https://github.com/Cinal",
    icon: <FaGithub/>
  },
  {
    text: "twitter",
    url: "https://twitter.com/Cinal",
    icon: <FaTwitter/>
  },

  {
    text: "snapsbycinal",
    url: "https://snapsby.cinal.pl",
    icon: <FaCamera/>
  },
]

const listStyles = {
  marginBottom: 16,
  paddingLeft: 0,
  listStyle: 'none',
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  float: "left",
  paddingRight: "10px"
}

const linkStyle = {
  color: "#fff",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}


const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const WelcomeSection =  ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleWrapper,
}) => {
  return (
    <WelcomeWrapper id="welcome_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content="Hello, I’m" {...greetingStyle} />
            <Heading content="Marcin Zawadzki" {...nameStyle} />
            <Heading content="Software Developer" {...designationStyle} />

            <Box {...roleWrapper}>
            </Box>
            <Text
              content="A programmer, passionate about of tech, photography, open source, medicine and doing things better. Fan of minimalistic and powerful designs."
              {...aboutStyle}
            />

            <ul style={listStyles}>
              {links.map(link => (
                <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                  <span>
                    <a
                      style={linkStyle}
                      href={`${link.url}`}
                    >
                      {link.icon}
                    </a>
                    <p style={descriptionStyle}>{link.description}</p>
                  </span>
                </li>
              ))}
            </ul>

          </Box>
          <Box {...imageArea}>
            <Image src={PersonImage} alt="Marcin Zawadzki Software developer" className="image_area" />
          </Box>
        </Box>
      </Container>
    </WelcomeWrapper>
  );
};

WelcomeSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  jobsStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

WelcomeSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch',
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
  },
  jobsStyle: {
    float: 'left',
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
  },
};

export default WelcomeSection;
