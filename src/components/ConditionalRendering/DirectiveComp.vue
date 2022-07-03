<template>
    <h1 v-if="message" class="first">Conditionaly Rendering with v-if</h1>
    <h1 v-else class="second">Else Block</h1>
    <br>
    <button @click="message = !message">Toggle Rendering</button>
    <br>
    <h2>OR</h2>
    <br>
    <button @click="message=false">Another Toggle - off</button>
    <button @click="message=true">Another Toggle - On</button>
</template>

<script>
export default {
    name:"DirectComp",
    data(){
        return{
            message: true,
        }
    }
}
</script>

<style scoped>
    @import './DirectiveComp.css'
</style>