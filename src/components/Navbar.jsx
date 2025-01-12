import React from 'react'

const Navbar = () => {
  return (
<>

<nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container container-fluid">
    <a className="navbar-brand" href="#">Weather App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" style={{justifyContent:'flex-end'}} id="navbarSupportedContent">
  
<p style={{marginBottom:-2}} className='text-white'>Get weather updates from your nearest station</p>
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar
