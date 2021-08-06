import './App.css';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import AllStudents from './components/AllStudents';
import CreateStudents from './components/CreateStudents';

function App() {
  return (
    <>
      <Router>
        <div className="header">
          <div className="container">
            <Link className="logo" to="/">Student Management System</Link>
          </div>
        </div>
        <div className="main">
          <div className="container">
            <div className="wrapper">
              <AllStudents />
              <CreateStudents />
            </div>
          </div>
        </div>

      </Router>
    </>

  );
}

export default App;
