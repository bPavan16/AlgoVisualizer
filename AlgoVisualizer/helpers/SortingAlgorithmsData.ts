import { ArrowUpDown, Shuffle, PenTool, LayersIcon } from "lucide-react"

// Define types for our data structure
export interface AlgorithmVisualization {
  elements: number[];
  highlightIndices: number[];
  explanation: string;
  caption: string;
  icon?: any;
}

export interface AlgorithmExample {
  intro: string;
  steps: {
    title: string;
    startState: string;
    operations?: string[];
    endState?: string;
    note?: string;
  }[];
}

export interface AlgorithmVariant {
  name: string;
  description: string;
  code?: string;
  benefits?: string[];
  icon?: any;
}

export interface SortingAlgorithm {
  name: string;
  description: string;
  steps: string[];
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
  spaceComplexity: string;
  stable: boolean;
  characteristics: string[];
  advantages: string[];
  disadvantages: string[];
  whenToUse: {
    intro: string;
    scenarios: string[];
  };
  visualization?: AlgorithmVisualization;
  example?: AlgorithmExample;
  variants?: AlgorithmVariant[];
}

export const sortingAlgorithmsData: Record<string, SortingAlgorithm> = {
  // Bubble Sort
  "bubble": {
    name: "Bubble Sort",
    description: "Bubble Sort is one of the simplest sorting algorithms that works by repeatedly stepping through the list, comparing adjacent elements, and swapping them if they are in the wrong order.",
    steps: [
      "Start from the first element of the array",
      "Compare the current element with the next element",
      "If the current element is greater than the next element, swap them",
      "Move to the next element and repeat steps 2-3",
      "After one complete pass, the largest element will be at the end",
      "Repeat the process for all elements except the last one(s) that are already sorted"
    ],
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    spaceComplexity: "O(1)",
    stable: true,
    characteristics: [
      "Simple implementation",
      "Inefficient for large lists",
      "Good for teaching fundamentals of algorithms"
    ],
    advantages: [
      "Very simple to understand and implement",
      "Works well for small datasets",
      "Stable sorting algorithm",
      "In-place sorting (minimal extra space required)",
      "Useful for detecting if a list is already sorted"
    ],
    disadvantages: [
      "Inefficient for large datasets",
      "Quadratic time complexity makes it one of the slower sorting algorithms",
      "Significantly outperformed by other algorithms like Quick Sort, Merge Sort, and Heap Sort",
      "Requires many swap operations which can be expensive"
    ],
    whenToUse: {
      intro: "Despite its inefficiency, Bubble Sort can be useful in certain scenarios:",
      scenarios: [
        "Educational purposes - to understand basic sorting concepts",
        "Small datasets where simplicity is more important than efficiency",
        "When memory space is limited (due to its in-place nature)",
        "When checking if a list is already sorted (optimized bubble sort can detect this in O(n) time)"
      ]
    },
    visualization: {
      elements: [5, 3, 8, 4, 2],
      highlightIndices: [0, 1],
      explanation: "Comparing 5 > 3, will swap",
      caption: "The algorithm compares adjacent elements and swaps them if needed, with larger elements \"bubbling up\" to the end.",
      icon: ArrowUpDown
    },
    example: {
      intro: "Let's trace through sorting the array [5, 3, 8, 4, 2] using Bubble Sort:",
      steps: [
        {
          title: "Pass 1",
          startState: "Starting array: [5, 3, 8, 4, 2]",
          operations: [
            "Compare 5 & 3: Swap → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">3, 5</span>, 8, 4, 2]",
            "Compare 5 & 8: No swap → [3, 5, 8, 4, 2]",
            "Compare 8 & 4: Swap → [3, 5, <span class=\"text-blue-600 font-medium dark:text-blue-400\">4, 8</span>, 2]",
            "Compare 8 & 2: Swap → [3, 5, 4, <span class=\"text-blue-600 font-medium dark:text-blue-400\">2, 8</span>]"
          ],
          endState: "End of Pass 1: [3, 5, 4, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">8</span>]",
          note: "The largest element (8) has \"bubbled up\" to the end"
        },
        {
          title: "Pass 2",
          startState: "Starting: [3, 5, 4, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">8</span>]",
          operations: [
            "Compare 3 & 5: No swap → [3, 5, 4, 2, 8]",
            "Compare 5 & 4: Swap → [3, <span class=\"text-blue-600 font-medium dark:text-blue-400\">4, 5</span>, 2, 8]",
            "Compare 5 & 2: Swap → [3, 4, <span class=\"text-blue-600 font-medium dark:text-blue-400\">2, 5</span>, 8]"
          ],
          endState: "End of Pass 2: [3, 4, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">5, 8</span>]"
        },
        {
          title: "Passes 3 & 4",
          startState: "Pass 3: [3, 4, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">5, 8</span>]",
          operations: [],
          endState: "After comparisons: [3, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">4, 5, 8</span>]<br><br>Pass 4: [3, 2, <span class=\"font-medium text-green-600 dark:text-green-400\">4, 5, 8</span>]<br>After final pass: [2, <span class=\"font-medium text-green-600 dark:text-green-400\">3, 4, 5, 8</span>]",
          note: "Array is now sorted!"
        }
      ]
    },
    variants: [
      {
        name: "Optimized Bubble Sort",
        description: "An optimization can be made to the standard Bubble Sort by adding a flag to detect if any swap occurred in the inner loop. If no swaps occurred, the array is already sorted and we can exit early.",
        code: `function optimizedBubbleSort(arr) {
  let n = arr.length;
  let swapped;
  
  for (let i = 0; i < n; i++) {
    swapped = false;
    
    // Last i elements are already sorted
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swapping occurred in this pass, array is sorted
    if (!swapped) {
      break;
    }
  }
  
  return arr;
}`,
        benefits: [
          "Improves best case time complexity to O(n)",
          "Early termination when the array is already sorted",
          "No unnecessary iterations when sorting is complete"
        ],
        icon: ArrowUpDown
      },
      {
        name: "Bidirectional Bubble Sort (Cocktail Shaker Sort)",
        description: "This variant bubbles values both from left to right and right to left, reducing the number of passes needed.",
        benefits: [
          "Better handling of \"turtles\" (small values near the end that move slowly to their proper position)",
          "More efficient than standard bubble sort in many cases",
          "Addresses some performance issues of the standard algorithm"
        ],
        icon: ArrowUpDown
      }
    ]
  },

  // Quick Sort
  "quick": {
    name: "Quick Sort",
    description: "Quick Sort is an efficient, divide-and-conquer sorting algorithm that selects a 'pivot' element and partitions the array around the pivot.",
    steps: [
      "Choose a pivot element from the array",
      "Partition the array around the pivot (elements less than pivot go to the left, greater go to the right)",
      "Recursively apply the above steps to the sub-arrays formed by the partitioning",
      "The base case is when a sub-array has 0 or 1 elements (already sorted)",
      "Combine the sorted sub-arrays to form the final sorted array"
    ],
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n²)"
    },
    spaceComplexity: "O(log n)",
    stable: false,
    characteristics: [
      "Divide and conquer algorithm",
      "Generally faster in practice than other O(n log n) algorithms",
      "In-place sorting with small auxiliary stack",
      "Not stable by default"
    ],
    advantages: [
      "Highly efficient for large datasets",
      "Good cache performance",
      "Requires very little additional memory (in-place sorting)",
      "Simple to implement",
      "Works well with virtual memory systems"
    ],
    disadvantages: [
      "Worst-case time complexity of O(n²) when poorly implemented or with bad pivot selection",
      "Not stable - equal elements may change relative order",
      "Not ideal for nearly sorted arrays with naive pivot selection",
      "Vulnerable to the problem of stack overflow with poor implementations"
    ],
    whenToUse: {
      intro: "Quick Sort is an excellent general-purpose sorting algorithm that is particularly useful in the following scenarios:",
      scenarios: [
        "When average-case performance is important (large datasets)",
        "When memory usage is a concern (in-place sorting)",
        "When implementation simplicity is desired alongside good performance",
        "When stable sorting is not a requirement",
        "For systems with good cache performance"
      ]
    },
    visualization: {
      elements: [4, 1, 3, 2, 6, 5, 7],
      highlightIndices: [0, 2, 3],
      explanation: "Partitioning around pivot 4",
      caption: "The algorithm selects a pivot element (here: 4) and partitions the array so elements less than the pivot are to the left and greater are to the right.",
      icon: Shuffle
    },
    example: {
      intro: "Let's trace through sorting [4, 1, 3, 2, 6, 5, 7] using Quick Sort with the first element as pivot:",
      steps: [
        {
          title: "First Partitioning",
          startState: "Starting array: [4, 1, 3, 2, 6, 5, 7], pivot = 4",
          operations: [
            "Partition around pivot 4",
            "Elements less than 4: [1, 3, 2]",
            "Elements greater than 4: [6, 5, 7]",
            "After partitioning: [<span class=\"text-blue-600 font-medium dark:text-blue-400\">1, 3, 2</span>, 4, <span class=\"text-green-600 font-medium dark:text-green-400\">6, 5, 7</span>]"
          ],
          endState: "Pivot 4 is now in its final sorted position",
          note: "Now recursively sort the sub-arrays [1, 3, 2] and [6, 5, 7]"
        },
        {
          title: "Left Sub-Array",
          startState: "Sorting: [1, 3, 2], pivot = 1",
          operations: [
            "1 is the smallest element, it's already in the right place",
            "Partitioning results in: [1, <span class=\"text-blue-600 font-medium dark:text-blue-400\">3, 2</span>]"
          ],
          endState: "Now recursively sort [3, 2]"
        },
        {
          title: "Right Sub-Array",
          startState: "Sorting: [6, 5, 7], pivot = 6",
          operations: [
            "Partition around pivot 6",
            "After partitioning: [<span class=\"text-blue-600 font-medium dark:text-blue-400\">5</span>, 6, <span class=\"text-green-600 font-medium dark:text-green-400\">7</span>]"
          ],
          endState: "Now recursively sort [5] and [7], which are already sorted (only one element)",
          note: "After all recursive steps, the array is fully sorted"
        },
        {
          title: "Final Result",
          startState: "After all partitioning and recursion:",
          endState: "Sorted array: [1, 2, 3, 4, 5, 6, 7]"
        }
      ]
    },
    variants: [
      {
        name: "Random Pivot Selection",
        description: "Instead of always choosing the first or last element as a pivot, selecting a random element can help avoid worst-case scenarios and make the O(n²) case very unlikely.",
        benefits: [
          "Avoids worst-case performance on already sorted arrays",
          "More resistant to adversarial inputs",
          "Provides good average-case performance regardless of input distribution"
        ],
        icon: Shuffle
      },
      {
        name: "Dual-Pivot Quick Sort",
        description: "Uses two pivots instead of one to partition the array into three parts, which can be more efficient in many cases.",
        benefits: [
          "Fewer comparisons than single-pivot quicksort in many cases",
          "Better cache performance due to more locality of reference",
          "Used in Java's Arrays.sort() implementation for primitive types"
        ],
        icon: PenTool
      }
    ]
  },
  
  // Merge Sort Example:
  "merge": {
    name: "Merge Sort",
    description: "Merge Sort is an efficient, stable divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves.",
    steps: [
      "Divide the unsorted array into n sub-arrays, each containing one element (a single element is considered sorted)",
      "Repeatedly merge sub-arrays to produce new sorted sub-arrays until there is only one sub-array remaining",
      "When merging two sorted sub-arrays, compare the elements one by one and place the smaller element first in the result",
      "Continue this process until all elements from both sub-arrays are merged"
    ],
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    spaceComplexity: "O(n)",
    stable: true,
    characteristics: [
      "Divide and conquer algorithm",
      "Stable sorting algorithm",
      "Guaranteed O(n log n) performance",
      "Requires additional space proportional to the size of the input"
    ],
    advantages: [
      "Predictable performance: always O(n log n) regardless of input data",
      "Stable sorting - preserves the relative order of equal elements",
      "Well-suited for linked lists and external sorting",
      "Parallelizable for multi-processor or multi-core systems"
    ],
    disadvantages: [
      "Requires additional O(n) space for the merging process",
      "Not in-place - needs extra memory",
      "Slower than Quick Sort for small datasets",
      "More complex implementation than some algorithms"
    ],
    whenToUse: {
      intro: "Merge Sort is an excellent choice in several scenarios:",
      scenarios: [
        "When stability is required (preserving order of equal elements)",
        "When guaranteed O(n log n) performance is needed regardless of input data",
        "When sorting linked lists (can be implemented with O(1) extra space)",
        "When external sorting is needed (sorting data that doesn't fit in memory)",
        "When parallel processing is available"
      ]
    },
    visualization: {
      elements: [8, 3, 5, 1, 4, 2],
      highlightIndices: [0, 1, 2, 3],
      explanation: "Merging [3, 8] and [1, 5]",
      caption: "The algorithm divides the array until single elements, then merges them in sorted order. Here we're merging two already sorted sub-arrays.",
      icon: PenTool
    },
    // Additional merge sort data would go here
    variants: [
      {
        name: "Bottom-up Merge Sort",
        description: "An iterative implementation that avoids recursion. It starts by merging subarrays of size 1, then size 2, 4, 8, and so on.",
        benefits: [
          "Avoids function call overhead of recursion",
          "Can be more efficient in practice",
          "Uses less stack space"
        ],
        icon: PenTool
      }
    ]
  },

  // Insertion Sort
  "insertion": {
    name: "Insertion Sort",
    description: "Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time by repeatedly picking the next element and inserting it into its correct position.",
    steps: [
      "Start with the second element (index 1) as the current element",
      "Compare the current element with the elements before it",
      "Shift all elements greater than the current element one position to the right",
      "Insert the current element into its correct position",
      "Repeat for all elements in the array"
    ],
    timeComplexity: {
      best: "O(n)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    spaceComplexity: "O(1)",
    stable: true,
    characteristics: [
      "Simple and intuitive",
      "Efficient for small or nearly sorted datasets",
      "In-place sorting algorithm"
    ],
    advantages: [
      "Easy to implement and understand",
      "Performs well on small datasets",
      "Stable sorting algorithm",
      "Efficient for nearly sorted data"
    ],
    disadvantages: [
      "Inefficient for large datasets",
      "Quadratic time complexity in the average and worst cases",
      "Not suitable for large-scale applications"
    ],
    whenToUse: {
      intro: "Insertion Sort is particularly useful in the following scenarios:",
      scenarios: [
        "When the dataset is small",
        "When the dataset is nearly sorted",
        "When stability is required",
        "When simplicity of implementation is a priority"
      ]
    },
    visualization: {
      elements: [7, 4, 5, 2, 6],
      highlightIndices: [1, 0],
      explanation: "Inserting 4 into its correct position",
      caption: "The algorithm picks each element and inserts it into its correct position in the sorted portion of the array.",
      icon: LayersIcon
    },
    example: {
      intro: "Let's trace through sorting [7, 4, 5, 2, 6] using Insertion Sort:",
      steps: [
        {
          title: "Step 1",
          startState: "Starting array: [7, 4, 5, 2, 6]",
          operations: [
            "Pick 4 (index 1)",
            "Compare with 7: Shift 7 → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">7</span>, 7, 5, 2, 6]",
            "Insert 4 → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">4, 7</span>, 5, 2, 6]"
          ],
          endState: "Array after step 1: [4, 7, 5, 2, 6]"
        },
        {
          title: "Step 2",
          startState: "Array: [4, 7, 5, 2, 6]",
          operations: [
            "Pick 5 (index 2)",
            "Compare with 7: Shift 7 → [4, <span class=\"text-blue-600 font-medium dark:text-blue-400\">7</span>, 7, 2, 6]",
            "Insert 5 → [4, <span class=\"text-blue-600 font-medium dark:text-blue-400\">5, 7</span>, 2, 6]"
          ],
          endState: "Array after step 2: [4, 5, 7, 2, 6]"
        },
        {
          title: "Step 3",
          startState: "Array: [4, 5, 7, 2, 6]",
          operations: [
            "Pick 2 (index 3)",
            "Compare with 7: Shift 7 → [4, 5, <span class=\"text-blue-600 font-medium dark:text-blue-400\">7</span>, 7, 6]",
            "Compare with 5: Shift 5 → [4, <span class=\"text-blue-600 font-medium dark:text-blue-400\">5</span>, 5, 7, 6]",
            "Compare with 4: Shift 4 → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">4</span>, 4, 5, 7, 6]",
            "Insert 2 → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">2, 4, 5, 7</span>, 6]"
          ],
          endState: "Array after step 3: [2, 4, 5, 7, 6]"
        },
        {
          title: "Step 4",
          startState: "Array: [2, 4, 5, 7, 6]",
          operations: [
            "Pick 6 (index 4)",
            "Compare with 7: Shift 7 → [2, 4, 5, <span class=\"text-blue-600 font-medium dark:text-blue-400\">7</span>, 7]",
            "Insert 6 → [2, 4, 5, <span class=\"text-blue-600 font-medium dark:text-blue-400\">6, 7</span>]"
          ],
          endState: "Array after step 4: [2, 4, 5, 6, 7]"
        }
      ]
    },
    variants: [
      {
        name: "Binary Insertion Sort",
        description: "Uses binary search to find the correct position for the current element, reducing the number of comparisons.",
        benefits: [
          "Fewer comparisons than standard insertion sort",
          "More efficient for larger datasets compared to standard insertion sort"
        ],
        icon: LayersIcon
      }
    ]
  },

  // Selection Sort
  "selection": {
    name: "Selection Sort",
    description: "Selection Sort is a simple comparison-based sorting algorithm that repeatedly selects the smallest (or largest) element from the unsorted portion and moves it to the sorted portion.",
    steps: [
      "Start with the first element as the current minimum",
      "Compare the current minimum with the rest of the elements in the unsorted portion",
      "If a smaller element is found, update the current minimum",
      "Swap the current minimum with the first element of the unsorted portion",
      "Repeat for the next element until the entire array is sorted"
    ],
    timeComplexity: {
      best: "O(n²)",
      average: "O(n²)",
      worst: "O(n²)"
    },
    spaceComplexity: "O(1)",
    stable: false,
    characteristics: [
      "Simple and intuitive",
      "Inefficient for large datasets",
      "In-place sorting algorithm"
    ],
    advantages: [
      "Easy to implement and understand",
      "Does not require additional memory",
      "Performs well on small datasets"
    ],
    disadvantages: [
      "Inefficient for large datasets",
      "Quadratic time complexity in all cases",
      "Not stable - equal elements may change relative order"
    ],
    whenToUse: {
      intro: "Selection Sort is useful in the following scenarios:",
      scenarios: [
        "When simplicity of implementation is a priority",
        "When memory usage is a concern (in-place sorting)",
        "When the dataset is small and performance is not critical"
      ]
    },
    visualization: {
      elements: [6, 3, 8, 5, 2],
      highlightIndices: [0, 4],
      explanation: "Selecting the smallest element (2) and swapping with the first element (6)",
      caption: "The algorithm selects the smallest element from the unsorted portion and swaps it with the first unsorted element.",
      icon: ArrowUpDown
    },
    example: {
      intro: "Let's trace through sorting [6, 3, 8, 5, 2] using Selection Sort:",
      steps: [
        {
          title: "Step 1",
          startState: "Starting array: [6, 3, 8, 5, 2]",
          operations: [
            "Find the smallest element in [6, 3, 8, 5, 2]: 2",
            "Swap 2 with 6 → [<span class=\"text-blue-600 font-medium dark:text-blue-400\">2</span>, 3, 8, 5, 6]"
          ],
          endState: "Array after step 1: [2, 3, 8, 5, 6]"
        },
        {
          title: "Step 2",
          startState: "Array: [2, 3, 8, 5, 6]",
          operations: [
            "Find the smallest element in [3, 8, 5, 6]: 3",
            "No swap needed as 3 is already in the correct position"
          ],
          endState: "Array after step 2: [2, 3, 8, 5, 6]"
        },
        {
          title: "Step 3",
          startState: "Array: [2, 3, 8, 5, 6]",
          operations: [
            "Find the smallest element in [8, 5, 6]: 5",
            "Swap 5 with 8 → [2, 3, <span class=\"text-blue-600 font-medium dark:text-blue-400\">5</span>, 8, 6]"
          ],
          endState: "Array after step 3: [2, 3, 5, 8, 6]"
        },
        {
          title: "Step 4",
          startState: "Array: [2, 3, 5, 8, 6]",
          operations: [
            "Find the smallest element in [8, 6]: 6",
            "Swap 6 with 8 → [2, 3, 5, <span class=\"text-blue-600 font-medium dark:text-blue-400\">6</span>, 8]"
          ],
          endState: "Array after step 4: [2, 3, 5, 6, 8]"
        }
      ]
    },
    variants: [
      {
        name: "Stable Selection Sort",
        description: "A modified version of Selection Sort that maintains the relative order of equal elements by using a stable swapping mechanism.",
        benefits: [
          "Preserves the relative order of equal elements",
          "Useful when stability is required"
        ],
        icon: ArrowUpDown
      }
    ]
  },

  // Heap Sort
  "heap": {
    name: "Heap Sort",
    description: "Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements.",
    steps: [
      "Build a max heap from the input array",
      "Swap the root (largest element) with the last element of the heap",
      "Reduce the heap size by one and heapify the root",
      "Repeat the process until the heap size is 1"
    ],
    timeComplexity: {
      best: "O(n log n)",
      average: "O(n log n)",
      worst: "O(n log n)"
    },
    spaceComplexity: "O(1)",
    stable: false,
    characteristics: [
      "Comparison-based sorting algorithm",
      "In-place sorting algorithm",
      "Uses a binary heap data structure"
    ],
    advantages: [
      "Efficient for large datasets",
      "In-place sorting (requires no additional memory)",
      "Guaranteed O(n log n) performance"
    ],
    disadvantages: [
      "Not stable - equal elements may change relative order",
      "More complex to implement compared to simpler algorithms",
      "Not as fast as Quick Sort in practice for many datasets"
    ],
    whenToUse: {
      intro: "Heap Sort is particularly useful in the following scenarios:",
      scenarios: [
        "When memory usage is a concern (in-place sorting)",
        "When guaranteed O(n log n) performance is required",
        "When stability is not a requirement"
      ]
    },
    visualization: {
      elements: [9, 4, 7, 1, 3, 6, 2],
      highlightIndices: [0, 6],
      explanation: "Swapping the root (9) with the last element (2) and heapifying the root",
      caption: "The algorithm builds a max heap and repeatedly extracts the largest element, placing it at the end of the array.",
      icon: ArrowUpDown
    },
    example: {
      intro: "Let's trace through sorting [9, 4, 7, 1, 3, 6, 2] using Heap Sort:",
      steps: [
        {
          title: "Step 1: Build Max Heap",
          startState: "Starting array: [9, 4, 7, 1, 3, 6, 2]",
          operations: [
            "Heapify the array to build a max heap",
            "Resulting max heap: [<span class=\"text-blue-600 font-medium dark:text-blue-400\">9, 4, 7, 1, 3, 6, 2</span>]"
          ],
          endState: "Max heap built: [9, 4, 7, 1, 3, 6, 2]"
        },
        {
          title: "Step 2: Extract Max Element",
          startState: "Heap: [9, 4, 7, 1, 3, 6, 2]",
          operations: [
            "Swap root (9) with last element (2)",
            "Heapify the root to restore max heap property",
            "Resulting heap: [<span class=\"text-blue-600 font-medium dark:text-blue-400\">7, 4, 6, 1, 3, 2</span>, 9]"
          ],
          endState: "Array after extraction: [7, 4, 6, 1, 3, 2, 9]"
        },
        {
          title: "Step 3: Repeat Extraction",
          startState: "Heap: [7, 4, 6, 1, 3, 2]",
          operations: [
            "Swap root (7) with last element (2)",
            "Heapify the root",
            "Resulting heap: [<span class=\"text-blue-600 font-medium dark:text-blue-400\">6, 4, 2, 1, 3</span>, 7, 9]"
          ],
          endState: "Array after extraction: [6, 4, 2, 1, 3, 7, 9]"
        },
        {
          title: "Final Steps",
          startState: "Continue extracting and heapifying",
          endState: "Sorted array: [1, 2, 3, 4, 6, 7, 9]"
        }
      ]
    },
    variants: [
      {
        name: "Min-Heap Sort",
        description: "Uses a min-heap instead of a max-heap to sort elements in descending order.",
        benefits: [
          "Can be used for descending order sorting",
          "Similar time and space complexity as max-heap sort"
        ],
        icon: ArrowUpDown
      }
    ]
  }





};

export default sortingAlgorithmsData;