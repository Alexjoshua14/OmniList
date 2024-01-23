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
      className="w-full h-full min-h-20 px-4 flex items-center bg-secondary/90 backdrop-blur-xl shadow-xl rounded"
    >
      <div className='w-[10%]'>
        <TodoItemCheck id='' />
      </div>
      <div className="flex-1 w-full h-full flex items-center">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(createTodo)} className='w-full'>
            <FormField
              control={form.control}
              name='text'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="text-lg border-0 focus-visible:ring-0 shadow-none"
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