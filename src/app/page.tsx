import Image from 'next/image'
import TodoItem from '../components/todo/todoItem/TodoItem'
import TodoList from '../components/todo/TodoList'
import TodoListFooter from '../components/todo/todoListFooter/TodoListFooter'
import NewTodo from '@/components/todo/NewTodo'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-primary text-primary">
      <div className="z-0 absolute top-0 left-0 w-full h-full">
        <div className="relative w-full h-80 opacity-60 overflow-clip" style={{ background: 'hsl(var(--background-accent))' }}>
          <div>
            <div className="absolute w-80 h-80 -top-4 left-20 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-1)) 0%, transparent 60%)' }} />
            <div className="absolute w-[600px] h-96 bottom-0 right-0 rotate-12 rounded-full blur opacity-70 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
            <div className="absolute w-[600px] h-[200px] bottom-0 left-0 rotate-3 rounded-full blur opacity-40 mix-blend-multiply" style={{ background: 'radial-gradient(hsl(var(--background-accent-2)) 0%, transparent 60%)' }} />
          </div>
        </div>
      </div>
      <div className="z-10 max-w-xl w-full flex flex-col items-center gap-14">
        {/* Header row */}
        <Header />

        <div className="w-full flex flex-col gap-8 rounded overflow-clip">
          {/* Create a new todo */}
          <NewTodo />

          {/* Todos */}
          <TodoList />
        </div>

      </div>
    </main >
  )
}
