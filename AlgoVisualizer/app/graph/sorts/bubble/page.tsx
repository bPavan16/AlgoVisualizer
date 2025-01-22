import { Barchart } from '@/components/shared/BarGraph'
import { CodeTab } from '@/components/shared/CodeTab'
import { bubbleSort } from '@/helpers/sort_funcs'
import { CodeSnippetsAll } from '@/helpers/CodeSnippets'

import React from 'react'

const BubbleSort = () => {
  return (
    <div className='max-h-xl pad-4 mt-7 flex w-full flex-col items-center justify-center gap-8'>
      <h1 className='text-center text-5xl font-bold'>Bubble Sort</h1>
      <Barchart sortfunction={bubbleSort} />
      <CodeTab codeSnippets={CodeSnippetsAll.BubbleSort} />
    </div>
  )
}

export default BubbleSort