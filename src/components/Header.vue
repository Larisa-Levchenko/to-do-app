<template>
    <header class="header">
        <form class="todo-control" @submit.prevent="formSubmit">
            <label><input class="header-input" type="text" placeholder="Добавить задачу" v-model="item"></label>
            <button class="header-button"></button>
        </form>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToDoStore } from '../app/store'
import { ITodo } from "../app/dto/todo";

export default defineComponent({
  name: 'Header',
  setup() {
    const toDoStore = useToDoStore()

    return { toDoStore }
  },
  data() {
    return {
      item: null,
      counter: 1 
    }
  },
  methods: {
    formSubmit() {
      if (!this.item) {
        return
      }
      const toDoItem: ITodo = {
       id: this.counter, 
       text: String(this.item),
       checked: false

      }
      this.toDoStore.addToDo(toDoItem)
      this.counter++
      this.item=null
    }
  }
});
</script>