<template>
<h1>Second Example</h1>
<button @click="say('HELLO WORLD')">Show Alert</button>
<button @dblclick="getAlert('HELLO WORLD')">Show Alert2</button>
<button @mousemove="getConsole()">Mouse Move Example</button>
</template>

<script>
export default {
    name: 'SecondSee',
    data() {
        return {
            say(messg) {
                alert(messg)
            }
        }
    },
    methods:{
        getAlert:(alrt) =>{
            return alert(alrt);
        },
        getConsole(){
            console.log("Mouse Moved")
        }
    }
}
</script>
