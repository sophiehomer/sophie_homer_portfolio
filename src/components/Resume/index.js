import React from 'react'
import './styles.css'
import Pdf from '../../assets/documents/sophie-homer-resume.pdf'

const Resume = () => {
  return (
  <>
    <div className="resumeList">
      <h1 className="resumeTitle">PROFICIENCIES</h1>
       <div className="proficiencyList">
          HTML<br></br>
          CSS<br></br>
          JavaScript <br></br>
          jQuery<br></br>
          React <br></br>
          Responsive Design<br></br>
          Bootstrap<br></br>
          APIs<br></br>
          Node<br></br>
          MySQL <br></br>
          Sequelize <br></br>
          MongoDB  <br></br>
          Mongoose<br></br>
          REST<br></br>
          GraphQL<br></br>
        </div>
    </div>  
    <div>
      <a download href= {Pdf} rel="noreferrer" target="_blank">DOWNLOAD MY RESUME</a>
    </div>
    </>
  )
}

export default Resume;