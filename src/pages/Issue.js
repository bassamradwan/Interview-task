import React, { useState } from 'react';
import img7 from '../images/1.svg'
import Deye from '../images/Deye 3.svg'
import DJ from '../images/DJ 2.svg'
import Exide  from '../images/Exide 3.svg'
import FELICITY  from '../images/FELICITY 5.svg'
import Growwat from '../images/Growwat 3.svg'
import INKEL from '../images/INKEL 3.svg'
import Lumi from '../images/Lumi 5.svg'
import MUST from '../images/MUST 4.svg'
import ORBIT from '../images/ORBIT 3.svg'
import RAMBO from '../images/RAMBO 2.svg'
import ROCKET from '../images/ROCKET 5.svg'
import SUPERPOWER from '../images/SUPERPOWER 2.svg'
import TUFFBULL from '../images/TUFFBULL 3.svg'
import Vector from '../images/Vector.svg'
import img1 from '../images/img1.svg'
import img2 from '../images/img2.svg'
import img3 from '../images/img3.svg'
import img4 from '../images/img4.svg'
import img5 from '../images/img5.svg'


import './Issue.css'
function ComplaintForm() {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [selectedDepartent, setselectedDepartent] = useState('');
  const [selectedWhich, setselectedWhich] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');

  const handleIssueClick = (Issue) => {
    setSelectedIssue(Issue);
  };
  const handledDepartentClick = (departent) => {
    setselectedDepartent(departent);
  };

  const handleWhichClick = (Which) => {
    setselectedWhich(Which);
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const Issues = ['Urgent', 'Typical'];
  const departents = ['Administrative', 'Finance', 'Accounting', 'Sales','Marketing','Logistic','Human Resources','Supplier','Security'];
  const whichs = [img7, Deye , DJ, Exide,FELICITY,Growwat,INKEL,Lumi,MUST,ORBIT,RAMBO,ROCKET,SUPERPOWER,TUFFBULL,Vector];
  const companies = [img1, img2, img3,img4,img5];

  return (
    <div className='container'>
      <div className='row'>
      
      <div className='mybtn'>
        <h2>Issues</h2>
        {Issues.map((Issue) => (
          <button  key={Issue} onClick={() => handleIssueClick(Issue)} className={selectedIssue === Issue ? 'selected' : ''}>
            {Issue}
          </button>
        ))}
      </div>
      <div className='col-12 col-lg-7'>
      <div className='mybtn'>
        <h2>Relating to what departent</h2>
        {departents.map((departent) => (
          <button key={departent} onClick={() => handledDepartentClick(departent)} className={selectedDepartent === departent ? 'selected' : ''}>
            {departent}
          </button>
        ))}
      </div>
      <div className=' p-3'>
        <h2>Relating to which</h2>
        {whichs.map((which) => (
       
            <img  key={which}
            onClick={() => handleWhichClick(which)}
            className={selectedWhich === which? 'selected' : '' } src={which}/>
  
        ))}
      </div>
      <div className='p-3'>
        <h2>Diect it to whome?</h2>
        {companies.map((company) => (
           <img  key={company} onClick={() => handleCompanyClick(company)} className={selectedCompany === company? 'selected' : '' } src={company} />
        ))}
      </div>
      </div>
      <div className='col-12 col-lg-5 p-2'>
        <h2>Selected Options</h2>
        {selectedIssue  && <span className='data-box '>{selectedIssue}</span>}
        {selectedDepartent && <span className='data-box '>{selectedDepartent}</span>}
        {/* {selectedWhich && <img className='data-box' src={selectedWhich}/> } */}
        <img   src={selectedWhich}/>
        <img  src={selectedCompany}/>
 
       
        <div className='p-2'>
          <div>
          <label for="file-upload">Supporting
Document</label>
  <input type="file" id="file-upload" name="file"/>
          </div>
       <div>
       <label for="date-input">Deadline</label>
<input type="date" id="date-input"></input>
       </div>
       
        </div>
        <div className='p-2'>
          <button>Delete</button>
          <button >Seve</button>
          <button >Submit</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default ComplaintForm;

