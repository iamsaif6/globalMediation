'use client';

import { useEffect } from 'react';
import Userback from '@userback/widget';

const UserbackWidget = () => {
  useEffect(() => {
    const token = '**Userback Access Token**'; // Replace with your actual token
    const options = {
      user_data: {
        id: '123456',
        info: {
          name: 'someone',
          email: 'someone@example.com',
        },
      },
    };

    Userback(token, options).then(userback_instance => {});
  }, []);

  return null;
};

export default UserbackWidget;
