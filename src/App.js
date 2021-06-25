import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom'
import Home from './pages/Home'
import { sections } from './data/directory.data'
import ShopPage from './components/ShopPage'
import Header from './pages/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import React from 'react';
import { auth, createUserProfileDocument } from './fireBase/firebase.utils';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
   
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },console.log(this.state))
        })
     
      }
     
     } )
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

    render(){
      return(
      <Router className='font-word'>
      <Header currentUser={this.state.currentUser}/>
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
       
}

export default App;
