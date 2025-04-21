'use client';
import { useEffect } from 'react';

export default function WebChatClient() {
  useEffect(() => {
    // Load the Botpress WebChat script
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize WebChat once script is loaded
    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: 'Chat with bot',
        botConversationDescription: 'This chatbot was built to help you',
        botId: 'acda15fe-2560-4701-b09d-26598492f971',
        clientId: 'd66b7f68-aa97-43d6-89c8-ac18442644e2',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        botName: 'Mediation Training Bot',
        stylesheet: 'https://webchat-styling-css.botpress.app/base.css',
        useSessionStorage: true,
        disableWebsockets: true,
      });
    };

    // Cleanup function
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
}
