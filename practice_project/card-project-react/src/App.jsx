import React from 'react'
import Card from './Components/Card'

const App = () => {
  const jobs = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
      company: "Meta",
      datePosted: "1 week ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon",
      datePosted: "3 days ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$60/hr",
      location: "Delhi, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
      company: "Netflix",
      datePosted: "4 days ago",
      post: "Full Stack Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "10 days ago",
      post: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Noida, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Adobe_Systems_logo_and_wordmark.svg",
      company: "Adobe",
      datePosted: "6 days ago",
      post: "JavaScript Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$40/hr",
      location: "Pune, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      company: "Uber",
      datePosted: "8 days ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$52/hr",
      location: "Bangalore, India"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
      company: "Airbnb",
      datePosted: "2 days ago",
      post: "Web Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$46/hr",
      location: "Remote"
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
      company: "Tesla",
      datePosted: "3 weeks ago",
      post: "Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Austin, USA"
    }
  ];


  return (
    <div className="parent flex-wrap p-7.5 min-h-screen justify-center flex gap-7.5">
      {jobs.map((e, idx) => {
        return <div>
          <Card companyName={e.company} logo={e.brandLogo} datepost={e.datePosted} postname={e.post} tag1={e.tag1} tag2={e.tag2} pay={e.pay} location={e.location} />
        </div>
        })}
    </div>
  )
}

export default App
