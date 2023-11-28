<template>
    <div class="w-full mb-6 px-4 text-2xl font-bold">
        <h1>Riwayat <span class="font-normal">Pemesanan</span></h1>
    </div>
    <div class="px-8">
        <table class="table-fixed w-full mb-4">
            <thead class="text-center">
                <tr class="border-slate-200 border-b-2">
                    <th class="text-left w-4/12 font-normal pb-2">Product</th>
                    <th class="text-secondary font-normal pb-2">Quantity</th>
                    <th class="text-secondary font-normal pb-2">Price</th>
                    <th class="text-secondary font-normal pb-2">Total</th>
                    <th class="text-secondary font-normal pb-2">Date</th>
                </tr>
            </thead>
            <tbody>
                <tr class="border-slate-200 border-b-2" v-for="product in history.products">
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img :src="`http://${product.product.image}`" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-10 md:text-lg">{{ product.product.title }}</h2>
                    </td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">{{ product.quantity }}</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">Rp. {{ product.product.price }},-</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">Rp. {{ product.product.price * product.quantity }},-</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">{{ product.bought_at }}</td>
                </tr>
                <!-- <tr class="border-slate-200 border-b-2">
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">12/01/2024</td>
                </tr>
                <tr class="border-slate-200 border-b-2">
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">12/01/2024</td>
                </tr>
                <tr class="border-slate-200 border-b-2">
                    <td class="flex flex-col items-center py-2 pr-4 sm:flex-row lg:pr-10">
                        <div class="max-w-[150px] w-full aspect-square flex items-center">
                            <img src="@/assets/images/product/beng-beng-no-bg.png" alt="Product" class="w-full">
                        </div>
                        <h2 class="text-center text-sm font-semibold sm:text-left sm:ml-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, temporibus!</h2>
                    </td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">Rp. 10000,-</td>
                    <td class="text-xs text-center text-secondary pr-2 sm:text-sm md:text-base">12/01/2024</td>
                </tr> -->
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { onBeforeMount} from 'vue';
import { useHistoryStore } from '../../stores/history';

const history = useHistoryStore()

onBeforeMount(()=>{
    history.getPurchaseHistory()
})
</script>