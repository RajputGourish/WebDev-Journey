import React from 'react'
import Script from 'next/script'

const about = () => {
  return (
    <div>
      <Script>{`alert("This is a about page");`}</Script>
      About
    </div>
  )
}

export default about

export const metadata = {
  title: "About Facebook- Connect with the world",
  description: "This is about facebook and we can connecting with the world",
};

