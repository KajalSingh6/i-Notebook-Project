import React, { Fragment } from 'react';
// import { Link } from "react-router-dom";
import noteimage from '../components/noteimge.png';

const About = () => {

  return (
    <Fragment>
      <div className='container notes mt-5'>
        <div className='d-flex '>

          <img src={noteimage} style={{ width: '300px' }} alt='' />
          <div className='mx-5 '>
            <h4> 1. Purpose of the iNotebook:</h4><p>This is a digital notebook designed to store, organize, remove or clarify and manage your personal notes. <br /> It provides features such as adding, editing, deleting notes for easy retrieval.</p>

            <h4> 2. How It Works</h4>
            <p>To add a new note, click the ‘Add Note’ button. <br /> To edit an existing note, and to make more changes in your list. <br /> To delete any note click the ‘delete icon’ and make it clear from the notebook.</p>

            <h4> 3. How to Use</h4>
            <p>Sign Up / Login: Instructions for creating an account or logging in. <br />
              Creating & Organizing Notes: Basic steps for creating and organizing notes.</p>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default About;
