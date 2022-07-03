<template>
    <h1>Dynamic Component Example or Excersise</h1>
    <h3> Alternate way of Routing</h3>
    <h1>This is Home Component</h1>
    <button @click="tab='JavaComp'">Load Java</button>
    <button @click="tab='PhpComp'">Load Php</button>
    <button @click="tab='NodeComp'">Load Node</button>
    <component :is="tab" />
    <!-- <PhpComp />
    <NodeComp />
    <JavaComp /> -->
</template>

<script>
import PhpComp from './CompContainer/PhpComp.vue'
import NodeComp from './CompContainer/NodeComp.vue'
import JavaComp from './CompContainer/JavaComp.vue'
export default {
    name:"HomeComp",

    components:{
        PhpComp,
        NodeComp,
        JavaComp,
    },
    data(){
        return{
            tab: "JavaComp"
        }
    }
}
</script>

<style scoped>
 button{
     padding: 5px;
     margin: 5px;
 }
</style>