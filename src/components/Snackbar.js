import React from 'react';
import MuiSnackbar from 'material-ui/Snackbar';

const Snackbar = ({ isOpen, message, onClose }) => {
  return (
    <MuiSnackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
      open={isOpen}
      message={message}
      onClose={onClose}
      autoHideDuration={6000}
    />
  );
};

export default Snackbar;
