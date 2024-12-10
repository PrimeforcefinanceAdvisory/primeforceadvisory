import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import fimage5 from '../images/5.svg';
import fimage6 from '../images/6.svg';

function Feature() {
  return (
    <div id='features'>
      <h1>Features</h1>
      <div className='a-container'>
        <Featurebox image={fimage1} title="1000+ Active Clients"/>
        <Featurebox image={fimage2} title="Daily Support"/>
        <Featurebox image={fimage3} title="Certified Advisors"/>
        <Featurebox image={fimage4} title="High Reward, Low Risk"/>
        <Featurebox image={fimage5} title="Robust Risk Management"/>
        <Featurebox image={fimage6} title="SEBI Registered"/>
      </div>
    </div>
  )
}

export default Feature;