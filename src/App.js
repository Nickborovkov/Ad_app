import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Profile from './components/profile/profile';
import News from './components/news/news'
import Friends from './components/friends/friends';
import Dialogs from './components/dialogs/dialogs';
import Photos from './components/photos/photos';
import Music from './components/music/music';
import Videos from './components/videos/videos';
import Settings from './components/settings/settings';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app__wrapper'>
        <Header />
        <Navbar />
        <div className='contentWrapper'>
          <Route path='/profile' 
          render={() => <Profile state={props.state.profilePage}/>}/>
          <Route exact path='/dialogs' 
          render={()=><Dialogs state={props.state.dialogsPage}/>}/>
          <Route path='/news' render={()=><News />}/>
          <Route path='/friends' render={()=><Friends />}/>          
          <Route path='/photos' render={()=><Photos />}/>
          <Route path='/music' render={()=><Music />}/>
          <Route path='/videos' render={()=><Videos />}/>
          <Route path='/settings' render={()=><Settings />}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
