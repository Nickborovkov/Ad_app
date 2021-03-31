import './App.css';
import { Route } from 'react-router-dom';
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
import Footer from './components/footer/footer';


function App(props) {
  return (
      <div className='app__wrapper'>
        <Header />
        <Route render={()=><Navbar state={props.state.friendsPage}/>} />
        <div className='contentWrapper'>
          <Route path='/profile' 
          render={() => <Profile state={props.state.profilePage} 
                                 addPost={props.addPost}
                                 updateNewPostText={props.updateNewPostText}/>}/>
                                
          <Route exact path='/dialogs' 
          render={()=><Dialogs state={props.state.dialogsPage} 
                               photos={props.state.friendsPage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}/>}/>

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
