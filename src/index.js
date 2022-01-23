import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    // setAutoWaitTime,autoWaitTime,textShowWaitTime,
    // GameInfo,currentScene,auto,fast,onTextPreview,showingText,hideTextStatus,
    // currentInfo,Saves,SaveBacklog,CurrentBacklog,currentSavePage,currentLoadPage,Settings,
    loadCookie,
    // writeCookie,clearCookie,
    loadSettings,
    // getStatus,getScene,
    getGameInfo,
    // SyncCurrentStatus
} from "./Core/StoreControl/StoreControl"
// import {WG_ViewControl} from "./Core/ViewController/ViewControl";
// import {isMobile, MobileChangeStyle} from "./Core/util/WG_util";
import './assets/style/animation.css';
import './assets/style/main.css';
import './assets/style/Load_Save.css';
import './assets/style/panic.css';
import './assets/style/settings.css';
import './assets/style/window.css'
import './assets/style/UI_component.css';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('ReactRoot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

loadCookie();
loadSettings();
getGameInfo();