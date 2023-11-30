import { defineStore } from "pinia";
import axiosInstance from "../lib/";
import router from '../router'

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        quantity: 0,
    }),
    actions: {
        async getProductList(){
            await axiosInstance.get(`/product`)
            .then(res=>res.data)
            .then(data => {
                this.products = data.data
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async getProductImage(imageName){
            await axiosInstance.get(`/product/${imageName}`)
            .then(res=>res.data)
            .then(data=>{
                console.log(data)
                return data
            })
            .catch(err=>{
                console.log(err)
            })
        },
        async addToCart(productId, modalToggle){
            if(this.quantity===0){
                alert('Isi jumlah Pemesanan')
                return
            }
            const quantity = this.quantity
            await axiosInstance.post('/cart', {
                productId,
                quantity
            })
            .then(res => res.data)
            .then(data => {
                modalToggle()
                router.go(0)
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        increaseQuantity(){
            this.quantity++
        },
        decreaseQuantity(){
            this.quantity--
        }
    },
    getters: {
        totalProduct: (state) => {
            return state.products.length
        },
        
    }
})