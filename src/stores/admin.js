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
    actions: {
        async handleAddProduct (formData) {
            console.log([...formData])
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
        }
    }
})