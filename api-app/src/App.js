import './App.css';
import UsersList from './Components/UsersList'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UsersList/>
      <Footer/>
    </div>
  );
}

export default App;
