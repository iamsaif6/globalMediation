'use client';

import { useEffect, useState } from 'react';

export default function WebChatClient() {
  const [isChatVisible, setIsChatVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;

    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'mediation-training-bot',
        clientId: 'd66b7f68-aa97-43d6-89c8-ac18442644e2',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
        messagingUrl: 'https://messaging.botpress.cloud',
        showPoweredBy: false,
        showCloseButton: true,
        hideWidget: true, // start hidden, we'll toggle manually
      });
    };

    document.body.appendChild(script);
  }, []);

  const toggleWebchat = () => {
    setIsChatVisible(prev => {
      const newState = !prev;
      if (newState) {
        window.botpressWebChat.sendEvent({ type: 'show' });
      } else {
        window.botpressWebChat.sendEvent({ type: 'hide' });
      }
      return newState;
    });
  };

  return (
    <>
      <button
        onClick={toggleWebchat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '100px',
          border: 'none',
          boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          cursor: 'pointer',
          zIndex: '999',
        }}
      >
        {isChatVisible ? 'Close' : 'Chat'}
      </button>
    </>
  );
}
