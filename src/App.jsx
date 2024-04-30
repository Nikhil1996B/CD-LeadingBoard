import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeadershipDashboard from './components/LeadershipDashboard';
import Home from './components/Home';
import Layout from './components/Layout';


function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/leaderboard/kiosk/:kioskid"
            element={<LeadershipDashboard />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
