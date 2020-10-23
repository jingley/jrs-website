/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 *
 * This is the work experience section of my resume.
 */

import React from 'react';
import Sabre from './Jobs/Sabre';
import SnellingClerical from './Jobs/SnellingClerical';
import SnellingStudent from './Jobs/SnellingStudent';

const Work = () => {
    return (
        <div className="Work">
            <Sabre/>
            <SnellingClerical/>
            <SnellingStudent/>
        </div>
    );
};

export default Work;