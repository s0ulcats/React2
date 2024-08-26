import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API_KEY": "f6859b36-0910-4af8-b00c-8bf98acaf504"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data
        })
    },
    postFollowedUsers(u) {
        return instance.post(`follow/${u.id}`)
            .then(response => {
                return response.data
            })
    },
    deleteFollowedUsers(u) {
        return instance.delete(`follow/${u.id}`)
        .then(response => {
            return response.data
        })
    }

}