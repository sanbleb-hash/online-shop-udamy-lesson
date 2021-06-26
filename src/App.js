import { BrowserRouter as Router, Switch, Route ,Redirect } from 'react-router-dom'
import Home from './pages/Home'
import { sections } from './data/directory.data'
import ShopPage from './components/ShopPage'
import Header from './pages/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import React from 'react';
import { auth, createUserProfileDocument } from './fireBase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/user/user.action'


class App extends React.Component{
  
  

  unsubscribeFromAuth = null;

  componentDidMount() {
    
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
   
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot=>{
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          },console.log(this.state))
        })
     
      }
     setCurrentUser(userAuth);
     } )
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

    render(){
      return(
      <Router className='font-word'>
      <Header />
      <Switch>
        <Route path='/' exact> 
        <Home sectionz={sections} />
      </Route> 
       <Route path='/shop' component={ShopPage}  /> 
       <Route  path='/signUp' component={SignIn} /> 
       <Route path='/signin' exact render={()=> this.props.currentUser ? (<Redirect to='/'/>) : <SignUp /> } /> 
       </Switch>      
    </Router>
  );
    }
       
}

const mapStateToprops = ({user})=> ({
  currentUser: user.currentUser
 })

const mapDispatchToProps = (dispatch) => ({
setCurrentUser: user => dispatch(setCurrentUser(user))

});


export default connect(
  mapStateToprops,
  mapDispatchToProps
  ) (App);
