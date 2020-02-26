/* eslint-disable import/prefer-default-export */
import React from 'react';
import  './homepage.styles.scss';

import MenuItem from '../../components/menu-item/MenuItem'
import Directory from '../../components/directory/Directory'


const Homepage = () => (
  <div className="homepage">
    <Directory/>
  </div>
);


export default Homepage;
