'use client';
import { useEffect, useState, useRef } from 'react';

export default function WebChatClient() {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);
  const initAttempted = useRef(false);

  useEffect(() => {
    if (initAttempted.current) return;
    initAttempted.current = true;

    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js';
    script.async = true;

    script.onload = () => {
      try {
        window.botpressWebChat.init({
          botId: 'acda15fe-2560-4701-b09d-26598492f971',
          clientId: 'd66b7f68-aa97-43d6-89c8-ac18442644e2',
          hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
          messagingUrl: 'https://messaging.botpress.cloud',
          showPoweredBy: false,
          showCloseButton: true,
          hideWidget: true,
          enableConversationDeletion: true, // May help with cookie issues
          useSessionStorage: true, // Try using session storage instead of cookies
          disableAnimations: true, // Simplify to avoid potential issues
          composerPlaceholder: 'Chat with us', // Optional
        });

        // Add event listener to know when botpress is ready
        window.addEventListener('message', message => {
          if (message.data?.name === 'webchatReady') {
            console.log('Botpress webchat is ready');
            setIsLoaded(true);
          }
        });
      } catch (error) {
        console.error('Error initializing Botpress webchat:', error);
      }
    };

    script.onerror = error => {
      console.error('Failed to load Botpress script:', error);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const toggleWebchat = () => {
    if (!isLoaded) {
      console.log('Botpress webchat not loaded yet');
      return;
    }

    setIsChatVisible(prev => {
      const newState = !prev;
      try {
        if (newState) {
          window.botpressWebChat.sendEvent({ type: 'show' });
        } else {
          window.botpressWebChat.sendEvent({ type: 'hide' });
        }
      } catch (error) {
        console.error('Error toggling webchat visibility:', error);
      }
      return newState;
    });
  };

  return (
    <>
      <button
        onClick={toggleWebchat}
        disabled={!isLoaded}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 20px',
          backgroundColor: isLoaded ? '#2563eb' : '#a0aec0',
          color: 'white',
          borderRadius: '100px',
          border: 'none',
          boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
          cursor: isLoaded ? 'pointer' : 'not-allowed',
          zIndex: '999',
        }}
      >
        {!isLoaded ? 'Loading...' : isChatVisible ? 'Close' : 'Chat'}
      </button>
    </>
  );
}
