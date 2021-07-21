import React, {useState} from "react";
import styles from './profile.module.css'
import defaultAvatar from '../../assets/images/defaultUser.png'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input, TextArea} from "../../common/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./profileStatus/userStatusWithHooks";


const maxLength10 = maxLengthCreator(200)


let Profile = (props) => {

    let onPostAdd = (values) => {
        props.addNewPost(values.newPostText)
    }

    const onMainPhotoSelected = (event) => {
        if (event.target.files.length) {
            props.savePhoto(event.target.files[0])
        }
    }


    let [editMode, setEditMode] = useState(false)

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deActivateEditMode = () => {
        setEditMode(false)
    }

    let onEditModeSubmit = (formData) => {
        props.saveProfile(formData).then( () => {
            deActivateEditMode()
        } )
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
                        {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                        <ProfileStatusWithHooks status={props.userStatus}
                                                updateUserStatus={props.updateUserStatus}
                                                isAuth={props.isAuth}
                                                profileId={props.profile.userId}
                                                authUserId={props.authUserId}/>
                    </div>


                    {
                        !editMode &&
                        <ProfileData {...props}
                                     activateEditMode={activateEditMode}
                                     isOwner={props.isOwner}

                        />
                    }
                    {
                        editMode &&
                        <ProfileDataFormRedux onSubmit={onEditModeSubmit}
                                              initialValues={props.profile}
                                              {...props}/>
                    }


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
                    <div className={styles.postList}>
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
                                        <button className={styles.deleteButton}
                                                onClick={() => {
                                                    props.deletePost(p.id)
                                                }}>Delete
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </div>

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
               component={TextArea}
               name='newPostText'
               placeholder='Enter your text here...'
               validate={[requiredField, maxLength10]}/>
        <button className={styles.postBtn}>Send</button>
    </form>
}

let PostsFormRedux = reduxForm({
    form: `newPostForm`
})(PostsForm)


let Contact = ({contactTitle, contactValue}) => {
    return <div>
        <b>{contactTitle}</b> : {contactValue}
    </div>
}


let ProfileData = (props) => {
    return (
        <div className={styles.propertiesHolder}>

            {props.isOwner && <button onClick={props.activateEditMode}>Edit</button>}

            <div className={styles.property}>
                <p className={styles.propertyHeader}>Name:</p>
                {props.profile.fullName}
            </div>
            <div className={styles.property}>
                <p className={styles.propertyHeader}>About me:</p>
                {props.profile.aboutMe}
            </div>

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
            <div className={styles.property}>
                <p className={styles.propertyHeader}>Professional Skills:</p>
                {props.profile.lookingForAJobDescription}
            </div>

            <div>
                <h3>Contacts</h3>
                {Object.keys(props.profile.contacts).map(key => {
                    if (!props.profile.contacts[key]) return null
                    return <Contact key={key}
                                    contactTitle={key}
                                    contactValue={<a href={props.profile.contacts[key]}>{key}</a>}/>
                })}
            </div>

        </div>
    )
}
let ProfileDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <h4>EDIT-MODE</h4>
        <button onClick={props.deActivateEditMode}>Save</button>
        <Field placeholder='Full name'
               type='text'
               component={Input}
               name='fullName'/>
        <Field placeholder='About me'
               type='text'
               component={TextArea}
               name='aboutMe'/>
        Looking for a job ?
        <Field type='checkbox'
               component={Input}
               name='lookingForAJob'/>
        <Field placeholder='My professional skills'
               type='text'
               component={TextArea}
               name='lookingForAJobDescription'/>
        <div>
            {
                props.error
                    ? <p>{props.error.split(` `)[3].split(`->`)[1].slice(0, -1) + `- URL needs to be correct`}</p>
                    : null
            }
            {
                Object.keys(props.profile.contacts).map(key => {
                    return <div>
                        <Field component={`input`}
                               type={`text`}
                               name={'contacts.' + key}
                               placeholder={key}/>
                        <div>
                        </div>
                    </div>
                })
            }
        </div>


    </form>
}

let ProfileDataFormRedux = reduxForm({
        form: `profileEditForm`
    }
)(ProfileDataForm)
