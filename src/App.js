import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/friends/usersContainer';
import ProfileContainer from './components/profile/profileContainer';
import HeaderContainer from './components/header/headerContainer';


function App() {
  return (
      <div className='app__wrapper'>
        <HeaderContainer />
        <Route render={()=><Navbar />} />
        <div className='contentWrapper'>

          <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                                
          <Route exact path='/dialogs' render={()=><DialogsContainer />}/>

          <Route path='/users' render={() => <UsersContainer />}/>

        </div>
        <Footer />
      </div>
 );
}

export default App;
