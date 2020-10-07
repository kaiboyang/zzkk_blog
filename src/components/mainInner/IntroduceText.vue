<style>

</style>
<template>
<div>
    <mavon-editor style="position:static" class="blogPage" :subfield="false" :defaultOpen="'preview'" :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true" value="::: hljs-center

## 军民融合协同创新中心 

:::

1. 军民融合协同创新中心由中北大学大数据学院与山西百信信息技术有限公司联合共建，全部采用百信基于国产龙芯处理器的安全可靠计算机，可搭载国产操作系统、数据库、中间及软件开发平台，是山西省乃至全国在计算机系统领域内建设最早具有自主可控鲜明特色的创新示范中心之一。 
2. 军民融合协同创新中心的总体建设目标是服务国家军民融合发展战略，培养优秀人才，推进国产自主可控安全可靠计算机软硬件系统的研究。开发与应用，提升我国网络安全与信息化自主创新发展能力和促进军民融合深度发展，最终形成网络安全人才培养、技术创新、产业发展的良性循环。
3. 军民融合协同创新中心具备自主可控计算机系统人才培养、应用研发、测试等功能。创新中心不仅承担着培养符合国家自主安全战略的网信事业专门人才，推进国产自主可控安全可靠计算机软硬件系统的研究、开发与应用,特别是军工领域的应用示范，更是担负加快推进国产自主可控替代计划，构建安全可控的信息技术体系,实现产学研的有机结合和国防科技成果的有效转换，进而推动我国网络强国的建设。 " />
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
            value: ""
        }
    },

}
</script>
