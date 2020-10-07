<template>
<div style="width:90%;margin-left:5%;">
    <a-comment>
        <div slot="content">
            <a-form-item>
                <a-textarea :rows="2" :value="value" @change="handleChange" placeholder="评论内容..." />
            </a-form-item>
            <a-form-item>
                <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
                    Add Comment
                </a-button>
            </a-form-item>
        </div>
    </a-comment>
</div>
</template>

<script>
import moment from 'moment';
export default {
    data() {
        return {
            submitting: false,
            value: '',
        };
    },
    methods: {
        handleSubmit() {
            if (this.value != '') {
                console.log(this.value)
                this.submitting = true;

                setTimeout(() => {
                    this.submitting = false;
                    this.value = '';
                }, 1000);
            }
        },
        handleChange(e) {
            this.value = e.target.value;
        },
    },
};
</script>
