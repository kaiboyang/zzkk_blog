<template>
<div>
    <!-- 头部 -->
    <Row style="margin-top:0.8%;margin-bottom:0.8%">
        <i-col span="8" offset="1">
            <i-input v-model="title" placeholder="请输入文章标题..." style="width: 100%;"></i-input>
        </i-col>
        <i-col span="12" offset="1">
            <i-button type="primary" @click="showModal()">发布文章</i-button>
        </i-col>
    </Row>
    <!-- 模态框 -->
    <div style="">
        <a-modal title="请选择文章类型" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="handleCancel">
            <tag @tags="getTags"></tag>
        </a-modal>
    </div>

    <!-- markdown编辑器 -->
    <mavon-editor v-model="content" ref="md" @change="change" style="min-height: 45vw;position:static" />
</div>
</template>

<script>
import axios from 'axios'
// 导入组件 及 组件样式
import {
    mavonEditor
} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import tag from '../out/Tag'

export default {
    components: {
        tag,
        mavonEditor
    },
    // content:输入的markdown
    // html：及时转的html
    data() {
        return {
            tagName: '',
            title: '',
            content: '',
            html: '',
            tags: [],
            visible: false,
            confirmLoading: false,
        }
    },
    methods: {
        getTags(tags) {
            this.tags = tags
        },
        // 所有操作都会被解析重新渲染
        change(value, render) {
            // render 为 markdown 解析后的结果[html]
            this.html = render
        },
        // 提交
        submit() {
            console.log(this.content)
            console.log(this.html)
        },
        showModal() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(this.content)
            if (this.content != '') {
                axios({
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    url: '/user/addblog',
                    method: 'post',
                    data: {
                        title: this.title,
                        description: this.content.substr(0, 40),
                        bcontent: this.content,
                        taglist: this.tags,
                        token: window.sessionStorage.getItem("token")
                    }
                }).then(res => {
                    if (res.data.data.bid) {
                        console.log("发表博客成功", res.data.data.bid)
                        this.$message.success('发布成功');
                        this.$router.push(`/UserBlog/${res.data.data.bid}`);
                        this.confirmLoading = true;
                        setTimeout(() => {
                            this.visible = false;
                            this.confirmLoading = false;
                        }, 1000);
                    } else {
                        this.$message.error('请加标签');
                    }

                })

            } else {
                this.$message.error("内容不能为空")
            }

        },
        handleCancel(e) {
            console.log('Clicked cancel button');
            this.visible = false;
        },
    },
    mounted() {

    }
}
</script>
