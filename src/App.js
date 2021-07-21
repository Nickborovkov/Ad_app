import './App.css';
import React, {Suspense, lazy} from "react";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/header/headerContainer";

import ProfileContainer from "./components/profile/profileContainer";

import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/preloader/preloader";

const UsersContainer = lazy(() => import("./components/users/usersContainer"))
const DialogsContainer = lazy(() => import("./components/dialogs/dialogsContainer"))
const LoginContainer = lazy(() => import("./components/login/loginContainer"))


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) return <Preloader/>

        return (
            <div className="appWrapper">
                <HeaderContainer/>
                <div className='appInner'>
                    <Navbar/>
                    <div className='appContent'>
                        <Switch>

                            <Route exact path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Suspense fallback={<Preloader/>}>
                                <Switch>
                                    <Route path='/dialogs'
                                           render={() => <DialogsContainer/>}/>
                                    <Route path='/users'
                                           render={() => <UsersContainer/>}/>
                                    <Route path='/login'
                                           render={() => <LoginContainer/>}/>
                                    <Route exact path='/'
                                           render={() => <Redirect to={`/profile`}/>}/>
                                    <Route path='*'
                                           render={() => <div>404 NOT FOUND</div>}/>
                                </Switch>
                            </Suspense>

                        </Switch>


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
