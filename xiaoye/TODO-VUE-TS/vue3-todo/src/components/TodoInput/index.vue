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
     console.log(e)
     setTodo(todoValue.value);
         todoValue.value = ""
    //  if(e.key===13&& todoValue.value.trim().length){
          
    //  }
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