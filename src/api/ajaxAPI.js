import axios from "axios";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY' : '7fe21124-af5c-4dec-b01b-2e6ef496d8ed'
    }
})

export let usersAPI = {
    getUsers(pageSize, currentPage) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    }
}

export let profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`/profile/status` , {status: status})
    }
}

export let followAPI = {
    followUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowUser(userId) {
        return instance.delete(`follow/${userId}`)
    },
}

export let authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    },
    loginUser(email, password, rememberMe = false) {
        return instance.post(`auth/login` , {email, password, rememberMe})
    },
    logoutUser() {
        return instance.delete(`auth/login`)
    }
}