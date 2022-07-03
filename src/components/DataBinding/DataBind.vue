<template>
    <h1>Two way Data Binding with the help of Modal</h1>
    <h2>{{data}}</h2>
    <input type="text" v-model="data">
    <br>
    <br>
    <br>
    <textarea name="" id="" cols="30" rows="10" v-model="data"></textarea>
    <br>
    <MultipleBind txt="Multiple Data Bindings"/>
    <br>
    <CeckRadioBind />
    <br><br>
    <DropDwonBinding />

</template>

<script>
import MultipleBind from '../DataBinding/MultipleBind.vue'
import CeckRadioBind from '../DataBinding/CheckAndRadioBind.vue'
import DropDwonBinding from '../DataBinding/DropDownBind.vue'
export default {
    name: "DataBind",
    components:{
        MultipleBind,
        CeckRadioBind,
        DropDwonBinding,
    },
    data(){
        return{
            data:"",
        }
    }
}
</script>