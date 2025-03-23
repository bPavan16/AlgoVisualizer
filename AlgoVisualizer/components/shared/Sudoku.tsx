"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Loader2, RefreshCw } from "lucide-react"

// Constants
const DEFAULT_DELAY = 100
const MIN_DELAY = 10
const MAX_DELAY = 1000
const BOARD_SIZE = 9
const GRID_SIZE = 3

// Empty board with some cells pre-filled
const INITIAL_BOARD = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

// Generate a random valid Sudoku board with some empty cells
function generateRandomBoard(emptyCells = 40): number[][] {
    // Start with empty board
    const board = Array(BOARD_SIZE).fill(0).map(() => Array(BOARD_SIZE).fill(0));

    // Fill board using backtracking
    solveSudoku(board);

    // Remove random cells to create a puzzle
    let count = 0;
    while (count < emptyCells) {
        const row = Math.floor(Math.random() * BOARD_SIZE);
        const col = Math.floor(Math.random() * BOARD_SIZE);
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            count++;
        }
    }

    return board;
}

// Sleep function for visualization
function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if a number is valid in a given position
function isValidPlacement(board: number[][], row: number, col: number, num: number): boolean {
    // Check row
    for (let x = 0; x < BOARD_SIZE; x++) {
        if (board[row][x] === num) return false;
    }

    // Check column
    for (let x = 0; x < BOARD_SIZE; x++) {
        if (board[x][col] === num) return false;
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / GRID_SIZE) * GRID_SIZE;
    const boxCol = Math.floor(col / GRID_SIZE) * GRID_SIZE;

    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {
            if (board[boxRow + i][boxCol + j] === num) return false;
        }
    }

    return true;
}

