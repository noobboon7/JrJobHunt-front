import React from 'react';
import {Typography, Paper} from '@material-ui/core'


const Job = ({job, onClick}) => {

  return(
    <Paper onClick={onClick} className="job">
      <div>
        <Typography varient="h6">{job.title}</Typography>
        <Typography varient="h5">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      
      <div>
        <Typography>{job.created_at.split(" ").slice(0, 3).join()}</Typography>
      </div>
    </Paper>
  )

}

export default Job