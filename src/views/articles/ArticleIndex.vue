<script setup>
    import useArticle from "@/composables/articles";
    import {onMounted} from "vue";
    import { RouterLink, useRouter } from 'vue-router';

    const {articles, getArticles} = useArticle();
    onMounted(() => getArticles());
    
    const router = useRouter();
    const goToArticleShow = (articleId) => {
    router.push({ name: 'ArticleShow', params: { id: articleId } });
};
</script>
<template>

    <div class="m-1">
        <div class="relative overflow-x-auto m-20">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">번호</th>
                        <th scope="col" class="px-6 py-3">제목</th>
                        <th scope="col" class="px-6 py-3">내용</th>
                        <th scope="col" class="px-6 py-3">작성 일자</th>
                        <th scope="col" class="px-6 py-3">수정 일자</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="article in articles" :key="article.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" @click="goToArticleShow(article.id)">
                       <td class="py-4 px-6">{{ article.id }}</td>
                       <td class="py-4 px-6">{{ article.title }}</td>
                       <td class="py-4 px-6">{{ article.content }}</td>
                       <td class="py-4 px-6">{{ article.created_at }}</td>
                       <td class="py-4 px-6">{{ article.updated_at }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="mr-16">
                <div class="flex justify-end m-2 p-2">
                    <RouterLink :to="{name : 'ArticleCreate'}" class="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded">작성</RouterLink>
                </div>
           </div>
        </div>
    </div>
</template>