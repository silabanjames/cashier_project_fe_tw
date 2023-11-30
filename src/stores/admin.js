import { defineStore, storeToRefs } from "pinia";
import { useProductStore } from "../stores/product"
import axiosInstance from "../lib/";
import router from '../router'

// export const useAdminStore = defineStore('admin', () => {
//     const product = useProductStore()
//     const { products } = storeToRefs(product)
//     const { getProductList } = product

//     async function handleAddProduct (formData) {
//         console.log([...formData])
//         await axiosInstance.post(
//             '/admin/create-product',
//             formData,
//             {
//                 headers: { 
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//         .then(res=>res.data)
//         .then(
//             data=>{
//                 router.push({name: 'Admin'})
//             }
//         )
//         .catch(err => {
//             alert(err.response.data.message)
//         })
//     }

//     return {
//         products,
//         getProductList,
//         handleAddProduct
//     }
// })

export const useAdminStore = defineStore('admin', {
    state: () => ({
        product: {}
    }),
    actions: {
        async handleAddProduct (formData) {
            // console.log([...formData])
            await axiosInstance.post(
                '/admin/create-product',
                formData,
                {
                    headers: { 
                        'Content-Type': 'multipart/form-data'
                    }
                })
            .then(res=>res.data)
            .then(
                data=>{
                    router.push({name: 'Admin'})
                }
            )
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async handleEditProduct(formData, id){

            await axiosInstance.put(`/admin/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => res.data)
            .then(data => {
                if(data.error){
                    alert(data.error.message)
                }
                else{
                    router.push({name: 'Admin'})
                }
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async handleDeleteProduct(id){
            await axiosInstance.delete(`/admin/${id}`)
            .then(res => res.data)
            .then(data => {
                if(confirm('Yakin ingin menghapus produk?')){
                    router.go(0)
                }
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        },
        async searchDetailProduct(id){
            await axiosInstance.get(`/admin/${id}`)
            .then(res => res.data)
            .then(data => {
                this.product = data.data
            })
            .catch(err => {
                alert(err.response.data.message)
            })
        }
    }
})