import React from 'react';
import Education from './Sections/Education';
import Layout from '../Layout';

const Resume = () => {
  return (
      <Layout>
      <div className="Resume">
          <header className="Resume-header">
          </header>
          <Education />
      </div>
      </Layout>
  );
};

export default Resume;
