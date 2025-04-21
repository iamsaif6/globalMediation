import { useState } from 'react';

import { Webchat, WebchatProvider, Fab, getClient, Configuration } from '@botpress/webchat';

const clientId = 'd66b7f68-aa97-43d6-89c8-ac18442644e2';

const configuration = {
  color: '#000',
};

export default function WebChatClient() {
  const client = getClient();

  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => {
    setIsWebchatOpen(prevState => !prevState);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <WebchatProvider client={client} configuration={configuration}>
        <Fab onClick={toggleWebchat} />
        <div
          style={{
            display: isWebchatOpen ? 'block' : 'none',
          }}
        >
          <Webchat />
        </div>
      </WebchatProvider>
    </div>
  );
}
