<template>
<h1>Passing Props - Text, Array, Object, Functions</h1>
<h2>This is Parent Component</h2>
<ChildComp greetings="Good Morning :)" />
<Child2Comp :txt="person" :data="user" :method="getData" :obj="newUsers" />
<ul>
    <li v-for="(elem, index) in newUsers" :key="index">
        <Child3Comp :usr="elem" />
    </li>
</ul>
</template>

<script>
import ChildComp from './ChildComp.vue'
import Child2Comp from './Child2Comp.vue'
import Child3Comp from './Child3Comp.vue'
export default {
    name: "ParentComp",
    components: {
        ChildComp,
        Child2Comp,
        Child3Comp,
    },

    data() {
        return {
            person: "John Carter",
            user: {
                name: "Harry Portre",
                email: "harry.porter@test.com",
            },
            newUsers: [{
                    name: "John",
                    email: "john.test@gmail.com"
                },
                {
                    name: "Carter",
                    email: "carter.test@gmail.com"
                },
                {
                    name: "Harry",
                    email: "harry.test@gmail.com"
                },

            ]
        }
    },
    methods: {
        getData() {
            return alert("Mehod is Called from Parent :)")
        }
    }
}
</script>
