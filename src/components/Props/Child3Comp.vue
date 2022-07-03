<template>
    <!-- <h1>Props from Parent with loop - in Child3</h1> -->
    <h3>{{usr.name}} AND {{usr.email}}</h3>
    <button @click="getUserName">Alert User Nme</button>
</template>

<script>
export default {
    name: "Child3Comp",
    props:{
        usr: Object,
    },
    methods:{
        getUserName(){
            return alert(this.usr.name)
        }
    }
}
</script>