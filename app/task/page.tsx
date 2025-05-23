'use client'

import TrashBinSolid from "@/components/icons/trash-bin-solid"
import withAuth from "@/hoc/withAuth"
import { generateUID } from "@/lib/functions"
import { createTask, deleteTask, updateTask } from "@/lib/store/slice/sliceTask"
import { RootState } from "@/lib/store/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

function TaskPage() {
    const tasks = useSelector((state: RootState) => state.sliceTask.data)
    const [taskName, setTaskName] = useState('')

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("tasks : ", tasks)
    }, [tasks])

    const addTask = () => {
        const task = {
            id: generateUID(),
            name: taskName,
            createAt: new Date().toISOString(),
            done: false
        }
        setTaskName("")
        dispatch(createTask(task))
        console.log("add : ", task)
    }

    const updateTaskStatus = (id: string) => {
        console.log("id : ", id)
        dispatch(updateTask({ id: id }))
    }

    const handleDeleteTask = (id: string) => {
        dispatch(deleteTask(id))
    }
    return (
        <div className="max-w-screen-sm mx-auto p-4 ">
            <div className="relative">
                <input onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTask(); // langsung jalankan fungsi login
                    }
                }}
                    value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" id="default-text" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Tambah task" required />
                <button onClick={addTask} type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ">Tambah</button>
            </div>
            <div className="space-y-1 py-2">
                {
                    tasks.length === 0
                    &&
                    <div className="h-80 flex items-end justify-center">
                        <p>tidak ada task.</p>
                    </div>
                }
                {
                    tasks.map((x, y) => {
                        return (
                            <div key={y} className="py-2 px-2  flex space-x-4">
                                <div role="button" onClick={() => updateTaskStatus(x.id)} className="flex-1 cursor-pointer">

                                    <p className={x.done ? 'line-through text-gray-500' : ''}>{x.name}</p>
                                </div>
                                <div onClick={() => handleDeleteTask(x.id)} className="px-2 cursor-pointer">
                                    <TrashBinSolid />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default withAuth(TaskPage)