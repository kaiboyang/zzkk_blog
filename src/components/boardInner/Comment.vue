<template>
<div style="width:80%;margin:auto;margin-top:20px">
    <Card style="">
        <a-list class="comment-list" :header="`${data.length} 条留言`" item-layout="horizontal" :data-source="data">
            <a-list-item slot="renderItem" slot-scope="item">
                <a-comment :author="item.author" :avatar="item.avatar">

                    <p slot="content">
                        {{ item.content }}
                    </p>
                    <a-tooltip slot="datetime" :title="item.datetime">
                        <span>Time</span>
                    </a-tooltip>
                </a-comment>
            </a-list-item>
        </a-list>
    </Card>
</div>
</template>

<script>
export default {
    data() {
        return {
            data: [{
                    author: '杨凯博',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: '界面有待优化',
                    datetime: "2020-10-04 21:41:16",
                },
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: "2020-10-04 21:41:16",
                }, {
                    author: '杨凯博',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: '界面有待优化',
                    datetime: "2020-10-04 21:41:16",
                },
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: "2020-10-04 21:41:16",
                }, {
                    author: '杨凯博',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: '界面有待优化',
                    datetime: "2020-10-04 21:41:16",
                },
                {
                    author: 'Han Solo',
                    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
                    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                    datetime: "2020-10-04 21:41:16",
                },
            ],

        };
    },
};
</script>
