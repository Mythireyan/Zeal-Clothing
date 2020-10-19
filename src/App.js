import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import Header from './Components/Header/Header';
import SignInSignUpPage from './Pages/SignIn-SignUp-Page/SignIn-SignUp-Page';
import {auth, createUserProfileDocument } from './Firebase/FirebaseUtility';


class  App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser : null,
    }
  }
  
  unSubscribeFromAuth = null;  

  componentDidMount(){
    this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
          console.log(this.state);
        });
      }
      else{
        this.setState({currentUser:userAuth});
      }
    });
  }  

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render(){
    return (
    <div className="App">
    <Header currentUser ={this.state.currentUser}/>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Route path='/signIn' component={SignInSignUpPage}/>
    </Switch>  
    </div>
  );
  }  
}

export default App;
