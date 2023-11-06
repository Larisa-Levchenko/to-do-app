<template>
    <div class="todo">
        <div class="todo__unchecked">
            <div class="todo__empty" v-if="emptyUncheckedToDoItem">
                <p class="todo__help">
                    Нет задач
                </p>
            </div>
            <ul v-else>
                <ToDoItem v-for="toDo in uncheckedToDoItem" :item="toDo" :key="toDo.id" />
            </ul>
        </div>
        <div class="todo__checked">
            <div class="todo__empty" v-if="emptyCheckedToDoItem">
                <p class="todo__help">
                    Нет выполненных задач
                </p>
            </div>
            <ul v-else>
                <ToDoItem v-for="toDo in checkedToDoItem" :item="toDo" :key="toDo.id" />
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'pinia'
import { useToDoStore } from '../app/store'
import ToDoItem from './ToDoItem.vue';
import { ITodo } from '@/app/dto/todo';

export default defineComponent({
    name: 'ToDo',
    components: {
        ToDoItem
    },
    computed: {
        ...mapState(useToDoStore, {
            toDoList: 'toDoList',
        }),
        uncheckedToDoItem(): Array<ITodo> {
            return this.toDoList.filter((toDo: ITodo) => !toDo.checked);
        },
        checkedToDoItem(): Array<ITodo> {
            return this.toDoList.filter((toDo) => toDo.checked);
        },
        emptyUncheckedToDoItem(): boolean {
            return this.uncheckedToDoItem.length === 0
        },
        emptyCheckedToDoItem(): boolean {
            return this.checkedToDoItem.length === 0
        }

    }
});
</script>