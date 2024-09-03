import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "Authorization": "Bearer 23d36a50-7c57-4585-b6cf-3766628f8cc6"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    postFollowedUsers(userId) {
        return instance.post(`follow/${userId}`)
    },

    deleteFollowedUsers(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method. Pls use profileApi obj');
        return profileAPI.getProfile(userId)
    },
};

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logout() {
        return instance.delete('auth/login')
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status })
    }
};