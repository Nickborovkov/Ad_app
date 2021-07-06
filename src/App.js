import './App.css';
import React from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/dialogs/dialogsContainer";
import UsersContainer from "./components/users/usersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import LoginContainer from "./components/login/loginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/preloader/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {

        if(!this.props.initialized) return <Preloader />

        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <div className='appInner'>
                    <Navbar/>
                    <div className='appContent'>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginContainer/>}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter,
)(App);
