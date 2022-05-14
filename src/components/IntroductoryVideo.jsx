import React from "react";
import styled from "styled-components";
import VideoJS from "../components/sub-components/VideoJs";

const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 19px;
  background-color: #000;
`;

function IntroductoryVideo(props) {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    // lookup the options in the docs for more options
    autoplay: true,
    responsive: true,
    controls: true,
    fill: true,
    preferFullWindow: true,
    playbackRates: [0.5, 1, 1.5, 2],
    responsive: true,
    poster:
      "https://images.unsplash.com/photo-1533518463841-d62e1fc91373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

    sources: [
      {
        src: "https://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };
  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // you can handle player events here
    player.on("waiting", () => {
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      console.log("player will dispose");
    });
    player.pause();
  };

  // const changePlayerOptions = () => {
  //   // you can update the player through the Video.js player instance
  //   if (!playerRef.current) {
  //     return;
  //   }
  //   // [update player through instance's api]
  //   playerRef.current.src([{src: 'http://ex.com/video.mp4', type: 'video/mp4'}]);
  //   playerRef.current.autoplay(false);
  // };
  return (
    <VideoContainer>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </VideoContainer>
  );
}

export default IntroductoryVideo;
