import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig={
    summer:{
        text:"Let's hit the beach!!",
        IconName:'sun'
    },
    winter:{
        text:"Burr,it's extremely chilly!!",
        IconName:'snowflake'
    }
};

const getSeason=(lat,month)=>
{
    if(month>3 && month<9)
    {
        return lat>0?'summer':'winter';
    }
    else 
    {
        return lat>0?'winter':'summer';
    }
}
const SeasonDisplay =(props)=>{

    const season=getSeason(props.lat,new Date().getMonth)
   const {text,IconName}=SeasonConfig[season]

    return(
        <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${IconName} icon`}/>
        <h1>{season==='winter'?"Burr,it's extremely chilly!!":"Let's hit the beach!!"}</h1>
        <i className={`icon-right massive ${IconName} icon`}/>
        </div>
    );
}
export default SeasonDisplay;