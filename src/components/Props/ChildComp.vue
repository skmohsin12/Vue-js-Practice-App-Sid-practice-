<template>
    <h1>This is Child Component</h1>
    <h3>{{greetings}}</h3>
</template>

<script>
export default {
    name: "ChildComp",
    props:{
        greetings: String,
        
    }
}
</script>