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

const friendsReducer = (state = initialState, action) =>{
    return state
}

export default friendsReducer