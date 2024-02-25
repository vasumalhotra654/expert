// App.js
import React from 'react';
import FitnessApp from './components/Experts';
import OurServices from './components/OurServices'
import GridLayout from './components/GridLayout'

const App = () => {
  return (
    <div >
      <OurServices/>
      <GridLayout/>   
     <div className=' mx-5  '>
       <FitnessApp />
      <FitnessApp/>
     </div>
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    </div>
  );
};

export default App;