// Solve Sudoku using backtracking
function solveSudoku(board: number[][]): boolean {
    for (let row = 0; row < BOARD_SIZE; row++) {
        for (let col = 0; col < BOARD_SIZE; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= BOARD_SIZE; num++) {
                    if (isValidPlacement(board, row, col, num)) {
                        board[row][col] = num;

                        if (solveSudoku(board)) {
                            return true;
                        }

                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export function SudokuVisualizer() {
    const [board, setBoard] = useState<number[][]>(structuredClone(INITIAL_BOARD));
    const [originalBoard, setOriginalBoard] = useState<number[][]>(structuredClone(INITIAL_BOARD));
    const [delay, setDelay] = useState(DEFAULT_DELAY);
    const [isSolving, setIsSolving] = useState(false);
    const [selectedCell, setSelectedCell] = useState<[number, number] | null>(null);
    const [backtrackCell, setBacktrackCell] = useState<[number, number] | null>(null);
    const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
    const userAdjustedDelay = useRef(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    // Calculate recommended delay based on difficulty
    function getRecommendedDelay(): number {
        switch (difficulty) {
            case 'easy': return 200;
            case 'medium': return 100;
            case 'hard': return 50;
            default: return DEFAULT_DELAY;
        }
    }

    // Reset to recommended delay
    const resetToRecommendedDelay = () => {
        userAdjustedDelay.current = false;
        setDelay(getRecommendedDelay());
    };

    // Handle delay change
    const handleDelayChange = (value: number) => {
        userAdjustedDelay.current = true;
        setDelay(value);
    };

    // Generate new puzzle based on difficulty
    const generateNewPuzzle = () => {
        const emptyCells = difficulty === 'easy' ? 30 : difficulty === 'medium' ? 45 : 55;
        const newBoard = generateRandomBoard(emptyCells);
        setBoard(structuredClone(newBoard));
        setOriginalBoard(structuredClone(newBoard));
        setSelectedCell(null);
        setBacktrackCell(null);
    };

    // Update cell value
    const updateCell = (row: number, col: number, value: string) => {
        if (originalBoard[row][col] !== 0) return; // Don't allow changing original cells

        const newValue = value === '' ? 0 : parseInt(value);
        if (isNaN(newValue) || newValue < 0 || newValue > 9) return;

        const newBoard = structuredClone(board);
        newBoard[row][col] = newValue;
        setBoard(newBoard);
    };

    // Visualize solving algorithm
    const visualizeSolve = async () => {
        setIsSolving(true);
        setBacktrackCell(null);

        // Create a new abort controller for this solve operation
        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        try {
            const newBoard = structuredClone(board);
            await solveWithVisualization(newBoard, signal);
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') {
                console.log('Solving was aborted');
            } else {
                console.error('Solving error:', error);
            }
        } finally {
            setIsSolving(false);
            setSelectedCell(null);
            setBacktrackCell(null);
        }
    };

    // Stop solving
    const stopSolving = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
    };

    // Reset the board
    const resetBoard = () => {
        stopSolving();
        setBoard(structuredClone(originalBoard));
        setSelectedCell(null);
        setBacktrackCell(null);
    };

    // Solve with visualization
    const solveWithVisualization = async (board: number[][], signal: AbortSignal): Promise<boolean> => {
        for (let row = 0; row < BOARD_SIZE; row++) {
            for (let col = 0; col < BOARD_SIZE; col++) {
                if (board[row][col] === 0) {
                    // Highlight current cell being processed
                    setSelectedCell([row, col]);
                    setBacktrackCell(null);

                    for (let num = 1; num <= BOARD_SIZE; num++) {
                        // Check if operation was aborted
                        if (signal.aborted) {
                            throw new DOMException('Solving aborted', 'AbortError');
                        }

                        await sleep(delay);

                        if (isValidPlacement(board, row, col, num)) {
                            board[row][col] = num;
                            setBoard(structuredClone(board));

                            if (await solveWithVisualization(board, signal)) {
                                return true;
                            }

                            // If we reach here, we need to backtrack
                            setBacktrackCell([row, col]);
                            await sleep(delay / 2);
                            board[row][col] = 0;
                            setBoard(structuredClone(board));
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    // Get cell styling based on its state
    const getCellClassName = (rowIndex: number, colIndex: number, cellValue: number) => {
        const isOriginal = originalBoard[rowIndex][colIndex] !== 0;
        const isSelected = selectedCell && selectedCell[0] === rowIndex && selectedCell[1] === colIndex;
        const isBacktrack = backtrackCell && backtrackCell[0] === rowIndex && backtrackCell[1] === colIndex;
        const isSameBox = selectedCell &&
            Math.floor(rowIndex / 3) === Math.floor(selectedCell[0] / 3) &&
            Math.floor(colIndex / 3) === Math.floor(selectedCell[1] / 3);
        const isSameRow = selectedCell && selectedCell[0] === rowIndex;
        const isSameCol = selectedCell && selectedCell[1] === colIndex;

        // Calculate the block color based on position
        const blockShade = (Math.floor(rowIndex / 3) + Math.floor(colIndex / 3)) % 2 === 0
            ? 'bg-indigo-50'
            : 'bg-white';

        // Build the className
        return `
            w-full aspect-square flex items-center justify-center text-lg font-bold
            ${blockShade}
            ${isOriginal ? 'text-slate-800 font-bold' : 'text-blue-600'}
            ${isSelected ? 'bg-blue-200 shadow-inner' : ''}
            ${isBacktrack ? 'bg-red-200' : ''}
            ${!isSelected && !isBacktrack && isSameBox ? 'bg-indigo-100' : ''}
            ${!isSelected && !isBacktrack && !isSameBox && (isSameRow || isSameCol) ? 'bg-indigo-50' : ''}
            ${rowIndex % 3 === 0 && rowIndex > 0 ? 'border-t-2 border-t-indigo-800' : ''}
            ${colIndex % 3 === 0 && colIndex > 0 ? 'border-l-2 border-l-indigo-800' : ''}
            ${isOriginal ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-blue-100'}
            transition-colors duration-200
        `;
    };

    return (
        <div className="space-y-6">
            <div className="mx-auto max-w-md">
                <div className="grid grid-cols-9 gap-0.5 border-2 border-indigo-800 p-1 bg-indigo-100 rounded-lg shadow-md">
                    {board.map((row, rowIndex) =>
                        row.map((cell, colIndex) => (
                            <div
                                key={`${rowIndex}-${colIndex}`}
                                className={getCellClassName(rowIndex, colIndex, cell)}
                                onClick={() => originalBoard[rowIndex][colIndex] === 0 && setSelectedCell([rowIndex, colIndex])}
                            >
                                {cell !== 0 ? cell : ''}
                            </div>
                        ))
                    )}
                </div>
            </div>

            {selectedCell && originalBoard[selectedCell[0]][selectedCell[1]] === 0 && !isSolving && (
                <div className="flex justify-center space-x-2 mt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <button
                            key={num}
                            className="w-10 h-10 rounded-full shadow-sm bg-gradient-to-b from-indigo-50 to-indigo-100 hover:bg-indigo-200 text-indigo-800 font-bold transition-all hover:scale-110"
                            onClick={() => updateCell(selectedCell[0], selectedCell[1], num.toString())}
                        >
                            {num}
                        </button>
                    ))}
                    <button
                        className="w-10 h-10 rounded-full shadow-sm bg-gradient-to-b from-rose-50 to-rose-100 hover:bg-rose-200 text-rose-800 font-bold transition-all hover:scale-110"
                        onClick={() => updateCell(selectedCell[0], selectedCell[1], '')}
                    >
                        X
                    </button>
                </div>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                    <Label htmlFor="difficulty" className="text-indigo-800">Difficulty</Label>
                    <select
                        id="difficulty"
                        className="w-full border border-indigo-200 rounded p-2 bg-white text-indigo-800 focus:ring-2 focus:ring-indigo-300 focus:outline-none"
                        value={difficulty}
                        disabled={isSolving}
                        onChange={(e) => setDifficulty(e.target.value as any)}
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="delay" className="text-indigo-800">Animation Speed (ms)</Label>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-100"
                            onClick={resetToRecommendedDelay}
                            disabled={isSolving}
                            title="Reset to recommended speed"
                        >
                            <RefreshCw className="h-3 w-3" />
                        </Button>
                    </div>
                    <div className="flex flex-col">
                        <Input
                            id="delay"
                            type="number"
                            className="w-full border-indigo-200 focus:ring-indigo-300"
                            value={delay}
                            min={MIN_DELAY}
                            max={MAX_DELAY}
                            disabled={isSolving}
                            onChange={(e) => handleDelayChange(Number(e.target.value))}
                        />
                    </div>
                </div>

                <Button
                    onClick={generateNewPuzzle}
                    className="h-10 self-end bg-indigo-600 hover:bg-indigo-700"
                    disabled={isSolving}
                    variant="default"
                >
                    New Puzzle
                </Button>

                <div className="flex gap-2">
                    <Button
                        onClick={resetBoard}
                        className="h-10 self-end flex-1 border-indigo-300 text-indigo-700 hover:bg-indigo-100"
                        disabled={isSolving}
                        variant="outline"
                    >
                        Reset
                    </Button>

                    <Button
                        onClick={isSolving ? stopSolving : visualizeSolve}
                        className="h-10 self-end flex-1"
                        variant={isSolving ? "destructive" : "default"}
                        style={{ backgroundColor: isSolving ? '#ef4444' : '#4f46e5' }}
                    >
                        {isSolving ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Stop
                            </>
                        ) : (
                            "Solve"
                        )}
                    </Button>
                </div>
            </div>
        </div>
    );
}