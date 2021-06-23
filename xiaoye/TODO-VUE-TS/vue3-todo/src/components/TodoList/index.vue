<template>
  <div >
      Todolist
     <todo-item/>
  </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue'
import TodoItem from './item.vue'
export default defineComponent({
  name:"todolist",
  components:{
    TodoItem,
  }
})
</script>

<style>


</style>
