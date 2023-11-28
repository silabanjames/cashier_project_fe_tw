import { defineStore } from "pinia";
import axiosInstance from "../lib";
import router from '../router'

export const useHistoryStore = defineStore('history', {
    state: () => ({
        products: []
    }),
    actions: {
        async getPurchaseHistory(){
            await axiosInstance.get('/history')
            .then(res => res.data)
            .then(data => {
                this.products = data.data
                console.log(this.products)
            })
        }
    }
})