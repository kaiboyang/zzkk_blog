<template>
<div>
    <a-affix>
        <a-menu v-model="current" mode="horizontal" theme="light">
            <a-menu-item key="main" @click="blogCenter()">
                <a-icon type="home" />首页
            </a-menu-item>
            <a-menu-item key="list" @click="blogList()">
                <a-icon type="unordered-list" />博客列表
            </a-menu-item>
            <a-menu-item key="image" @click="photo()" disabled>
                <a-icon type="file-image" />云相册
            </a-menu-item>

            <a-menu-item key="talk" @click="demo()" disabled>
                <a-icon type="cloud-sync" />Demo
            </a-menu-item>
            <a-menu-item key="board" @click="board()">
                <a-icon type="book" />留言板
            </a-menu-item>
            <a-menu-item key="edit" @click="writeBlog()">
                <a-icon type="edit" />写博客
            </a-menu-item>
            <a-menu-item key="github" @click="GitHub()">
                <a-icon type="github" />GitHub
            </a-menu-item>
            <a-input-search placeholder="搜索博客" class="head-search" @search="onSearch" />
            <a-menu-item key="null"></a-menu-item>
            <a-menu-item key="0"></a-menu-item>
            <a-sub-menu class="user" v-if="token!=null">

                <span slot="title" class="submenu-title-wrapper">
                    <a-avatar style="backgroundColor:#87d068">zzkk</a-avatar>
                </span>
                <a-menu-item key="setting:2">
                    个人中心
                </a-menu-item>
                <a-menu-item key="setting:1" @click="showModel()">
                    修改密码
                </a-menu-item>
                <a-menu-item key="setting:3" @click="logout()">
                    退出登录
                </a-menu-item>
            </a-sub-menu>
            <a-menu-item key="user" class="user" @click="showModel()" v-else>
                <a-menu-item key="mail">
                    <a-icon type="user" />登录
                </a-menu-item>
            </a-menu-item>
            <!--
            <a-menu-item key="user" class="user" @click="showModel()" v-if="token==null">
                <a-menu-item key="mail">
                    <a-icon type="user" />登录
                </a-menu-item>
            </a-menu-item>
            <a-menu-item key="user" class="user" @click="showModel()" v-else>
                <a-menu-item key="mail">
                    <a-icon type="user" />修改密码
                </a-menu-item>
            </a-menu-item>
            -->
        </a-menu>
    </a-affix>
    <login ref="login"></login>
</div>
</template>

<style scoped>
.user {
    float: right;
}

.head-search {
    width: 300px;
    margin-left: 50px;
}
</style>

<script>
import Login from "../components/dist/Login"; //页面路径
export default {
    components: {
        Login
    },
    inject: ['reload'],
    data() {
        return {
            hideView: false,
            current: ["mail"],
            token: window.sessionStorage.getItem("token")
        };
    },
    methods: {
        logout() {
            window.sessionStorage.clear();
            this.reload();
        },
        onSearch(value) {
            console.log(value);
        },
        blogCenter() {
            if (this.$route.path != "/main") {
                this.$router.push("/main");
            }
        },
        blogList() {
            if (this.$route.path != "/list") {
                this.$router.push("/list");
            }
        },
        photo() {
            if (this.$route.path != "/photo") {
                this.$router.push("/photo");
            }
        },
        writeBlog() {
            if (this.token != null) {
                let routeData = this.$router.resolve({
                    path: "/writeBlog",
                    query: {
                        id: 1
                    }
                });
                window.open(routeData.href, '_blank');
            } else {
                this.$message.error('请先登录');
            }

        },
        demo() {
            if (this.$route.path != "/demo") {
                this.$router.push("/demo");
            }
        },
        GitHub() {
            window.open("https://github.com/kaiboyang");
        },
        board() {
            if (this.token != null) {
                if (this.$route.path != "/board") {
                    this.$router.push("/board");
                }
            } else {
                this.$message.error("请先登录")
            }

        },
        showModel() {
            console.log(this.$refs.login)
            this.$refs.login.showModal();
        }
    }
};
</script>
