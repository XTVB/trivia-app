import React from 'react';
import { Modal } from '@mui/material';
import useStyles from './ModalStyles';

export type CloseHandle = {
  (event?: unknown, reason?: 'backdropClick' | 'escapeKeyDown' | 'actionButton'): void;
};

type ModalProps = {
  openHandle?: (arg0: boolean) => void;
  closeHandle?: CloseHandle;
  open: boolean;
  children: JSX.Element[] | JSX.Element;
  size?: 'small' | 'default' | 'large';
};

const CustomModal: React.FC<ModalProps> = ({ size = 'default', children, open, closeHandle }: ModalProps) => {
  const { classes } = useStyles();
  return (
    <Modal open={open} onClose={closeHandle}>
      <div className={`${classes.container} ${classes[size]}`}>{children}</div>
    </Modal>
  );
};

export default CustomModal;
