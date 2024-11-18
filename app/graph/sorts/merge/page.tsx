import { Barchart } from '@/components/shared/BarGraph'
import { CodeTab } from '@/components/shared/CodeTab'
import { CodeSnippetsAll } from '@/helpers/CodeSnippets'
import { mergeSort } from '@/helpers/sort_funcs'
import React from 'react'

const MergeSort = () => {
  return (
    <div className='max-h-xl pad-4 mt-7 flex w-full flex-col items-center justify-center gap-8'>
    <h1 className='text-center text-5xl  font-bold'>Merge Sort</h1>
    <Barchart sortfunction={mergeSort} />
    <CodeTab codeSnippets={CodeSnippetsAll.MergeSort} />
  </div>
  )
}

export default MergeSort