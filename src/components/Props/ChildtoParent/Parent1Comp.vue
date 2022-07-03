<template>
<h1>Passing Data from Child to Parent Component</h1>
<h1>This is Parent Component</h1>
<h1>Data From Child Comp: {{name}}</h1>
<Child1Comp :data="getChildData" />
</template>

<script>
import Child1Comp from './Child1Comp.vue'
export default {
    name: "Parent1Comp",
    components: {
        Child1Comp,
    },

    data() {
        return {
            name: "",
        }
    },

    methods: {
        getChildData(abc) {
            // use following for showing an alert
            // alert(abc +" " + "From Child Component")
            this.name = abc

        }
    }
}
</script>
