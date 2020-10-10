<style>
.blogPage {
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;

}
</style>
<template>
<div>
    <mavon-editor style="position:static" class="blogPage" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" v-model="value" />
</div>
</template>

<script>
import axios from 'axios'
import {
    mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
    components: {
        mavonEditor
    },
    data() {
        return {
            value: '',
            blogId: this.$route.params.id,
        }
    },
    methods: {
        getTheBlog() {
            axios({
                url: '/blog/openBlog',
                method: 'get',
                params: {
                    bid: this.blogId
                }
            }).then(res => {
                this.value = res.data[0].bcontent
                console.log(res.data[0].bcontent)
            })
        }
    },
    created: function () {
        this.getTheBlog()
    }
}
</script>
