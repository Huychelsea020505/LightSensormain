import React from "react";
import { Navigate } from "react-router-dom";
import './AdjustTheLights.css';

function AdjustTheLights() {
    const[goToContactHome, setGoToContactHome] = React.useState(false);
    // const[goToContact, setGoToContact] = React.useState(false);
    const[goToContactPowerConsumption, setGoToContactPowerConsumption] = React.useState(false);
    const[goToContactNotification1, setGoToContactNotification1] = React.useState(false);
    if(goToContactHome){
        return <Navigate to = "/"/>
    }
    // if(goToContact){
    //     return <Navigate to = "/AdjustTheLights"/>
    // }
    if(goToContactPowerConsumption){
        return <Navigate to = "/PowerConsumption"/>
    }
    if(goToContactNotification1){
        return <Navigate to = "/Notification1"/>
    }

    return (
      <div className="App">
          <div id="banner-top">          
              <div class="top-title">
                  <h1>Light Sensor</h1>
              </div>
                  <div class="top-list-menu">
                  <div class="top-menu">
                      <button class="buttonOfWedsite" onClick={() =>
                        setGoToContactHome(true)
                      }>Home</button>
                  </div>
                  <div class="top-menu-1">
                      <button class="buttonOfWedsite">Adjust the lights</button>
                  </div>  
                  <div class="top-menu">
                      <button class="buttonOfWedsite" onClick={() =>
                        setGoToContactPowerConsumption(true)
                      }>Power consumption</button>
                  </div>
                  <div class="top-menu">
                      <button class="buttonOfWedsite" onClick={() =>
                        setGoToContactNotification1(true)
                      }>Notification</button>
                  </div>
              </div>
          </div>
          <div class="circle1"></div>
          <div class="circle2"></div>

          <div>
          <div class="buttonMain">
            <button class="buttonOnOff1">Turn on</button>
            <button class="buttonOnOff2">Turn off</button>
          </div>
          </div>

          <div class="square"></div>
      </div>
    );
  }
  
  export default AdjustTheLights;