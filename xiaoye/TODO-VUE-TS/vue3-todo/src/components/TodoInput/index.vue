<template>
  <div >
    <input type="text" v-model="todoValue" @keyup.enter="submit">
  </div>

</template>
<script lang="ts">
import { defineComponent ,ref} from 'vue'
import {useTodo} from '../../hooks'
export default defineComponent({
  name:"todoinput",
  components:{

  },
  setup(){
   let todoValue = ref<string>("4445")
  const {setTodo} = useTodo()
  //类型推导
   const submit = (e:KeyboardEvent): void => {
     setTodo(todoValue.value);
         todoValue.value = ""
   }
   return {
     todoValue,
     submit    
   }

  }
})
</script>

<style>


</style>