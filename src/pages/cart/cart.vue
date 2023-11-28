<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Keranjang <span class="font-normal">Barang</span></h1>
    </div>
    <div class="px-8 flex justify-center">
        <template v-if="cart.products.length === 0">
            <div class="max-w-lg w-full aspect-video relative flex justify-center items-center">
                <h1 class="text-2xl text-secondary font-medium text-center">Keranjang Kosong</h1>
            </div>
        </template>
        <template v-else>
            <div class="w-full">
                <div class="sm:grid sm:grid-cols-2 sm:gap-2">

                    <div class="max-w-md mx-auto w-full bg-white px-2 py-8 rounded-lg shadow-lg flex flex-col items-center justify-between mb-2 sm:mb-0 lg:flex-row lg:max-w-full lg:py-6 lg:px-4" v-for="product in cart.products">
                        <div class="flex flex-col items-center lg:flex-row">
                            <div class="max-w-[300px] w-5/12 aspect-square flex items-center lg:mr-2">
                                <img :src="`http://${product.product.image}`" alt="w-full">
                            </div>
                            <div class="ml-1 text-center mb-2">
                                <h2 class="text- text-dark font-semibold">{{ product.product.title }}</h2>
                                <h3 class="text-sm text-secondary">Rp.{{ product.product.price }},- / pcs</h3>
                                <h3 class="text-sm text-dark">Pemesanan: {{ product.quantity }}</h3>
                            </div>
                        </div>

                        <div class="flex flex-col items-center lg:flex-row">
                            <h3 class="text-sm text-center font-semibold mb-5 lg:mb-0"><span class="font-normal block">Total:</span> Rp {{ product.quantity * product.product.price }},-</h3>
                            <button class="bg-red-600 text-white text-xs px-2 py-1 rounded-sm hover:bg-red-500 lg:order-first lg:mr-5" @click="cart.deleteCartItem(product.id)">
                                <svg width="24" height="24">
                                    <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- <div class="max-w-md mx-auto w-full bg-white px-2 py-8 rounded-lg shadow-lg flex flex-col items-center justify-between mb-2 sm:mb-0 lg:flex-row lg:max-w-full lg:py-6 lg:px-4">
                        <div class="flex flex-col items-center lg:flex-row">
                            <div class="max-w-[300px] w-5/12 lg:mr-2">
                                <img src="@/assets/images/product/beng-beng-no-bg.png" alt="w-full">
                            </div>
                            <div class="ml-1 text-center mb-2">
                                <h2 class="text- text-dark font-semibold">Beng beng</h2>
                                <h3 class="text-sm text-secondary">Rp.10000,- / pcs</h3>
                                <h3 class="text-sm text-dark">Pemesanan: 5</h3>
                            </div>
                        </div>

                        <div class="flex flex-col items-center lg:flex-row">
                            <h3 class="text-sm text-center font-semibold mb-5 lg:mb-0"><span class="font-normal block">Total:</span> Rp 50000,-</h3>
                            <button class="bg-red-600 text-white text-xs px-2 py-1 rounded-sm hover:bg-red-500 lg:order-first lg:mr-5">
                                <svg width="24" height="24">
                                    <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                                </svg>
                            </button>
                        </div>
                    </div> -->
                </div>
                <div class="w-full flex flex-col items-end mt-6">
                    <div class="text-right">
                        <h2 class="text-xl font-medium">Total</h2>
                        <h3 class="text-lg font-bold mb-2">Rp. {{ cart.totalCost }},-</h3>
                    </div>
                    <button class="bg-primary text-white w-full py-1 rounded-sm hover:bg-teal-40 sm:max-w-xs hover:bg-teal-400" @click="cart.createOrder">Pesan</button>
                </div>
            </div>
        </template>


        
    </div>
</template>

<script setup>
import { onBeforeMount} from 'vue';
import { useCartStore } from '../../stores/cart';

const cart = useCartStore()

onBeforeMount(()=>{
    cart.getCart()
})
</script>