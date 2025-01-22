import { Barchart } from '@/components/shared/BarGraph'
import { CodeTab } from '@/components/shared/CodeTab'
import { CodeSnippetsAll } from '@/helpers/CodeSnippets'
import { heapSort } from '@/helpers/sort_funcs'
import React from 'react'

const HeapSort = () => {
  return (
    <div className='max-h-xl pad-4 mt-7 flex w-full flex-col items-center justify-center gap-8'>
    <h1 className='text-center text-5xl  font-bold'>Heap Sort</h1>
    <Barchart sortfunction={heapSort} />
    <CodeTab codeSnippets={CodeSnippetsAll.BubbleSort} />
  </div>
  )
}

export default HeapSort