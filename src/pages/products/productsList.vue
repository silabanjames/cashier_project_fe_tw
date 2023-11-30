<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Daftar <span class="font-normal">Barang</span></h1>
    </div>
    <div class="px-8">
        <template v-if="products.products.length === 0">
            <div class="w-full mt-32 relative flex justify-center items-center">
                <h1 class="text-2xl text-secondary font-medium text-center">Daftar Barang Kosong</h1>
            </div>
        </template>
        <template v-else>
            <div class="flex justify-center">
            <div class="max-w-[350px] w-full sm:max-w-full sm:grid sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
                <div class="bg-white w-full flex flex-col items-center mb-6 rounded-md shadow-md " v-for="product in products.products">
                    <div class="w-1/2 h-auto aspect-square mt-6 flex items-center">
                        <!-- <img src='@/assets/images/product/beng-beng-no-bg.png' alt="Product" class="w-full"> -->
                        <img :src='`http://${product.image}`' alt="Product" class="w-full h-48 object-contain" @error="imageLoadError">                    
                    </div>

                    <h2 class="text-lg font-semibold mt-2">{{ product.title }}</h2>
                    <h3 class="text-md text-secondary font-light">Rp. {{ product.price}},-</h3>
                    <h3 class="text-sm mb-4">Stok: {{ product.stock }}</h3>
                    <div class="mb-6 w-1/2">
                        <button type="button" class="bg-primary text-white py-1 px-4 w-full rounded-md enabled:hover:bg-teal-400 disabled:opacity-25" :disabled="product.inCart" @click="toggleModalAddToCart(product)">Beli</button>
                        <template v-if="product.inCart">
                            <button class="bg-red-500 text-white py-1 px-4 mt-2 w-full rounded-md hover:bg-red-400" @click="cart.deleteCartWithProductId(product.id)">Batal</button>
                        </template>
                    </div>
                </div>
            </div>
        </div>
        </template>
        
        <template v-if="showAddCartModal">
            <AddToCart @close="toggleModalAddToCart" :item="productInfo" />
        </template>
    </div>
</template>

<script setup>
import { ref, onBeforeMount, reactive } from 'vue';
import AddToCart from '@/pages/products/addToCart.vue'
import { useProductStore } from '../../stores/product';
import { useCartStore } from '../../stores/cart';

let showAddCartModal = ref(false)
let productInfo = reactive({})

const products = useProductStore()
const cart = useCartStore()

const toggleModalAddToCart = (productItem) => {
    showAddCartModal.value = !showAddCartModal.value
    if(showAddCartModal.value){
        productInfo = productItem
    }
    else{
        productInfo = reactive({})
    }
}

const imageLoadError = () => {
    console.log('Image failed to l')
}

onBeforeMount(() => {
    products.getProductList()
})

</script>