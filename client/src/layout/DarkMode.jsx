import React from 'react'

function darkMode() {
  return (
<>
<div className="theme-switch-wrapper">
        <label className="theme-switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" />
            <div className="slider round"></div>
            <i className="icofont-moon"></i>
        </label>
        <em>Enable Dark Mode!</em>
    </div>
</>
  )
}

export default darkMode