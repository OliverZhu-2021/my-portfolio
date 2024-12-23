import React from 'react';
import PropTypes from 'prop-types';
import avatarImg from '../assets/avatar_v2.png';
import styled from 'styled-components';

const AvatarWrapper = styled.div`
  .avatar {
    position: fixed;
    overflow: hidden;
    z-index: -2;
  }

  .avatar.about {
    height: 89vh;
    bottom: -8vh;
    left: 50%;
    transform: translateX(-50%);
  }

  .avatar.skills {
    height: 190vh;
    bottom: -110vh;
    left: -1.5rem;
    transform: translateX(0%) scaleX(-1);
  }

  .shadow-overlay-skills {
    height: 100vh;
    width: 100vw;
    display: block;
    position: fixed;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.25),
      rgba(255, 255, 255, 0),
    );
    z-index: -1;
  }

  @media (max-width: 1100px) {
    .avatar.skills {
      z-index: -5;
      height: 95vh;
      bottom: -15vh;
    }
  }

  @media (max-width: 700px) {
    .avatar.about {
      z-index: -5;
      height: 95vh;
      bottom: -15vh
    }
  }
`;

const Avatar = ({ page }) => {
  const avatarClass = `avatar ${page}`;
  const spanClass = `shadow-overlay-${page}`;

  return (
    <AvatarWrapper>
      <span className={spanClass}></span>
      <img 
        src={avatarImg} 
        className={avatarClass}
        alt='avatar'
      />
    </AvatarWrapper>
  )
}

Avatar.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Avatar;