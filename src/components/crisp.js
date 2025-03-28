import React, { Component } from 'react';

import { Crisp } from 'crisp-sdk-web';

class CrispChat extends Component {
  componentDidMount() {
    Crisp.configure('4008dc2f-3e5b-4b63-98df-a41aedf627f2');
  }

  render() {
    return null;
  }
}
export default CrispChat;
