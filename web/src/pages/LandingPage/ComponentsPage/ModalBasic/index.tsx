import React from 'react';
import ComponentHeader from '../components/ComponentHeader';
import BasicModalDocs from './components/BasicModalDocs';
import BasicModalProps from './components/BasicModalProps';
import ModalBodyProps from './components/ModalBodyProps';
import ModalCloseProps from './components/ModalCloseProps';
import ModalFooterProps from './components/ModalFooterProps';
import ModalTitleProps from './components/ModalTitleProps';

const ModalBasicDocs: React.FC = () => {
  return (
    <React.Fragment>
      <ComponentHeader title="Modal (Basic)" subtitle="A fully customizable Modal component." />
      <BasicModalDocs />
      <BasicModalProps />
      <ModalCloseProps />
      <ModalTitleProps />
      <ModalBodyProps />
      <ModalFooterProps />
    </React.Fragment>
  );
};

export default ModalBasicDocs;
