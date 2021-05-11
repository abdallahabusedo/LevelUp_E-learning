import './assets/styles/App.css';

import createRoutes from './navigation/routes.js';
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default App;
