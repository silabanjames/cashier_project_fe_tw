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
            })
        }
    },
    getters: {
        totalRevenue: (state) => {
            let totalRevenue = 0
            state.products.forEach((obj)=>{
                totalRevenue += obj.quantity * obj.product.price
            })
            return totalRevenue
        }
    }
})