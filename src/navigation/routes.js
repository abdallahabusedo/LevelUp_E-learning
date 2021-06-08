import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Import Pages and Create Route for each page
import Home from "../pages/Home/home";
import SignUp from "../pages/AccountLogin/signup";
import SignIn from "../pages/AccountLogin/signin";
import Profile from "../pages/User/Profile";
import VideoPage from "../pages/videoPage/VideoPage.jsx";
import Course from "../pages/Course/course.jsx";
import CouresCreator from "../pages/CourseCreator/CourseCreator.jsx";
import Search from "../pages/Search/Search";

import { useAuth , AuthProvider } from "../services/authContext";
import MyCourses from "../pages/mycourses/MyCourses";


const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    ></Route>
  );
};

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return !currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to="/user/profile" />
        );
      }}
    ></Route>
  );
};

const createRoutes = () => (
  <AuthProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/search/:id" component={Search} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/course/:id" component={Course} />
        <AuthenticatedRoute exact path="/signup" component={SignUp} />
        <AuthenticatedRoute exact path="/login" component={SignIn} />
        <PrivateRoute exact path="/user/profile" component={Profile} />
        <PrivateRoute exact path="/createcourse" component={CouresCreator} />
        <PrivateRoute exact path="/mycourses" component={MyCourses} />
      
        <Route exact path="/videoPage/:id" component={VideoPage} />
      </Switch>
    </Router>
  </AuthProvider>
);

export default createRoutes;
