<template>
    <h1>This is Second Child Component</h1>
    <h2>How to pass Object, Arrays, Function as Props</h2>
    <h1>{{txt}}</h1>
    <h3>{{data.name}} AND {{data.email}}</h3>
    <button @click="method">Parent Prop On</button>
    <h1>Props from Parent with loop - Child3Comp</h1>
    
</template>

<script>
export default {
    name: "Child2Comp",
    props:{
        txt: String,
        data: Object,
        method: Function,
    }
}
</script>