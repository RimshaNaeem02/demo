import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';

const App = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  const rtcProps = {
    appId: "8fe3c7e26b6849bd98669a9613c23389",
    channel: "rimsha",
    token: "007eJxTYIiV4ls+ha3Kf+6av+bcJj8rP4ZoWXPLiHKH1f+9HSd95ZMCg0VaqnGyeaqRWZKZhYllUoqlhZmZZaKlmaFxspGxsYWlUGpsWkMgI4OVtD0zIwMjAwsQg/hMYJIZTLKASTaGoszc4oxEBgYAlzMetg==",
    enableVideo: true,
    enableAudio: true,
    displayUsername: true,
    layout: 0,
  };

  const callbacks = {
    EndCall: () => {
      setVideoCall(false);
      setIsScreenSharing(false);
      // stopScreenShare();
    },
  };

  const handleStartCall = () => {
    setVideoCall(true);
  };

  const toggleScreenShare = () => {
    if (isScreenSharing) {
      //AgoraUIKit.stopScreenShare();
    } else {
      // AgoraUIKit.startScreenShare();
    }
    setIsScreenSharing(!isScreenSharing);
  };

  return (
    <div style={{
      color: "red",
      display: 'flex',
      width: "95vw",
      height: "80vh",
      margin: '10px auto',
    }}>

      {videoCall ? (
        <>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
          {/* <button style={{
color: "red",
display: 'flex',
width: "9vw",
height: "80vh"
}} className='btn' onClick={toggleScreenShare}>
{isScreenSharing ? 'Stop Screen Share' : 'Start Screen Share'}
</button> */}
        </>
      ) : (
        <button style={{
          color: "red",
          display: 'flex',
          width: "80px",
          justifyContent: 'center',
          alignItems: 'center',
          height: "22px"
        }} className='btn' onClick={handleStartCall}>Start Call</button>
      )}
    </div>
  );
};

export default App;
