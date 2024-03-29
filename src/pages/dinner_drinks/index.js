import React, { useEffect } from 'react'
import NavProject from '../../components/Navigation_project';
import dinnerDrinks from '../../../src/assets/dinner_drinks/dinner_drinks.webp'

const DinnerDrinks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     <NavProject/>
      <div className="dinnerDrinkPage">
        <section className="dinnerDrinkSummaryContainer">
        <p className="projectTitle">Dinner & Drinks</p>
          <p className="dinnerDrinkSummary">
            A recipe generator curated around user preference. Users can search recipes based on cuisine and dietary restrictions, as well cocktail recipes based on alcohol preference. Users have the ability to favorite recipes which are displayed on the users favorites page.
          </p>
          <section className="dinnerDrinkRoleAndTechnology">
            <div>
              <p className="myRole">
                My Role
              </p>
              <p className="dinnerDrinkRole">
                Front-end developer <br></br> UX/UI
              </p>
            </div>
            <div>
              <p className="dinnerDrinkTechnology">
                Built With
                <p className="dinnerDrinkTechnologies">
                  Javascript <br></br> HTML <br></br> CSS <br></br> Spoonacular API <br></br> Cocktails DB API
                </p>
              </p>
            </div>
          </section>
        </section>


        <section className="gitHubWebsiteContainer">
          <section className="dinnerDrinkImageSection">
            <img src={dinnerDrinks} className="dinnerDrinkImage" alt="Dinner and Drinks"/>
          </section>
            <div className="githubAndWebsite">
              <a href="https://sophiehomer.github.io/dinner_and_drinks/"  rel="noreferrer" target="_blank">
                <button className="website">
                  View App
                </button>
              </a>
              <p className="gitHub"> 
                <a href="https://github.com/sophiehomer/dinner_and_drinks" className='gitHubLink'  rel="noreferrer" target="_blank">GitHub</a> 
              </p>
            </div>
          </section>
      </div>
    </>
  
  )
}

export default DinnerDrinks