import { BrowserRouter as Router , Route , Switch , Redirect } from 'react-router-dom';

// Import Pages and Create Route for each page
import Home from '../pages/Home/home';
import SignUp from '../pages/AccountLogin/signup';
import SignIn from '../pages/AccountLogin/signin';
import Profile from '../pages/User/Profile';
import VideoPage from "../pages/videoPage/videoPage.jsx";
const createRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

      <Route exact path="/home" component={Home} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/user/profile" component={Profile} />
      <Route exact path="/VideoPage" component={VideoPage} />
    </Switch>
  </Router>
);

export default createRoutes;