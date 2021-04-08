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

let initialState = {
    users:[
        { id: 1,name: `Rasheed Thompson`, status: `Principal haptic`, avatar: user1},
        { id: 2,name: `Tiana Jaskolski`, status: `Deposit value-added`, avatar: user2},
        { id: 3,name: `Linda Stokes`, status: `Maroon optimal`, avatar: user3},
        { id: 4,name: `Jorge Wiza`, status: `Boliviano`, avatar: user4},
        { id: 5,name: `Garret Leuschke`, status: `IB magenta`, avatar: user5},
        { id: 6,name: `Ilene Treutel`, status: `Copy`, avatar: user6},
        { id: 7,name: `Devan Haley`, status: `Invoice Unbranded Salad`, avatar: user7},
        { id: 8,name: `Dane Boyle`, status: `Bluetooth`, avatar: user8},
        { id: 9,name: `Ivah Mohr`, status: `Industrial`, avatar: user9},
        { id: 10,name: `Kurtis Walsh`, status: `Reboot`, avatar: user10},
    ]
    }

const friendsReducer = (state = initialState, action) =>{
    return state
}

export default friendsReducer