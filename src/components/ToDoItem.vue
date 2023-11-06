<template>
    <li class="todo-item">
        <span class="text-item__text">{{ item.text }}</span>
        <div class="todo-item__buttons">
            <button class="todo-item__button todo-item__button_remove " @click="remove(item.id)"/>
            <button class="todo-item__button" :class="[{ 'todo-item__button_completed': item.checked }, { 'todo-item__button_complete': !item.checked }]" 
            @click="toggleComplete(item.id)"/>
        </div>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useToDoStore } from '../app/store'
import { ITodo } from "../app/dto/todo";

export default defineComponent({
    name: 'ToDoItem',
    setup() {
    const toDoStore = useToDoStore()

    return { toDoStore }
   },
    props: {
        item: {
            type: Object as () => ITodo
        },
    },
    methods: {
        remove(id:number) {
            this.toDoStore.removeToDoById(id)
        },
        toggleComplete (id:number) {
            this.toDoStore.toggleCompleteToDoById(id)
        }
    }
});
</script>