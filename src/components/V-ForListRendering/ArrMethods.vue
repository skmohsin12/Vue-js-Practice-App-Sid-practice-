<template>
<h1>How to use Array Methods Example</h1>
<h1>{{getSorted()}}</h1>
<h1>{{getSum()}}</h1>
</template>

<script>
export default {
    name: "ArrMethods",

    data() {
        return {
            arr: [1, 2, 3, 4, 5],
            arr2: [6, 7, 8, 9],
        }
    },
    methods:{
        getSorted(){
            return this.arr.sort((a, b)=> a>b ? -1 : 1)
        },

        getSum(){
            return this.arr2.reduce((acc, cur)=> acc + cur)
        }
    }
}
</script>
