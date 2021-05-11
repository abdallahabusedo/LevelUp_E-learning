import './assets/styles/App.css';

import createRoutes from './navigation/routes.js';

function App() {
  return (
    <div className="App">
      {createRoutes()}
    </div>
  );
}

export default App;
