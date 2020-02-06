import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Job from './Job';
import JobModal from './JobModal'

import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';


const Jobs = ({jobs}) => {

  // modal
  const [open, setOpen] = useState(false)
  const [selectedJob, selectJob] = useState({})

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //pagination
  const numJobs = jobs.length
  const numPages = Math.ceil(numJobs / 50)
  const [activeStep, setActiveStep] = useState(0)
  const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50)

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  console.log("job is", jobs[0]);

  return(
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose ={handleClose} />
      <Typography variant="h4" component="h1">
        Junior Software Jobs 
      </Typography>
      <Typography variant="h6"component="h2">
        Found {numJobs} Jobs
      </Typography>

     {
      jobsOnPage.map(
        (job, idx) => <Job key={idx} job={job} onClick={() => {
          handleClickOpen()
          selectJob(job)
          }}/>
      )
     }

     Page {activeStep + 1} of {numPages}  

     <MobileStepper
      variant="progress"
      steps={numPages}
      position="static"
      activeStep={activeStep}

      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
          Next
          {<KeyboardArrowRight/>}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {<KeyboardArrowLeft/>}
          Back
        </Button>
      }
    />
    </div>
  )
}

export default Jobs