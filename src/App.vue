<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Props Concept" />
  <HomeWorld msg="Props passed" />
  <SecondSee />
  <FirstCounter />
  <DataBind />
  <DirectComp />
  <VforWithArray />
  <ParentComp />
  <HTMLBinding />
  <ClassBinding />
  <Parent1Comp />
  <UseofRefs />
  <FormComp />
  <FetchingData />
  <FetchMethod />
  <WatcherExa />
  <ParentSlot />
  <HomeComp />
  <h1>Routing Concept</h1>
  
  <router-link to="/"><button> Home Page</button> </router-link>
  <router-link to="/LoginComp"><button> Log_in Page</button> </router-link>
  <router-link to="/ProfileComp"><button> Profile Page</button> </router-link>
  <router-link to="/abc"><button> Page_Not_Found_404</button> </router-link>
  <router-view />
  <BootComp />
  <PostForm />
</template>
n
<script>
import HelloWorld from "./components/HelloWorld.vue";
import HomeWorldVue from "./components/HomeWrold.vue";
import SecondSee from "./components/SecondSee.vue";
import FirstCounter from "./components/Counter/FirstCounter.vue";
import DataBind from "./components/DataBinding/DataBind.vue";
import DirectComp from "./components/ConditionalRendering/DirectiveComp.vue";
import VforWithArray from "./components/V-ForListRendering/VForWithArray.vue";
import ParentComp from "./components/Props/ParentComp.vue";
import HTMLBinding from "./components/HTMLBinding/HTMLBinding.vue";
import ClassBinding from "./components/CSSClassBinding/ClassBinding.vue";
import Parent1Comp from "./components/Props/ChildtoParent/Parent1Comp.vue";
import UseofRefs from "./components/UseOfRefs/ShowingRefs.vue";
import FormComp from "./components/FormsBasicsValidationETC/FormComponent.vue";
import FetchingData from "./components/FetchingData/FetchingData.vue";
import FetchMethod from "./components/FetchingData/FetchMethod.vue";
import WatcherExa from "./components/Watchers/WatcherExa.vue";
import ParentSlot from "./components/Slots/ParentSlotComp.vue";
import HomeComp from './components/DynamicComponents/HomeComp.vue'
import BootComp from './components/BootStrapComp/BootStrap.vue'
import PostForm from './components/APIReauests/PostForm.vue'

export default {
  name: "App",
  components: {
    HelloWorld,
    HomeWorld: HomeWorldVue,
    SecondSee,
    FirstCounter,
    DataBind,
    DirectComp,
    VforWithArray,
    ParentComp,
    HTMLBinding,
    ClassBinding,
    Parent1Comp,
    UseofRefs,
    FormComp,
    FetchingData,
    FetchMethod,
    WatcherExa,
    ParentSlot,
    HomeComp,
    BootComp,
    PostForm,
  },
};
</script>

<style></style>
