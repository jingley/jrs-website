/**
 * @author Jon Ross Ingley <jingley22@gmail.com>
 */

import React from 'react';

/**
 * Skills component in resume
 *
 * @constructor
 */
const Skills = () => {
    /**
     * string for communication description
     */
    const communication = 'My experience as a captain has improved my ability to communicate as well ' +
        'as to listen to others. I am in constant communication with the team via emails, verbal feedback ' +
        'explanations of drills at practice, and overall discussion of strategy with fellow leadership.';

    return (
      <div className="Skills">
          <h2 className="Resume-title" id="coding" >Coding Languages & Technologies</h2>
          <div className="Resume-bullets">
              <ul className="Coding-skills">
                  <li>Java</li>
                  <li><span className="Standout-text">JavaScript</span></li>
                  <li><span className="Standout-text">React</span></li>
                  <li>Redux</li>
                  <li>RxJs</li>
                  <li>Git</li>
                  <li>SQL</li>
              </ul>
          </div>
          <h2 className="Resume-title" id="communication" >Communication</h2>
          <div className="Resume-bullets">
              <ul>
                  <li>{ communication }</li>
              </ul>
          </div>
      </div>
    );
};

export default  Skills;