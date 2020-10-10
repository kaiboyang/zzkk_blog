<template>
<div>
    <div style=" margin-left:10%;;margin-top:20px">
        <a-card title="个人信息" :bordered="false" style="width: 90%">
            <a style="float:right" @click="() => (modal2Visible = true)">修改信息</a>
            <p> ID：{{userinfo.uid}}</p>
            <p>昵称：{{userinfo.uname}}</p>
            <p>姓名：{{userinfo.name}}</p>
            <p>性别：{{userinfo.sex}}</p>
            <p>学校：{{userinfo.school}}</p>
            <p>专业：{{userinfo.academy}}</p>
        </a-card>
    </div>
    <a-modal v-model="modal2Visible" title="个人信息" centered @ok="ok">
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">ID</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.uid" disabled />
            </a-col>
        </a-row>
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">昵称</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.uname" />
            </a-col>
        </a-row>
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">姓名</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.name" />
            </a-col>
        </a-row>
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">性别</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.sex" />
            </a-col>
        </a-row>
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">学校</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.school" />
            </a-col>
        </a-row>
        <a-row type="flex" class="textrea">
            <a-col :flex="1" class="textCenter">专业</a-col>
            <a-col :flex="9">
                <a-input placeholder="Basic usage" v-model="userinfo.academy" />
            </a-col>
        </a-row>
    </a-modal>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            userinfo: {},
            modal2Visible: false,
        }
    },
    methods: {
        ok() {
            this.modal2Visible = false
            axios({
                url: '/user/updateMessage',
                method: 'post',
                data: {
                    uid: this.userinfo.uid,
                    uname: this.userinfo.uname,
                    name: this.userinfo.name,
                    sex: this.userinfo.sex,
                    school: this.userinfo.school,
                    academy: this.userinfo.academy,
                }
            }).then(res => {
                console.log("更新数据", res)
            })
        },
        getUserInfo() {
            axios({
                url: '/user/getUserMessage',
                method: 'get',
                params: {
                    uid: window.sessionStorage.getItem("uid")
                }
            }).then(res => {
                console.log("获取用户信息", res.data)
                this.userinfo = res.data
            })
        }
    },
    created: function () {
        console.log("created")
        this.getUserInfo()
    }
}
</script>

<style>
.textCenter {
    margin-top: 4px
}

.textrea {
    margin-top: 5px;
}
</style>
