import { defineStore } from "pinia";
import axiosInstance from "../lib";
import router from '../router'

export const useCartStore = defineStore('cart', {
    state: () => ({
        products: []
    }),
    actions: {
        async getCart(){
            await axiosInstance.get('/cart')
            .then(res => res.data)
            .then(data => {
                this.products = data.data
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async deleteCartItem(id){
            await axiosInstance.delete(`/cart/${id}`)
            .then(res=>res.data)
            .then(data => {
                this.products.forEach((obj, index) => {
                    if(obj.id === id){
                        this.products.splice(index, 1)
                    }
                })
                router.push({name: 'Cart'})
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async createOrder(){
            if(confirm('Apakah anda yakin ingin melakukan transaksi?')){
                await axiosInstance.post('/cart/transaction')
                .then(res => res.data)
                .then(data => {
                    router.go(0)
                })
                .catch(err => {
                    alert(err.response.data.message)
                })
            }
        }
    },
    getters: {
        totalCost: (state) => {
            let totalCost = 0
            state.products.forEach((obj)=>{
                totalCost += obj.quantity * obj.product.price
            })
            return totalCost
        }
    }
})