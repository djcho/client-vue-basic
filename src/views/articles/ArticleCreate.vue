<script setup>
    import {reactive} from 'vue';
    import useArticle from '@/composables/articles';

    const {storeArticle, errors} = useArticle();

    const form = reactive({
        title: "",
        content: ""
    })
</script>
<template>
    <div class="mt-20 mx-20">
    <form class="mmx-auth p-4 rouded-md" @submit.prevent="storeArticle(form)">
        <div class="space-y-6">
            <div class="mb-6">
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                    <input type="text" id="title" v-model="form.title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                </div>
                <div class="mt-10">
                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                    <textarea type="text" id="content" v-model="form.content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>        
                </div>
            </div>
        </div>
        <div class="mr-16 flex justify-end m-2 p-2">
            <button type="submit" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">작성</button>
        </div>
    </form>
</div>

           
</template>