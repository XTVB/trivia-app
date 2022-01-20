import React, { FC } from 'react';
import Modal from 'src/components/Modal';
import PageHeader from 'src/components/PageHeader';
import Paragraph from 'src/components/Paragraph';
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
        <PageHeader>
          <Title isSubtitle={true} title="Alert" />
          <Paragraph text={message} />
        </PageHeader>
      </div>
    </Modal>
  );
};

export default AlertModal;
