import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInSignUpPage from './Pages/SignIn-SignUp-Page/SignIn-SignUp-Page';
import {auth, createUserProfileDocument } from './Firebase/FirebaseUtility';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/UserAction';

class  App extends React.Component{
 
  
  unSubscribeFromAuth = null;  

  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
         setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          });
        }
      else{
        setCurrentUser(userAuth);
      }
    });
  }  

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
    <div className="App">
    <Header/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signIn' component={SignInSignUpPage}/>
    </Switch>  
    </div>
  );
  }  
}

const mapDispatchToProps= (dispatch)=>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
