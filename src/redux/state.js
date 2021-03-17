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
        dialogs: [
            {id:1, name: `Nick`},
            {id:2, name: `Mike`},
            {id:3, name: `Tom`},
            {id:4, name: `Andrew`},
            {id:5, name: `Geralt`},
            {id:6, name: `Triss`},
            {id:7, name: `Yen`},
            {id:8, name: `Keira`},
            {id:9, name: `Ciri`},
            {id:10, name: `Anna`},
        ],
        messages: [
            {id:1, message:`Hi bro`},
            {id:2, message:`Agreed`},
            {id:3, message:`No way`},
            {id:4, message:`What?`},
            {id:5, message:`Wazzaaaap`},
            {id:6, message:`Hello`},
            {id:7, message:`Unicorn is waiting`},
            {id:8, message:`Good evening`},
            {id:9, message:`Hi`},
            {id:10, message:`Hi, how are you`},
        ],
    }
}

export default state;