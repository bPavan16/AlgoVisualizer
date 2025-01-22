import { Barchart } from '@/components/shared/BarGraph'
import { CodeTab } from '@/components/shared/CodeTab'
import { CodeSnippetsAll } from '@/helpers/CodeSnippets'
import { quickSort } from '@/helpers/sort_funcs'
import React from 'react'

const SelectionSort = () => {
  return (
    <div className='max-h-xl pad-4 mt-7 flex w-full flex-col items-center justify-center gap-8'>
    <h1 className='text-center text-5xl  font-bold'>Quick Sort</h1>
    <Barchart sortfunction={quickSort} />
    <CodeTab codeSnippets={CodeSnippetsAll.SelectionSort} />
  </div>
  )
}

export default SelectionSort