import React, { useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import SideBar from './SideBar';
import EmailList from './EmailList';
import Email from './Email';
import SendMail from './SendMail';
import { useSelector, useDispatch } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';



function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen) ;
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email:user.email,
          photoUrl:user.photoURL,
        }))
      }
    })
  }, [])
  return (
    <Router>
      {!user ? (<Login/>) : (<div className="app">
      <Header/>
      <div className="app_body">
      <SideBar/>
      <Switch>
        <Route exact path='/'>
         <EmailList/>
        </Route>
        <Route path='/email'>
         <Email/>
        </Route>
      </Switch>
      </div>
      {sendMessageIsOpen && <SendMail/> }
      
    </div>) }
    </Router>
  );
}

export default App;
