'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('4008dc2f-3e5b-4b63-98df-a41aedf627f2');
  });

  return null;
};

export default CrispChat;
