// Copyright (c) Microsoft. All rights reserved.

import React from 'react';
import PropTypes from 'prop-types';

import { joinClasses } from '../../../../../../utilities';

import './propertyGrid.css';

export const PropertyCell = (props) => (
  <div className={joinClasses('cell', props.className)}>{props.children}</div>
);

PropertyCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
