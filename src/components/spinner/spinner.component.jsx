import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
Spinner.displayName = 'Spinner';
export default Spinner;
