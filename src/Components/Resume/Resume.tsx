/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';
import Education from './Sections/Education';
import Layout from '../../Layout';
import Skills from './Sections/Skills';
import Work from './Sections/Work';
import './css/Resume.css'

const Resume = () => {
  return (
      <Layout>
      <div className="Resume">
          <header className="Resume-header">
          </header>
          <div className="Resume-body">
            <Education />
            <Skills />
            <Work />
          </div>
      </div>
      </Layout>
  );
};

export default Resume;
