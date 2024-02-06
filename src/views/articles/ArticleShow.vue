<script setup>
import { ref, onMounted } from 'vue';
import useArticle from "@/composables/articles";

const { article, getArticle } = useArticle();

const props =defineProps({
    id:{
        required : true,
        type: String,
    }
})

onMounted(async () => getArticle(props.id));

</script>
<template>
    <div class="mt-20 mx-20">
        <div class="space-y-6">
            <div class="mb-6">
                <div>
                    <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">제목</label>
                    <p type="text" id="title" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{ article.title }}</p>
                </div>
                <div class="mt-10">
                    <label for="content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">내용</label>
                    <p type="text" id="content" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">{{ article.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>