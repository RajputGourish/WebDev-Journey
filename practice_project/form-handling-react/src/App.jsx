import React, { useState } from 'react'

const App = () => {
  const [name, setName] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submited successfully by", name);

    setName('');
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <input
          type="text"
          placeholder='Enter your Name'
          value={name}
          onChange={(e) => { setName(e.target.value)}} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
