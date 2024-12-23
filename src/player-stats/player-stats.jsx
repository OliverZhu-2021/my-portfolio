import React from "react";
import styled from "styled-components";

const PlayerStatsWrapper = styled.div`
  position: fixed;
  width: 15rem;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 3rem;
  left: 3rem;

  h1 {
    margin: 0;
    color: white;
    font-size: 1.5rem
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    color: white;
  }

  @media (max-width: 1100px) {
    left: 50%;
    transform: translateX(-50%);
    width: 8rem;
    height: 2.5rem;
    top: 2rem;

    h1 {
      font-size: 0.8rem;
    }

    h2, h3, p {
      font-size: 0.7rem;
    }
  }
`;

const PlayerStatsLines = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SpanThick = styled.span`
  position: relative;
  display: block;
  background-color: white;
  height: 0.2rem;
  width: 8.75rem;
`;

const SpanThin = styled.span`
  position: relative;
  display: block;
  background-color: lightgray;
  height: 0.1rem;
  width: 6.2rem;

`;

const PlayerStats = () => {
  return (
    <PlayerStatsWrapper>
      <h1>Hao Zhu LEVEL 23</h1>
      <PlayerStatsLines>
        <SpanThick></SpanThick>
        <SpanThin></SpanThin>
      </PlayerStatsLines>
      <h2>Fullstack Developer</h2>
    </PlayerStatsWrapper>
  )
};

export default PlayerStats