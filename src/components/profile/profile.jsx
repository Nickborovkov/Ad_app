import React from "react";
import styles from './profile.module.css'
import defaultAvatar from '../../assets/images/defaultUser.png'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {TextArea} from "../../common/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./profileStatus/userStatusWithHooks";


const maxLength10 = maxLengthCreator(200)


let Profile = (props) => {

    let onPostAdd = (values) => {
        props.addNewPost(values.newPostText)
    }

    return (
        <div className={styles.profile}>
           <div>
               <h2 className={styles.title}>Profile</h2>
               <div className={styles.profileHolder}>
                   <div className={styles.avatarHolder}>
                       <img className={styles.avatar}
                            src={props.profile.photos.large
                                ? props.profile.photos.large
                                : defaultAvatar}
                            alt="avatar"/>
                       <ProfileStatusWithHooks status={props.userStatus}
                                      updateUserStatus = {props.updateUserStatus}
                                      isAuth = {props.isAuth}
                                      profileId={props.profile.userId}
                                      authUserId = {props.authUserId}/>
                   </div>
                   <div className={styles.propertiesHolder}>
                       <div className={styles.property}>
                           <p className={styles.propertyHeader}>Name:</p>
                           {props.profile.fullName}
                       </div>
                       {!props.profile.aboutMe
                           ? null
                           : <div className={styles.property}>
                           <p className={styles.propertyHeader}>About me:</p>
                           {props.profile.aboutMe}
                       </div>}

                       <div className={styles.property}>
                           <p className={styles.propertyHeader}>ID:</p>
                           {props.profile.userId}
                       </div>
                       <div className={styles.property}>
                           <p className={styles.propertyHeader}>Looking for a job status:</p>
                           {props.profile.lookingForAJob
                               ? `Looking for a job`
                               : `Not looking for a job`}
                       </div>
                       {!props.profile.lookingForAJobDescription
                           ? null
                           : <div className={styles.property}>
                           <p className={styles.propertyHeader}>Looking for a job description:</p>
                           {props.profile.lookingForAJobDescription}
                       </div>}

                   </div>
               </div>
           </div>
           <div>
               <h2 className={styles.title}>My posts</h2>
               {
                   !props.isAuth
                       ? null
                       : <div>
                           {
                               props.profile.userId === props.authUserId
                                   ? <PostsFormRedux onSubmit={onPostAdd}/>
                                   : null
                           }
                       </div>

               }

               <div>
                   {
                       props.posts.map(p => {
                           return (
                               <div key={p.id}
                                    className={styles.post}>
                                   <div>
                                       <img className={styles.postAvatar}
                                            src={props.profile.photos.large
                                                ? props.profile.photos.large
                                                : defaultAvatar}
                                            alt="avatar"/>
                                            <div className={styles.postName}>
                                                {props.profile.fullName}
                                            </div>

                                   </div>

                                   <div className={styles.postText}>
                                       {p.post}
                                   </div>
                                   <div className={styles.likesCount}>
                                       {p.likesCount}
                                       <button className={styles.likeBtn}>Like</button>
                                   </div>
                               </div>
                           )
                       }).reverse()
                   }
               </div>
           </div>
        </div>
    )
}

export default Profile

let PostsForm = (props) => {
    return <form className={styles.postForm}
                 onSubmit={props.handleSubmit}>
        <Field className={styles.textarea}
               component = {TextArea}
               name='newPostText'
               placeholder='Enter your text here...'
               validate={[requiredField, maxLength10]}/>
        <button className={styles.postBtn}>Send</button>
    </form>
}

let PostsFormRedux = reduxForm({
    form: `newPostForm`
})(PostsForm)