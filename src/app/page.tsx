
import TodoList from '../components/todo/TodoList'

import NewTodo from '@/components/todo/NewTodo'
import Header from '@/components/Header'
import Draggable from '@/components/draggable/Draggable'
import TopBackground from '@/components/background/TopBackground'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-12 sm:p-24 bg-primary text-primary">
      <div className="z-0 absolute top-0 left-0 w-full h-80">
        <TopBackground />
      </div>
      <div className="z-10 max-w-xl w-full flex flex-col items-center gap-14">
        {/* Header row */}
        <Header />

        <div className="w-full flex flex-col gap-8 rounded">
          {/* Create a new todo */}
          <NewTodo />

          {/* Todos */}
          <TodoList />
        </div>
      </div>
    </main >
  )
}
