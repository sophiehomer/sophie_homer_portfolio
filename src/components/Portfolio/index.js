import React from 'react'
import './styles.css'
import femmeDept from '../../assets/portfolio/femme_dept.png'
import kit from '../../assets/portfolio/kit.png'
import dinnerDrinks from '../../assets/portfolio/dinner_drinks.png'
import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'




const Portfolio = () => {
  return (
    <>
    <main className="portfolioImages" id="portfolioImages">

    <section className="femmeDeptContainer">
      <div className="app">
        <Link to="/femme_dept" className="femmeDeptPageLink">
          <img src={femmeDept} className="femmeDeptImg" alt="femmeDept"/>
        </Link>
      </div>
      <div className="appSummary">
      <Link to="/femme_dept" className="femmeDeptPageLink">
        <p className="appName">
            Femme Dept.
        </p>
      </Link>
     
          <p className="role">
            PRODUCT DESIGN, USER RESEARCH
          </p>
          {/* <p className="technologiesUsed">
            Built with Figma.
          </p> */}
          <p className="summary">
            Concious designed intimate soap to help dispel stigmas surrounding female intimate hygiene.                 
          </p>
          <div className="githubAndWebsiteIcon">
            <p className="openWebsite">
              <a href="https://www.figma.com/proto/sa327Zy6gLR6vb7wJH3fb1/Femme-Dept.?page-id=0%3A1&node-id=38%3A3576&viewport=363%2C242%2C0.02&scaling=scale-down&starting-point-node-id=38%3A3576"  className='gitHubLinkRight' rel="noreferrer" target="_blank">Prototype <AiOutlineArrowRight className="arrow" size={20}/></a>
            </p>
        </div>
      </div>
      </section>

    <section className="kitContainer">
        <div className="app">
          <a href="https://drawtheline2022.herokuapp.com/"  rel="noreferrer" target="_blank">
            <img src={kit} className="kitImg" alt="drawTheLine"/> 
          </a>
        </div>
      <div className="appSummary">
          <p className="appName">
            KIT Social Application
          </p>
          <p className="role">
            Role: Front-end developer, UX/UI
          </p>
          <p className="technologiesUsed">
            Built with React, JavaScript, Node.js, Apollo, Mongoose, mongoDb, Bycrypt.
          </p>
          <p className="summary">
            An application developed for the aulmni of my coding bootcamp class. Users can post, comment, like and dislike. The application served as a communication network for mutual support within the class.                     
          </p>
          <div className="githubAndWebsiteIcon">
            <p className="openWebsite">
              <a href="https://drawtheline2022.herokuapp.com/"  className='gitHubLinkRight' rel="noreferrer" target="_blank">Application<AiOutlineArrowRight className="arrow" size={20}/></a>
            </p>
            <p className="openGithub"> 
              <a href="https://github.com/Abarragan89/draw-the-line" className='gitHubLinkRight'  rel="noreferrer" target="_blank">GitHub <FaGithub size={22} className="githubLink"/></a> 
            </p>
        </div>
      </div>
      </section>

      <section className="dinnerDrinksContainer">
      <div className="app">
          <a href="https://www.figma.com/proto/sa327Zy6gLR6vb7wJH3fb1/Femme-Dept.?page-id=0%3A1&node-id=38%3A3576&viewport=363%2C242%2C0.02&scaling=scale-down&starting-point-node-id=38%3A3576"  rel="noreferrer" target="_blank">
            <img src={dinnerDrinks } className="dinnerDrinksImg" alt="dinnerDrinks"/>
          </a>
        </div>
      <div className="appSummary">
          <p className="appName">
            Dinner & Drinks
          </p>
          <p className="role">
            Role: Developer, UX UI.
          </p>
          <p className="technologiesUsed">
            Built with HTML, CSS, Spoonacular API, Cocktail DB API.
          </p>
          <p className="summary">
            A food and cocktail recipe application using the Spoonacular API and the Cocktails DB API to deliver curated recipes around user preferences.                  
          </p>
          <div className="githubAndWebsiteIcon">
            <p className="openWebsite">
              <a href="https://drawtheline2022.herokuapp.com/"  className='gitHubLinkRight' rel="noreferrer" target="_blank">Application<AiOutlineArrowRight className="arrow" size={20}/></a>
            </p>
            <p className="openGithub"> 
              <a href="https://github.com/sophiehomer/dinner_and_drinks" className='gitHubLinkRight'  rel="noreferrer" target="_blank">GitHub <FaGithub size={22} className="githubLink"/></a> 
            </p>
        </div>
      </div>
      </section>




      {/* dinner&& drinks  */}

      {/* <section className="dinnerDrinksContainer">
        <div className="app">
          <a href="https://abarragan89.github.io/dinner-drinks/"  rel="noreferrer" target="_blank">
            <img src={femmeDept} className="femmeDeptImg" alt="femmeDept"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/Abarragan89/dinner-drinks" rel="noreferrer" className='gitHubLinkRight' target="_blank"> Recipe and Cocktail Search Engine <FaGithub size={15}/></a>
          <p className="summary">
            Built with  Javascript, HTML, CSS, Spoonacular API and Cocktails DB API.
          </p>
          <p className="summary">
            This application generates curated recipes around user preferences. The user can search up food recipes based on cuisine and dietary restrictions, as well as look up cocktails recipes based on alcohol preference. The user has the ability to favorite recipes which are displayed on the users favorites page.
          </p>
        </div>
      </section> */}


      {/* <section className="weatherContainer">
        <div className="app">
          <a href="https://sophiehomer.github.io/Weather-Dashboard/">
            <img src={weatherDashboardImage} className="weatherDashboardImg" alt="weatherDashboard"  rel="noreferrer" target="_blank"/>
          </a>
        </div>

        <div className="appSummary">
          <a href="https://github.com/sophiehomer/Weather-Dashboard" className='gitHubLinkLeft' rel="noreferrer" target="_blank">Weather Application <FaGithub size={15}/></a>
          <p className="summary">
            Built with html, css, JavaScript, jQuery and Open Weather API.
          </p>
          <p className="summary">
            A five-day weather application. Weather details include temperature, wind, humidity and UV index.
          </p>
        </div>
      </section> */}

      {/* <section className="schedulerContainer">
      <div className="app">
        <a href="https://sophiehomer.github.io/work-day-scheduler/" >
          <img src={workDaySchedulerImage} className="workDaySchedulerImg" alt="workDayScheduler"/>
        </a>
      </div>

      <div className="appSummary">
        <a href="https://github.com/sophiehomer/work-day-scheduler" className='gitHubLinkLeft'> WORK DAY SCHEDULER <FaGithub size={15}/></a>
        <p className="summary">
            Built with JavaScript, jQuery, HTML and CSS.
          </p>
      </div>  
      </section> */}

    </main>
    </>
  )
}

export default Portfolio

