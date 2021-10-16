import styled from 'styled-components';
const WelcomeWrapper = styled.section`
  position: relative;
  background-color: #030b16;
  display: flex;
  align-items: center;
  padding-top: 0;
  display: flex;
  align-items: flex-end;
  @media (min-width: 991px) {
    min-height: 100vh;
  }

  .image_area {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export default WelcomeWrapper;
