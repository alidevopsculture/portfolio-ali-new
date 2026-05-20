
import React, { useEffect } from 'react';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      fetch(`/img/cvs/Ali_DevOps_Resume_2026.pdf?v=${Date.now()}`, { cache: 'no-store' })
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = 'Ali_DevOps_Resume_2026.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        })
        .finally(() => onClose());
    }
  }, [isOpen]);

  return null;
};

export default CVDownloadModal;
