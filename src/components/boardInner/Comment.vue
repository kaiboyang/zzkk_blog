<template>
<div style="width:80%;margin:auto;margin-top:20px">
    <Card style="">
        <a-list class="comment-list" :header="`${data.length} 条留言`" item-layout="horizontal" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-comment :author="item.uname" :avatar="item.uimage">
                    <p slot="content">
                        {{ item.mcontent }}
                    </p>
                    <a-tooltip slot="datetime" :title="item.time">
                        <span>Time</span>
                    </a-tooltip>
                </a-comment>
            </a-list-item>
        </a-list>
    </Card>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            data: [],

        };
    },
    methods: {
        searchComment() {
            axios({
                url: '/message/getMessage',
                method: 'get',
            }).then(res => {
                this.data = res.data
                console.log(res.data)
            })
        }
    },
    mounted() {
        var that = this;
        window['test'] = (event, name) => {
            that.searchComment(event, name)
        }
    },
    created: function () {
        this.searchComment()
    }
};
</script>
