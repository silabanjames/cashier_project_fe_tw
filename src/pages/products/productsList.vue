<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Daftar <span class="font-normal">Barang</span></h1>
    </div>
    <div class="px-8 ">
        <div class="flex justify-center">
            <div class="max-w-[350px] w-full sm:max-w-full sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6 flex items-center">
                        <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-md text-secondary font-light">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6 w-1/2">
                        <button class="bg-primary text-white py-1 px-4 w-full rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div>

                <!-- Display v.2 -->
                <!-- <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md ">
                    <div class="w-1/2 aspect-square mt-6">
                        <img src="@/assets/images/product/beng-beng.jpeg" alt="Product" class="w-full h-full rounded-full">
                    </div>
                    <h2 class="text-lg font-semibold mt-2">Beng beng</h2>
                    <h3 class="text-lg text-secondary">Rp. 10000,-</h3>
                    <h3 class="text-sm mb-4">Stok: 5</h3>
                    <div class="mb-6">
                        <button class="bg-primary text-white py-1 px-4 rounded-md hover:bg-teal-400" @click="toggleModalAddToCart">Beli</button>
                    </div>
                </div> -->
            </div>
        </div>
        <template v-if="showAddCartModal">
            <AddToCart @close="toggleModalAddToCart"/>
        </template>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import AddToCart from './addToCart.vue'

let showAddCartModal = ref(false)

const toggleModalAddToCart = () => {
    showAddCartModal.value = !showAddCartModal.value
}

</script>