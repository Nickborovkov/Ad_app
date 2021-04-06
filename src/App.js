import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import News from './components/news/news'
import Friends from './components/friends/friends';
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
        <Route render={()=><Navbar />} /> {/*state={props.state.friendsPage}*/}
        <div className='contentWrapper'>
          <Route path='/profile' 
          render={() => <Profile store={props.store} />}/>
                                
          <Route exact path='/dialogs' 
          render={()=><DialogsContainer store={props.store} />}/>

          <Route path='/news' render={()=><News />}/>

          <Route path='/friends' 
          render={()=><Friends state={props.state.friendsPage}/>}/>   

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
