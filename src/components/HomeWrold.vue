<template>
<h1>Home Component Change</h1>
<p>{{msg}}</p>
<h1>{{20+10}}</h1>
<h1>{{"Hi".length}}</h1>
<h1>Email: {{email}}</h1>
<h1>City: {{city}}</h1>
<h1>Mob No: {{mob}} </h1>
<h1>Name: {{getName("Shaikh Muneer").abc}}</h1>
<h1>Email2: {{getEmail().email}} ---> use of this keyword</h1>
<h1>Cont2: {{getEmail().cont}}</h1>
</template>

<script>
export default {
    name: 'HomeWorld',
    props: {
        msg: String
    },
    data() {
        return {
            email: "mr.skmohsin999@gmail.com",
            city: "Nanded",
            mob: 923,
            getName(abc) {
                return {abc}
            }
        }
    },
    methods:{
        getEmail(){
            return{
                email: this.email,
                cont: 988188923,
            }
        }
    }
}
</script>

<style scoped>
h1 {
    color: black;
    cursor: pointer;
}
</style>
