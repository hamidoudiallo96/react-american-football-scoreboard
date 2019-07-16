import React, {useState} from 'react'

import BottomRow from "./BottomRow";



function Buttons(){
    const [homeScore, teamHomeScore] = useState(0);
    const [awayScore, teamAwayScore] = useState(0);
    return(
        <div>
           <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
          
          
            <div className="home__score">{homeScore}</div>
          </div>

          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
        </div>
        {/* <TopRow /> */}
        <BottomRow />
        
        <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick = {()=> teamHomeScore(homeScore + 7)}  className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick = {()=> teamHomeScore(homeScore + 3)}  className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick = {()=> teamAwayScore(awayScore + 7)}  className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick = {()=> teamAwayScore(awayScore + 3)}  className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
        </div>
    )
}

export default Buttons