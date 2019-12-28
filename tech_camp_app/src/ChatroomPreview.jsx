import React from "react";
import styled from "styled-components";
import Paper from "material-ui/Paper";
import { Card, CardMedia, CardTitle } from "material-ui/Card";
import YouTube from "react-youtube";

const Wrapper = styled.div`
  cursor: pointer;
`;

const getCardTitleStyle = () => ({
  display: "flex",
  alignItems: "center"
});

export default ({ chatroom, onEnter }) => {
  const opts = {
    height: "640",
    width: "640",
    playerVars: {
      autoplay: 1
    }
  };
  return (
    <Paper style={{ maxWidth: 600, marginBottom: 40 }} zDepth={5}>
      <Wrapper onClick={onEnter}>
        <Card>
          <CardMedia
            overlay={
              <CardTitle title={chatroom.name} style={getCardTitleStyle()} />
            }
          >
            <YouTube videoId={chatroom.url} opts={opts} />
          </CardMedia>
        </Card>
      </Wrapper>
    </Paper>
  );
};
