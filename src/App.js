import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import News from './components/news/news'
import FriendsContainer from './components/friends/friendsContainer';
import Photos from './components/photos/photos';
import Music from './components/music/music';
import Videos from './components/videos/videos';
import Settings from './components/settings/settings';
import Footer from './components/footer/footer';
import DialogsContainer from './components/dialogs/dialogsContainer';


function App(props) {
  return (
      <div className='app__wrapper'>
        <Header />
        <Route render={()=><Navbar />} />
        <div className='contentWrapper'>


          <Route path='/profile' render={() => <Profile />}/>
                                
          <Route exact path='/dialogs' render={()=><DialogsContainer />}/>

          <Route path='/friends' render={()=><FriendsContainer />}/> 

          <Route path='/news' render={()=><News />}/>          

          <Route path='/photos' render={()=><Photos />}/>

          <Route path='/music' render={()=><Music />}/>

          <Route path='/videos' render={()=><Videos />}/>

          <Route path='/settings' render={()=><Settings />}/>


        </div>
        <Footer />
      </div>
 );
}

export default App;
