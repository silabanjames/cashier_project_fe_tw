import { defineStore } from "pinia";
import axiosInstance from "../lib/";
import router from '../router'

export const useAuthStore = defineStore('auth', {
    state: () =>({
        user: {
            name: '',
            email: {
                value: '',
                errmsg: ''
            },
            password: {
                value: '',
                errmsg: ''
            },
            role: '',
        }
    }),
    actions: {
        async handleLogin() {
            const email = this.user.email.value
            const password = this.user.password.value

            await axiosInstance.post('/auth/sign-in', {
                email,
                password
            })
            .then(res => res.data)
            .then(
                data => {
                    const token = data.access_token
                    sessionStorage.setItem('token', token)
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

                    this.user.name = data.user_information.name
                    this.user.email.value = data.user_information.email
                    this.user.email.errmsg = ''
                    this.user.password.value = ''
                    this.user.password.errmsg = ''
                    this.user.role = data.user_information.role
                    router.push('/')
                }
            )
            .catch(err => {
                console.log(err)
            })
        },
        handleLogout(){
            let confirmation = confirm("Apakah anda yakin ingin keluar dari aplikasi?")
            if(confirmation){
                sessionStorage.removeItem('token')
                this.user.name = ''
                this.user.email.value = ''
                this.user.role = ''
                router/push('/login')
            }
        }
    }
})