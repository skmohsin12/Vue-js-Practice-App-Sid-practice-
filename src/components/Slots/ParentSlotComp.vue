<template>
    <h1>Slot Example - Parent Component</h1>
    <ChildSlot><h1>Shaikh Muneer</h1></ChildSlot>
    <ChildSlot><h2>Shaikh Mohsin</h2></ChildSlot>
    <ChildSlot><h3>Shaikh Muddasir</h3></ChildSlot>
    <ChildSlot><img src="Img.jpg" alt="" id="img"></ChildSlot>

    <h1>Default Slot Value Example</h1>
    <Child2Comp></Child2Comp>
    <Child2Comp><h2>After Default Passing in Slot</h2></Child2Comp>
    <h1>Named Slot Example</h1>
    <NamedSlot>
        <template v-slot:header>
        <h3>Identity Card</h3>
        </template>
        <template v-slot:main>
        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, temporibus.</p> -->
        </template>
        <template v-slot:footer>
        <button >Buy Now</button>
        </template>
    </NamedSlot>
    <NamedSlot>
        <template v-slot:header>
        <h3>Identity Card-2</h3>
        </template>
        <template v-slot:main>
        <p>Lorem ipsum dolor sit amet :) </p>
        </template>
        <template v-slot:footer>
            <!-- if you comment out something then you will get the Default data. Comment and See  -->
        <!-- <button >Buy Now</button> -->
        </template>
    </NamedSlot>
</template>

<script>
import ChildSlot from './ChildSlotComp.vue'
import Child2Comp from './Child2Comp.vue'
import NamedSlot from './NamedSlots.vue'
export default {
    name: "ParentSlot",

    components:{
        ChildSlot,
        Child2Comp,
        NamedSlot,
    }
}
</script>

<style scoped>
  #img{
      height: 200px;
      width: 200px;
  }
</style>