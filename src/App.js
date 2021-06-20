import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Home from './pages/Home'
import { sections } from './data/directory.data'
import ShopPage from './components/ShopPage'
import Header from './pages/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function App() {

  return (
    <Router className='font-word'>
      <Header />
      <Switch>
      <Route path='/' exact> 
        <Home sectionz={sections} />
      </Route> 
       <Route path='/shop' component={ShopPage}  /> 
       <Route path='/signin' component={SignIn}  /> 
       <Route path='/signup' component={SignUp}  /> 
       </Switch>      
    </Router>
  );
}

export default App;
