
import React, { useEffect } from 'react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const link = document.createElement('a');
      link.href = `/img/cvs/Ali_Murtaza_DevOps_Resume_2026.pdf?v=${Date.now()}`;
      link.download = 'Ali_Murtaza_DevOps_Resume_2026.pdf';
      link.rel = 'noopener';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    }
  }, [isOpen]);

  return null;
};

export default CVDownloadModal;
