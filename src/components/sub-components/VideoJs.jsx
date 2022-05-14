import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

// // City
// import "@videojs/themes/dist/city/index.css";
// // Fantasy
// import "@videojs/themes/dist/fantasy/index.css";

// // Forest
// import "@videojs/themes/dist/forest/index.css";

// // Sea
// import "@videojs/themes/dist/sea/index.css";

export const VideoJS = (props) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  const { options, onReady } = props;

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;

      const player = (playerRef.current = videojs(videoElement, options, () => {
        console.log("player is ready");
        onReady && onReady(player);
      }));
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoRef]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div
      data-vjs-player
      style={{ borderRadius: "20px" }}
      className="video-js vjs-control-bar vjs-icon-circle-play vjs-big-play-centered"
    >
      <video ref={videoRef} />
    </div>
  );
};

export default VideoJS;
