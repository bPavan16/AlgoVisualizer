'use client'
import React, { useState } from 'react'
import { SudokuVisualizer } from '@/components/shared/Sudoku'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { CodeBlock } from '@/components/shared/CodeBlock'

const SudokuPage = () => {
  const [activeTab, setActiveTab] = useState("visualizer")

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      <div className="mb-10 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent lg:text-5xl">
          Sudoku Solver Visualizer
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-slate-600">
          Watch the backtracking algorithm solve Sudoku puzzles in real-time. Visualize how the algorithm explores possibilities and backtracks when it hits a dead end.
        </p>
      </div>

      <Tabs defaultValue="visualizer" value={activeTab} onValueChange={setActiveTab} className="mb-10">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="visualizer">Interactive Visualizer</TabsTrigger>
          <TabsTrigger value="algorithm">Algorithm Explanation</TabsTrigger>
          <TabsTrigger value="guide">User Guide</TabsTrigger>
        </TabsList>
        
        <TabsContent value="visualizer" className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-4 shadow-sm">
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-indigo-800">Try It Yourself</h2>
            <p className="text-slate-600">
              Select difficulty, adjust speed, and watch the algorithm work. You can also enter your own numbers before solving.
            </p>
          </div>
          <SudokuVisualizer />
        </TabsContent>
        
        <TabsContent value="algorithm" className="space-y-6">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-indigo-800">Backtracking Algorithm</h2>
            <p className="mb-4 text-lg text-slate-600">
              The Sudoku solver uses a <span className="font-semibold">backtracking algorithm</span>, which is a depth-first search technique that explores all possible solutions by trying values and undoing them when they lead to contradictions.
            </p>
            
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-indigo-700">How It Works</h3>
                <ol className="list-decimal space-y-2 pl-5 text-slate-700">
                  <li>Find an empty cell in the Sudoku grid</li>
                  <li>Try placing digits 1-9 in this cell</li>
                  <li>{"For each digit, check if it's valid according to Sudoku rules"}</li>
                  <li>If valid, place the digit and recursively try to fill the rest of the grid</li>
                  <li>{"If we can't place any digit (1-9) in a cell, we "}<span className="font-semibold text-rose-600">backtrack</span> to the previous cell and try a different digit</li>
                  <li>Continue until the entire grid is filled</li>
                </ol>
              </div>
              
              <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-indigo-700">Complexity Analysis</h3>
                <div className="space-y-3 text-slate-700">
                  <div>
                    <span className="font-semibold">Time Complexity:</span> O(9^(n²)) in the worst case, where n is the board size (9 for standard Sudoku).
                  </div>
                  <div>
                    <span className="font-semibold">Space Complexity:</span> O(n²) for the recursion stack.
                  </div>
                  <div>
                    <span className="font-semibold">Average Case:</span> Much faster than worst case due to pruning invalid paths early.
                  </div>
                  <div className="mt-4 text-sm text-slate-500">
                    Note: For most reasonable Sudoku puzzles, the algorithm performs quite efficiently despite the theoretical worst-case complexity.
                  </div>
                </div>
              </div>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="code">
                <AccordionTrigger className="text-lg font-medium text-indigo-700">
                  View Algorithm Code
                </AccordionTrigger>
                <AccordionContent>
                  <CodeBlock
                    code={`function solveSudoku(board) {
  // Find an empty cell
  const emptyCell = findEmptyCell(board);
  
  // If no empty cell is found, the puzzle is solved
  if (!emptyCell) return true;
  
  const [row, col] = emptyCell;
  
  // Try placing digits 1-9
  for (let num = 1; num <= 9; num++) {
    // Check if this number is valid in current position
    if (isValidPlacement(board, row, col, num)) {
      // Place the number
      board[row][col] = num;
      
      // Recursively try to solve the rest of the puzzle
      if (solveSudoku(board)) {
        return true;
      }
      
      // If we reach here, current placement didn't work
      // Backtrack and try again
      board[row][col] = 0;
    }
  }
  
  // If no solution found, trigger backtracking
  return false;
}

function isValidPlacement(board, row, col, num) {
  // Check row
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }
  
  // Check column
  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }
  
  // Check 3x3 box
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[boxRow + i][boxCol + j] === num) return false;
    }
  }
  
  return true;
}`}
                    language="javascript"
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </TabsContent>
        
        <TabsContent value="guide" className="space-y-6">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-indigo-800">How to Use This Visualizer</h2>
            
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-indigo-700">Controls</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="min-w-32 font-semibold">Difficulty:</span>
                    <span>Choose between Easy, Medium, and Hard puzzles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="min-w-32 font-semibold">Animation Speed:</span>
                    <span>Adjust how fast the algorithm runs (lower values = faster)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="min-w-32 font-semibold">New Puzzle:</span>
                    <span>Generate a new Sudoku puzzle at the selected difficulty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="min-w-32 font-semibold">Reset:</span>
                    <span>Return to the original puzzle state</span>
                  </li>
                  <li className="flex items-start">
                    <span className="min-w-32 font-semibold">Solve:</span>
                    <span>Begin the visualization (changes to Stop while running)</span>
                  </li>
                </ul>
              </div>
              
              <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold text-indigo-700">Color Guide</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <div className="mr-3 size-5 rounded bg-slate-800"></div>
                    <span>{"Original puzzle numbers (can't be changed)"}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 size-5 rounded bg-blue-600"></div>
                    <span>{"Numbers you've entered"}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 size-5 rounded bg-blue-200"></div>
                    <span>Currently processing cell</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 size-5 rounded bg-red-200"></div>
                    <span>Backtracking (algorithm is undoing this placement)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-3 size-5 rounded bg-indigo-100"></div>
                    <span>Related cells (same row, column, or 3x3 block)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="rounded-lg border border-indigo-100 bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-bold text-indigo-700">Sudoku Rules</h3>
              <p className="mb-4 text-slate-700">
                Sudoku is a 9x9 grid-based puzzle game with the following rules:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-slate-700">
                <li>Each row must contain the numbers 1-9 without repetition</li>
                <li>Each column must contain the numbers 1-9 without repetition</li>
                <li>Each of the nine 3x3 boxes must contain the numbers 1-9 without repetition</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 text-center text-sm text-slate-500">
        <p>
          This visualizer demonstrates backtracking algorithms and provides educational insights into solving techniques.
        </p>
      </div>
    </div>
  )
}

export default SudokuPage