import React from 'react';
import './PDFApp.css';

const PDF_URL = '/pdfjs-2.14.305-legacy-dist/web/viewer.html?file=';

const PDFViewer = ({ title, documentUrl }) => {
  return <iframe title={title} className={'pdf-viewer'} src={`${PDF_URL}${documentUrl}`}/>
};

const PDFApp = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop)
  });
  const documentUrl = `${params.document}.pdf`;
  return <PDFViewer title={params.document} documentUrl={documentUrl} />;
}

export default PDFApp;
