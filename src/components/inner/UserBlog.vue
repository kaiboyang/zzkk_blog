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
}
</script>
