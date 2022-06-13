import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

import Date from './Components/Date';
import CaseStudy from './Components/CaseStudy';
import Heading from './Components/Heading';
import SubHeading from './Components/SubHeading';
import Device from './Components/Device';
import Logo from './Components/Logo';
import Arrow from './Components/Arrow';

import Data from './data.json';

function App() {

  const [data, setData] = useState(Data);
  return (
    <div className="App">
     {
       data.map(e=>{
         return  <div className={(e.heading === "Amazon Gift")?'backAma card':'backSil card'}>
                  <div>
                    <Date date={e.date}/>
                    <CaseStudy a={e.case}/>
                    <Heading heading = {e.heading}/>
                    <SubHeading sub={e.sub}/>
                    <Device device={e.device}/>
                  </div>
                  <div className='left'>
                    <Logo logo={e.logo}/>
                    <Arrow/>
                  </div>
                </div>
       })
     }
    </div>
  );
}

export default App;
