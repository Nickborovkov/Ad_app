import avatar from './../images/avatar.png'

import user1 from './../images/users/user1.jpg'
import user2 from './../images/users/user2.jpg'
import user3 from './../images/users/user3.jpg'
import user4 from './../images/users/user4.jpg'
import user5 from './../images/users/user5.jpg'
import user6 from './../images/users/user6.jpg'
import user7 from './../images/users/user7.jpg'
import user8 from './../images/users/user8.jpg'
import user9 from './../images/users/user9.jpg'
import user10 from './../images/users/user10.jpg'


let state = {
    profilePage : {
        profile: [
            {title: 'Name', subtitle:` Jonatan Parker`},
            {title: 'Age', subtitle:`29`},
            {title: 'Date of Birth', subtitle:`Dec 26 1992`},
            {title:'City', subtitle:`Bogisichborough`},
            {title:'Education', subtitle:`MIT`},
        ],
        avatar: avatar,
        posts: [
            {id:1, message:`Hi`, likescount: 6},
            {id:2, message:`Konichiva`, likescount: 3},
            {id:3, message:`Good Evening`, likescount: 11},
            {id:4, message:`Fuck you all`, likescount: 1},
        ],
    },
    dialogsPage: {
        users: [
            {id:1, name: `Rasheed Thompson`},
            {id:2, name: `Tiana Jaskolski`},
            {id:3, name: `Linda Stokes`},
            {id:4, name: `Jorge Wiza`},
            {id:5, name: `Garret Leuschke`},
            {id:6, name: `Ilene Treutel`},
            {id:7, name: `Devan Haley`},
            {id:8, name: `Dane Boyle`},
            {id:9, name: `Ivah Mohr`},
            {id:10, name: `Kurtis Walsh`},
        ],
        messages: [
            {id:1, message:`quantifying`},
            {id:2, message:`434-806-2276`},
            {id:3, message:`Mara_Block`},
            {id:4, message:`tertiary`},
            {id:5, message:`The Football Is Good For Training`},
            {id:6, message:`direct_black.mp3`},
            {id:7, message:`Generic Steel Sausages`},
            {id:8, message:`Cross-platform analyzing workforce`},
            {id:9, message:`We need to generate the redundant GB program!`},
            {id:10, message:`Generating the array won't do anything!`},
        ],
    },
    friendsPage: {
        users:[
            {name: `Rasheed Thompson`, status: `Principal haptic`, avatar: user1},
            {name: `Tiana Jaskolski`, status: `Deposit value-added`, avatar: user2},
            {name: `Linda Stokes`, status: `Maroon optimal`, avatar: user3},
            {name: `Jorge Wiza`, status: `Boliviano`, avatar: user4},
            {name: `Garret Leuschke`, status: `IB magenta`, avatar: user5},
            {name: `Ilene Treutel`, status: `Copy`, avatar: user6},
            {name: `Devan Haley`, status: `Invoice Unbranded Salad`, avatar: user7},
            {name: `Dane Boyle`, status: `Bluetooth`, avatar: user8},
            {name: `Ivah Mohr`, status: `Industrial`, avatar: user9},
            {name: `Kurtis Walsh`, status: `Reboot`, avatar: user10},
        ]
    }
}

export default state;