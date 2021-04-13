import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import Footer from './components/footer/footer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import UsersContainer from './components/friends/usersContainer';


function App() {
  return (
      <div className='app__wrapper'>
        <Header />
        <Route render={()=><Navbar />} />
        <div className='contentWrapper'>

          <Route path='/profile' render={() => <Profile />}/>
                                
          <Route exact path='/dialogs' render={()=><DialogsContainer />}/>

          <Route path='/users' render={() => <UsersContainer />}/>

        </div>
        <Footer />
      </div>
 );
}

export default App;
