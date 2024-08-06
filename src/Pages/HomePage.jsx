import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/HomeCards'
import JobListings from '../Components/JobListings'
import ViewAllJobs from '../Components/ViewAllJobs'
const HomePage = () => {
  return (
<>
<Hero/>
<Homecards/>
<JobListings isHome = {true} />
<ViewAllJobs/>
</>
)
}

export default HomePage
