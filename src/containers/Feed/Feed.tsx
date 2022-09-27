import React, { FC } from "react";
import styled from "styled-components";

const FeedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const ROOT_API = "https://api.stackexchange.com/2.2/";

interface FeedProps {}

const Feed = () => {
  return <FeedWrapper>Feed Component</FeedWrapper>;
};

export default Feed;
