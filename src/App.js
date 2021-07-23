import { Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Header } from './components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if(token) {
      // network call to get user data
      // send token to backend
      // verify the token -> send user response
      // user data set in app state
    }
  }, [])

  return (
    <div className="App bg-gray-50 min-h-screen">
      <Header loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={(props) =>
          <SignIn
            {...props}
            setLoggedInUser={setLoggedInUser}
          />} />
        <Route path="/register" component={(props) =>
          <SignUp
            {...props}
            setLoggedInUser={setLoggedInUser}
          />} />
      </Switch>
    </div>
  );
}

export default App;
