import { useState } from 'react';
import resume from '../resume.pdf';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
const Home = () => {
  const [defaultPdf] = useState(resume);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <>
      <h1>My Resume</h1>
      {defaultPdf && (
        <div className='container'>
          <Worker workerUrl='https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js'>
            <Viewer
              fileUrl={defaultPdf}
              plugins={[defaultLayoutPluginInstance]}
              theme='dark'
            />
          </Worker>
        </div>
      )}
    </>
  );
};

export default Home;

// * Note : used react pdf viewer to display pdf, see link below for more info.
// https://react-pdf-viewer.dev/
