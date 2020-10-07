<template>
<div style="margin-top:20px">

    <i-col span="12" offset="1">
        <Card style="">
            <p slot="title" style="margin:0">
                <Icon type="ios-list-box-outline" />
                博客列表
            </p>
            <List item-layout="vertical">
                <ListItem v-for="item in mainBlogItem" :key="item.id">
                    <a @click="inBlog(item.id)">
                        <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
                    </a>
                    <template slot="action">
                        <li>
                            <Icon type="ios-star-outline" /> 123
                        </li>
                        <li>
                            <Icon type="ios-thumbs-up-outline" /> 234
                        </li>
                        <li>
                            <Icon type="ios-chatbubbles-outline" /> 345
                        </li>
                    </template>
                    <Tag class="tag" @click.native="getlableInfo(item)" :color="bgColor[index]" v-for="(item,index) in item.tag" :key="index">{{item}}</Tag>

                </ListItem>
            </List>
        </Card>
    </i-col>

    <i-col span="8" offset="1">
        <row>

            <Card style="">
                <p slot="title" style="margin:0">
                    <a-icon type="tag" />
                    分类
                </p>
                <Tag class="tag" @click.native="getBlogList()" color="magenta">显示全部</Tag>
                <Tag class="tag" @click.native="getlableInfo(item.tag)" :color="bgColor[index]" v-for="(item,index) in tag" :key="index">{{item.tag}}</Tag>
            </Card>
        </row>
        <row>
            <a-affix :offset-top="30">
                <Card style="margin-top:20px">
                    <p slot="title" style="margin:0">
                        <a-icon type="bars" />
                        推荐
                    </p>
                    <template>

                        <i-table :show-footer="false" :show-header="false" :columns="columns3" :data="data1" @on-row-click="commend"></i-table>

                    </template>
                </Card>
            </a-affix>
        </row>
    </i-col>

</div>
</template>

<script>
import axios from 'axios'
export default {
    inject: ['reload'],
    data() {
        return {
            top: 10,
            bottom: 10,
            mainBlogItem: [],
            tag: [],
            bgColor: [
                "magenta",
                "blue",
                "red",
                "cyan",
                "volcano",
                "yellow",
                "magenta",
                "blue",
                "red",
                "cyan",
                "volcano",
                "yellow"
            ],
            columns3: [{
                    type: 'index',
                    width: 25,
                    align: 'center'
                },
                {
                    title: '文章名',
                    key: 'title'
                }
            ],
            data1: []
        }
    },
    methods: {
        commend(e) {
            this.inBlog(e.id)
        },
        // 点击标签触发事件
        getlableInfo(item) {
            console.log(item)
            axios({
                url: '/blog/tagId',
                params: {
                    item: item
                }
            }).then(res => {
                this.$message.success('请求成功');
                console.log("请求tagId", res.data)
                this.mainBlogItem = res.data
            })
        },
        // 获取博客列表
        getBlogList() {
            console.log("getBlogList调用了")
            axios({
                url: '/blog/list',
                method: 'post'
            }).then(res => {
                console.log("请求blogItem", res)
                this.mainBlogItem = res.data
            })
        },
        // 获取Tag
        getTag() {
            console.log("getTag调用了")
            axios({
                url: '/blog/tag',
                method: 'post'
            }).then(res => {
                console.log("请求tag", res.data)
                this.tag = res.data
            })
        },
        // 获取推荐
        getRecommend() {
            console.log("getRecommend调用了")
            axios({
                url: '/blog/recommend',
                method: 'get'
            }).then(res => {
                console.log("getRecommend调用了", res.data)
                this.data1 = res.data
            })
        },
        // 进入某篇博客
        inBlog(id) {
            console.log("进入le某博客" + id)
            this.$router.push(`/UserBlog/${id}`);
        }
    },

    created: function () {
        this.getBlogList()
        this.getTag()
        this.getRecommend()
    },
}
</script>

<style scoped>
.tag {
    white-space: pre-wrap;
    margin: 0.4rem;
    cursor: pointer;
}
</style>
