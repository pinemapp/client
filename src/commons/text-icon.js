import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ icon, text, className, ...props }) => (
  <span className={`text-icon ${className}`} {...props}>
    <span><FontAwesomeIcon icon={icon} /></span>
    {text}
  </span>
)
