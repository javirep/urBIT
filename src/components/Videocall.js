import React from 'react';

function Videocall() {
  return (
    <div>
      <iframe
          src="https://tokbox.com/embed/embed/ot-embed.js?embedId=145a87b7-5924-4d5f-93f7-5bbba24b0ba6&room=DEFAULT_ROOM&iframe=true"
          width="800"
          height="640"
          scrolling="auto"
          allow="microphone; camera"
        ></iframe>
    </div>
  );
}

export default Videocall;