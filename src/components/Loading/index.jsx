import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSpinner);

const Loading = () => (
  <div style={{ textAlign: 'center', margin: '40px 0' }}>
    <FontAwesomeIcon className="fa-spin fa-3x" icon="spinner" />
  </div>
);

export default Loading;
