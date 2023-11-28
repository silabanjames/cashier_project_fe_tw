<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Tambah <span class="font-normal">Produk</span></h1>
    </div>
    <div class="w-full px-8">
        <div class="bg-white rounded-md max-w-xl w-full mx-auto md:max-w-full">
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
                    <div class="md:w-1/2 md:px-2 my-auto">
                        <div style="position: relative;">
                            <DropZone 
                                :maxFilesSize="Number(60000000)"
                                url="http://localhost:3000/upload"
                                :uploadOnDrop="false"
                                :maxFiles="1"
                                @addedFile="uploaded" />
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

<style>
.dropzone__item--style .dropzone__progress{
    display: none;
}
</style>

<script setup>
import { ref } from 'vue'
import { useAdminStore } from '../../stores/admin';

const admin = useAdminStore()

let file = ref(null)
let title = ref(null)
let price = ref(null)
let stock = ref(null)

const uploaded= async function(event){
    file.value = event.file
}

const submitForm = () => {
    const formData = new FormData();
    formData.append('file', file.value)
    formData.append('title', title.value)
    formData.append('price', price.value)
    formData.append('stock', stock.value)
    admin.handleAddProduct(formData)
}

</script>