<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Edit <span class="font-normal">Produk</span></h1>
    </div>
    <div class="w-full px-8">
        <div class="bg-white rounded-md max-w-xl w-full mx-auto py-4 md:max-w-full md:py-10">
            <form action="" class="p-4" @submit.prevent="submitForm">
                <div class="mb-6 md:flex">
                    <div class="mb-6 md:w-1/2 md:px-2">
                        <div class="mb-2">
                            <label for="" class="text-base">Nama Produk</label>
                            <input type="text" placeholder="Produk" class="w-full px-4 py-2 mt-2 border-2 rounded-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" v-model="title">
                        </div>
                        <div class="mb-2">
                            <label for="" class="text-base">Harga</label>
                            <input type="number" placeholder="Rp" class="w-full px-4 py-2 mt-2 border-2 rounded-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" v-model="price">
                        </div>
                        <div class="mb-2">
                            <label for="" class="text-base">Stok</label>
                            <input type="number" placeholder="pc(s)" class="w-full px-4 py-2 mt-2 border-2 rounded-sm focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" v-model="stock">
                        </div>
                    </div>
                    <div class="md:w-1/2 md:px-2 my-auto border-4 border-dashed py-2 border-violet-300">
                        <div class="">
                            <img 
                                :src="imageUrl ? imageUrl : 'http://' + admin.product.image" 
                                :alt="admin.product.title" 
                                class="mx-auto mb-10 max-w-[250px]" >

                            <input type="file" @change="updateImage" class="text-center mx-auto block ">
                        </div>
                    </div>
                </div>

                <div class="max-w-lg mx-auto">
                    <button type="submit" class="bg-primary text-white w-full py-2 rounded-sm">Tambah</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
input::file-selector-button {
    @apply bg-blue-500 text-white border-none px-2 py-1 rounded-md shadow-md hover:bg-blue-400 hover:cursor-pointer
}
</style>

<script setup>
import { ref, onBeforeMount, onMounted } from 'vue';
import { useAdminStore } from '../../stores/admin';

const admin = useAdminStore()

const title = ref(null)
const price = ref(null)
const stock = ref(null)
const imageUrl = ref(null)

const file = ref(null)

const props = defineProps({
    id: {
        type: String
    }
})

const updateImage = (event) => {
    file.value = event.target.files[0]
    if(file.value){
        const reader = new FileReader()

        reader.onload = (e) => {
            imageUrl.value = e.target.result
        }
        reader.readAsDataURL(file.value)
    }
}

const submitForm = () => {
    const formData = new FormData()
    if(file.value) formData.append('file', file.value)
    if(title.value !== admin.product.title) formData.append('title', title.value)
    if(price.value !== admin.product.price) formData.append('price', price.value)
    if(stock.value !== admin.product.stock) formData.append('stock', stock.value)
    admin.handleEditProduct(formData, admin.product.id)
}

onBeforeMount(async () => {
    await admin.searchDetailProduct(props.id)
    title.value = admin.product.title
    price.value = admin.product.price
    stock.value = admin.product.stock
})
</script>