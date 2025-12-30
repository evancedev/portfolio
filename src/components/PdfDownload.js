import React from 'react';
import PropTypes from 'prop-types';

const PdfDownload = ({ children }) => {
  const handleDownload = () => {
    // You can implement the actual download logic here
    // For example, using the file-saver library:
    // saveAs(fileUrl, fileName || 'document.pdf');
  };

  return (
    <button onClick={handleDownload} className="pdf-download-button">
      {children || 'Download PDF'}
    </button>
  );
};

PdfDownload.propTypes = {
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string,
  children: PropTypes.node,
};

export default PdfDownload;
