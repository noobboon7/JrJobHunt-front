import React, {useState, useEffect} from 'react';
import './App.css';
import Jobs from './Jobs';

// const JOB_API_URL = 'https://jr-job-hunt.herokuapp.com/jobs';
const JOB_API_URL = 'http://localhost:3001/jobs';


// const mockjobs =[
//   {title: 'SWE1', company: 'google'},
//   {title: 'SWE2', company: 'facebook'},
//   {title: 'SWE3', company: 'amazon'}
// ]

async function fetchJobs (updateCB) {
  const res = await fetch(JOB_API_URL);
  const json = await res.json();
  updateCB(json);
  console.log({json});
}



function App() {
  const [joblist, updateJobs] = useState([]);

  useEffect(() => {
    fetchJobs(updateJobs);
  }, []);

  return (
    <div className="App">
      <Jobs jobs={joblist}/>
    </div>
  )}

export default App;