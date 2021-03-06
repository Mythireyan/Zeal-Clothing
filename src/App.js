import React from 'react';
import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage';
import Header from './Components/Header/Header';
import SignInSignUpPage from './Pages/SignIn-SignUp-Page/SignIn-SignUp-Page';
import {auth, createUserProfileDocument } from './Firebase/FirebaseUtility';
import {connect} from 'react-redux';
import {setCurrentUser} from './Redux/User/UserAction';
import {createStructuredSelector} from 'reselect';
import {currentUserSelector} from './Redux/User/UserSelectors';


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
      <Route exact path='/checkout' component={CheckOutPage}/>
      <Route exact
             path='/signIn' 
             render={()=>this.props.currentUser 
              ? (<Redirect to='/'/>) 
              : (<SignInSignUpPage/>)}
        />
    </Switch>  
    </div>
  );
  }  
}

const mapStateToProps = createStructuredSelector({
  currentUser:currentUserSelector,
})

const mapDispatchToProps= (dispatch)=>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
