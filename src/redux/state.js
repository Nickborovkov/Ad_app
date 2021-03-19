import nick from './../images/users/nick.jpg';
import mike from './../images/users/mike.jpg';
import tom from './../images/users/tom.jpg';
import andrew from './../images/users/andrew.jpg';
import desmond from './../images/users/desmond.jpg';
import bob from './../images/users/bob.jpg';
import keeanu from './../images/users/keeanu.jpg';
import chris from './../images/users/chris.jpg';
import walter from './../images/users/walter.jpg';
import loko from './../images/users/loko.jpg';

let state = {
    profilePage : {
        profile: [
            {title: 'Name', subtitle:`Nick Borovkov`},
            {title: 'Age', subtitle:`24`},
            {title: 'Date of Birth', subtitle:`December 30th 1996`},
            {title:'City', subtitle:`Moscow`},
            {title:'Education', subtitle:`MTUCI`},
        ],
        posts: [
            {id:1, message:`Hi`, likescount: 6},
            {id:2, message:`Konichiva`, likescount: 3},
            {id:3, message:`Good Evening`, likescount: 11},
            {id:4, message:`Fuck you all`, likescount: 1},
        ],
    },
    dialogsPage: {
        users: [
            {id:1, name: `Nick`},
            {id:2, name: `Mike`},
            {id:3, name: `Tom`},
            {id:4, name: `Andrew`},
            {id:5, name: `Desmond`},
            {id:6, name: `Bob`},
            {id:7, name: `Keeanu`},
            {id:8, name: `Chris`},
            {id:9, name: `Walter`},
            {id:10, name: `Loko`},
        ],
        messages: [
            {id:1, message:`Hi bro`},
            {id:2, message:`Agreed`},
            {id:3, message:`No way`},
            {id:4, message:`What?`},
            {id:5, message:`Wazzaaaap`},
            {id:6, message:`Hello`},
            {id:7, message:`Fuck off`},
            {id:8, message:`Good evening`},
            {id:9, message:`Hi`},
            {id:10, message:`Hi, man`},
        ],
        photos: [
            {id:1, avatar: {nick}},
            {id:2, avatar: {mike}},
            {id:3, avatar: {tom}},
            {id:4, avatar: {andrew}},
            {id:5, avatar: {desmond}},
            {id:6, avatar: {bob}},
            {id:7, avatar: {keeanu}},
            {id:8, avatar: {chris}},
            {id:9, avatar: {walter}},
            {id:10, avatar: {loko}},
        ],
    }
}

export default state;