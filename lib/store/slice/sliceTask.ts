import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// const initialState: UserState = {
//     data: []
// };
interface TaskState {
    data: Task[];
}
interface Task {
    id: string;
    name: string;
    createAt: string;
    done: boolean;
}
const initialState: TaskState = {
    data: []
};

const sliceTask = createSlice({
    name: 'sliceTask',
    initialState,
    reducers: {
        createTask(state, action) {
            state.data.push(action.payload)
        },
        updateTask(state, action) {
            state.data = state.data.map(task =>
                task.id === action.payload.id
                    ? { ...task, done: !task.done }
                    : task
            )
        },
        deleteTask(state, action) {
            state.data = state.data.filter(item => item.id !== action.payload);
        },
        clearTask(state) {
            state.data = []
        }
    }
})

export const { createTask, updateTask, deleteTask,clearTask } = sliceTask.actions
export default sliceTask.reducer 