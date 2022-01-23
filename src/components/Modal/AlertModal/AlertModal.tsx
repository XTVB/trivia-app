import React, { FC } from 'react';
import Modal from 'src/components/Modal';
import Title from 'src/components/Title';
import { CloseHandle } from '../Modal';

type AlertModalProps = {
  open: boolean;
  closeHandle?: CloseHandle;
  message: string;
  size?: 'small' | 'default' | 'large';
};

const AlertModal: FC<AlertModalProps> = ({ size, open, closeHandle, message }: AlertModalProps) => {
  return (
    <Modal size={size} open={open} closeHandle={closeHandle}>
      <div>
        <Title isSubtitle={true} title="Alert" />
        <p>{message}</p>
      </div>
    </Modal>
  );
};

export default AlertModal;
