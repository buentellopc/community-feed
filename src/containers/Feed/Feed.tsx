import React, { FC, useEffect, useState } from "react";
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
  const [stackData, setStackData] = useState<{ items: any[] }>(
    {} as { items: any[] }
  );
  const [loading, SetLoading] = useState(true);
  // const [error, SetError] = useState(null)

  useEffect(() => {
    const data = fetch(
      `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`
    );

    async function startFetching() {
      const data = await fetch(
        `${ROOT_API}questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow`
      );

      console.log("here is the data from stack overflow", data);

      const dataJson = await data.json();

      console.log(dataJson);

      setStackData((prevStackData) => dataJson);
      SetLoading(false);
    }

    startFetching();
  }, []);

  return (
    <FeedWrapper>
      Questions from Stack Overflow will go here
      {!loading &&
        stackData.items.map((item, index) => <p key={index}>{item.title}</p>)}
    </FeedWrapper>
  );
};

export default Feed;
