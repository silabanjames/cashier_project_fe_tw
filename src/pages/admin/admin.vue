<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Halaman <span class="font-normal">Admin</span></h1>
    </div>
    <div class="px-8">
        <div class="flex flex-col items-center mb-8 md:flex-row md:justify-evenly">
            <div class="bg-gradient-to-r from-primary to-green-400 text-white px-10 py-8 mb-6 w-2/3 rounded-lg shadow-md md:mb-0 md:max-w-md md:w-full md:mr-6">
                <h2 class="text-base font-semibold">Total Produk</h2>
                <h1 class="text-3xl text-right font-bold mt-14">{{ products.totalProduct }}</h1>
            </div>
            <div class="bg-gradient-to-r from-primary to-green-400 text-white px-10 py-8 w-2/3 rounded-lg shadow-md md:max-w-md md:w-full">
                <h2 class="text-base font-semibold">Total Pendapatan</h2>
                <h1 class="text-2xl text-right font-bold mt-14">Rp. {{ history.totalRevenue }}</h1>
            </div>
        </div>

        <div class="flex justify-end mb-8">
            <RouterLink :to="{name: 'AddProduct'}">
                <button class="text-center bg-primary text-white px-4 py-2 rounded-sm shadow-md flex items-center hover:bg-teal-400">
                    <p class="mx-1">Tambah Product</p> 
                    <span class="">
                        <svg width="20" height="20">
                            <use xlink:href="src/assets/svg/icon-sprite.svg#add"></use>
                        </svg>
                    </span>
                </button>
            </RouterLink>
        </div>

        <table class="table-fixed w-full mb-16">
            <thead class="text-left">
                <tr class="border-slate-200 border-b-2">
                    <th class="font-normal w-1/6 pb-2">ID</th>
                    <th class="font-normal pb-2">Product</th>
                    <th class="font-normal w-1/6 pb-2">Harga</th>
                    <th class="font-normal w-1/6 pb-2">Stok</th>
                    <th class="font-normal text-center w-1/6 pb-2">Tambahan</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-slate-200 border-b-2" v-for="product in products.products">
                    <td>{{ product.id }}</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row sm:py-4 lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center overflow-hidden">
                            <img :src="`http://${product.image}`" alt="Product" class="max-w-full h-auto">
                        </div>
                        <h2 class="text-center text-sm font-semibold py-2 sm:text-left sm:ml-2 md:ml-6 xl:text-lg">{{ product.title }}</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. {{ product.price }},-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">{{ product.stock }}</td>
                    <td class="text-center px-2">
                        <RouterLink :to="{name: 'EditProduct'}">
                            <button class="hover:text-green-600">
                                <svg width="24" height="24">
                                    <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                                </svg>
                            </button>
                        </RouterLink>
                        <button class="hover:text-sky-600" @click="toggleModalProductDetail">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr>

                <!-- <tr class="border-slate-200 border-b-2">
                    <td>199924</td>
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-left text-secondary pr-2 sm:text-sm md:text-base">193</td>
                    <td class="text-center px-2">
                        <RouterLink :to="{name: 'EditProduct'}">
                            <button class="hover:text-green-600">
                                <svg width="24" height="24">
                                    <use xlink:href="src/assets/svg/icon-sprite.svg#edit"></use>
                                </svg>
                            </button>
                        </RouterLink>
                        <button class="hover:text-sky-600" @click="toggleModalProductDetail">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#info"></use>
                            </svg>
                        </button>
                        <button class="hover:text-red-600">
                            <svg width="24" height="24">
                                <use xlink:href="src/assets/svg/icon-sprite.svg#delete"></use>
                            </svg>
                        </button>
                    </td>
                </tr> -->
                
            </tbody>
        </table>

        <template v-if="showProductDetail">
            <ProductDetail @close="toggleModalProductDetail" />
        </template>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import ProductDetail from '@/components/productdetail.vue'
import { useAdminStore } from '../../stores/admin';
import { useProductStore } from '../../stores/product';
import { useHistoryStore } from '../../stores/history';

const admin = useAdminStore()
const products = useProductStore()
const history = useHistoryStore()

let showProductDetail = ref(false)

const toggleModalProductDetail = () => {
    showProductDetail.value = !showProductDetail.value
}

onBeforeMount(() => {
    products.getProductList()
    history.getPurchaseHistory()
})


</script>