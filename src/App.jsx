import Header from "./components/Header";
import Banner from "./components/Banner";
import Registration from "./components/Registration";
import Bflogin from "./components/Bflogin";
import About from "./components/About";
import Login from "./components/Login";
import Logout from "./components/Logout";

import { useAuth0 } from "@auth0/auth0-react";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const {  isAuthenticated} = useAuth0();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = ({ username, password }) => {
    // TODO: Call API to authenticate user
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // TODO: Call API to logout user
    setIsLoggedIn(false);
  };
  return (
    

    <>

<Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {isLoggedIn ? (
              <Logout onLogout={handleLogout} />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
    
        <Router>
        <Routes>
        { isAuthenticated ? ( <Route exact path="/home" element={
            <>
               <Header/>
               <Banner/>
               
            </>
          }>
          </Route> && <Route exact path="/registration" element={
           <>
               <Header/>
               <Registration />
           </>
           }>
           </Route> && <Route exact path="/about" element={
              <>
                  <Header/>
                  <About />
              </>
              }>
              </Route>
          
            
            ) : (
        
          
          <Route exact path="" element={
            <>
               <Header/>
               <Bflogin/>
               
            </>
        }>
            </Route>
          )}


          

           
          
        </Routes>

      </Router> 

    </>
  );
}

export default App;
