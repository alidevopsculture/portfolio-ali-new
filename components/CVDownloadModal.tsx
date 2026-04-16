
import React, { useEffect } from 'react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const link = document.createElement('a');
      link.href = '/img/cvs/CV_Ali-Murtaza-2026.pdf';
      link.download = 'CV_Ali-Murtaza-2026.pdf';
      link.click();
      onClose();
    }
  }, [isOpen]);

  return null;
};

export default CVDownloadModal;
