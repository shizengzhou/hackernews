import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

library.add(faSpinner);

const Loading = () => (
  <div className="spin-container">
    <FontAwesomeIcon className="spin fa-spin fa-3x" icon="spinner" />
  </div>
);

export default Loading;