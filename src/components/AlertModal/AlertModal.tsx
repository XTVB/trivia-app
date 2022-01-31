import React from 'react';
import { Modal, Paper } from '@mui/material';
import Title from 'src/components/Title';
import useStyles from './AlertModalStyles';

export type CloseHandle = {
  (event?: unknown, reason?: 'backdropClick' | 'escapeKeyDown' | 'actionButton'): void;
};

type ModalProps = {
  open: boolean;
  message: string;
  closeHandle?: CloseHandle;
};

const AlertModal: React.FC<ModalProps> = ({ open, message, closeHandle }: ModalProps) => {
  const { classes } = useStyles();

  return (
    <Modal open={open} onClose={closeHandle}>
      <Paper className={classes.alertContainer} elevation={10}>
        <Title title="Alert" />
        <div>{message}</div>
      </Paper>
    </Modal>
  );
};

export default AlertModal;
