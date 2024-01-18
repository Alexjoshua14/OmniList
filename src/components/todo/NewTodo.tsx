'use client'

import { FC, useState } from 'react'
import TodoItemCheck from './todoItem/TodoItemCheck'
import { Input } from '../ui/input'
import { useAppDispatch } from '@/redux/hooks'
import { addTodo } from '@/redux/slices/todoSlice'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem } from '../ui/form'

const todoSchema = z.object({
  text: z.string().nonempty(),
})

interface NewTodoProps {

}

const NewTodo: FC<NewTodoProps> = ({ }) => {
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof todoSchema>>({
    resolver: zodResolver(todoSchema),
    defaultValues: {
      text: '',
    }
  })

  const createTodo = (data: z.infer<typeof todoSchema>) => {
    dispatch(addTodo(data.text))
    form.reset()
  }

  return (
    <div
      className="w-full h-full min-h-20 grid grid-cols-[1fr_9fr] bg-slate-800 shadow-lg"
    >
      <TodoItemCheck id='' />
      <div className="w-full h-full flex items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(createTodo)}>
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="border-0 focus-visible:ring-0"
                      placeholder='Create a new todo...'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>

      </div>
    </div>
  )
}

export default NewTodo