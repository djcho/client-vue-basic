import {ref} from "vue";
import axios from "axios";
import {useRouter} from "vue-router";

axios.defaults.baseURL = "http://localhost:8000/api/";

export default function createArticle(){
    const articles = ref([]);
    const article = ref([]);
    const errors = ref({});
    const router = useRouter();

    const getArticles = async () => {
        const response = await axios.get("articles");
        articles.value = response .data.data;
    };

    const getArticle = async () => {
        const response = await axios.get("article" + id);
        article.value = response.data.data;
    };
    
    const storeArticle = async(data) => {
        try{
            await axios.post("articles", data);
            await router.push({name : "ArticleIndex"});            
        }catch(error){
            if(error.response.status === 422){
                errors.value = error.response.data.errors;
            }
        }
    }

    const updateArticle = async(id) => {
        try{
            await axios.put("articles/" + id, article.value);
            await router.push({name:"ArticleIndex"});
        } catch(error){
            if(error.response.status === 422){
                errorMessages.value = error.response.data.errors;
            }
        }
    };

    const destroyArticle = async(id) => {
        if(!window.confirm("Are You Sure?")){
            return;
        }
        await axios.delete("articles/" + id);
        await getArticle();
    }

    return {
        article,
        articles,
        getArticle,
        getArticles,
        storeArticle,
        updateArticle,
        destroyArticle,
        errors,
    }
}