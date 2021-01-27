import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Banner from './components/Banner/Banner';
import 'bulma/css/bulma.css'
import AdminPage from './pages/AdminPage/AdminPage';
import ViewInputQuestions from './components/ViewInputQuestions/ViewInputQuestions';
import { UserContext } from './context/userContext';
import { useState } from 'react';

function App() {

  const [userData, setUserData] = useState({username: null, role: null});

  return (
    <>
      <UserContext.Provider value={[userData, setUserData]}>
        <Banner/>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/admin/view" component={ViewInputQuestions}/>
            <Route path="/admin" component={AdminPage}/>
          </Switch>      
        </Router>
      </UserContext.Provider>
    </>  
  );
}

export default App;
