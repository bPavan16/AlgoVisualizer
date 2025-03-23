# AlgoVisualizer

<div align="center">
  <!-- <img src="https://via.placeholder.com/1200x600/4F46E5/FFFFFF?text=AlgoVisualizer" alt="AlgoVisualizer Banner" width="800"/> -->
  
  <p>
    <strong>Interactive visualizations to understand algorithms through animation</strong>
  </p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#algorithms">Algorithms</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#usage">Usage</a> •
    <a href="#educational-value">Educational Value</a>
  </p>
</div>



## Overview

AlgoVisualizer is an interactive web application designed to help users learn and understand various algorithms through visual representations. By animating algorithm execution step-by-step, it transforms abstract concepts into tangible visual patterns, making learning more intuitive and engaging.

The application focuses primarily on sorting algorithms and includes other algorithm visualizations like Sudoku solving using backtracking. Each visualization is accompanied by detailed explanations, time and space complexity analysis, and code implementations in multiple programming languages.

> "Seeing is understanding. AlgoVisualizer makes complex algorithms accessible by showing you exactly how they work."

## Features

- **Interactive Visualizations**: Watch algorithms run step-by-step with adjustable speed controls
- **Comprehensive Algorithm Coverage**: Visualize and learn about multiple algorithm categories
- **Dark/Light Mode**: Toggle between light and dark themes for comfortable viewing in any environment
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Educational Resources**: In-depth explanations, code samples, and complexity analysis
- **Algorithm Comparisons**: Compare different algorithms side-by-side
- **Custom Inputs**: Test algorithms with your own input data
- **Step-through Execution**: Pause and step through algorithm execution for detailed understanding

## Algorithms

### Demo 

![AlgoVisualizer Demo](/images/image-(1).png)

![AlgoVisualizer Demo](/images/image-(2).png)

![AlgoVisualizer Demo](/images/image-(3).png)

![AlgoVisualizer Demo](/images/image-(4).png)

![AlgoVisualizer Demo](/images/image-(5).png)

![AlgoVisualizer Demo](/images/image-(6).png)

![AlgoVisualizer Demo](/images/image-(7).png)



### Sorting Algorithms

Visualize a range of sorting algorithms with varying complexity classes:

| Algorithm | Average Time | Worst Time | Memory | Stable | Method |
|-----------|--------------|------------|--------|--------|--------|
| Quick Sort | O(n log n) | O(n²) | O(log n) | No | Partitioning |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Yes | Merging |
| Heap Sort | O(n log n) | O(n log n) | O(1) | No | Selection |
| Bubble Sort | O(n²) | O(n²) | O(1) | Yes | Exchanging |
| Selection Sort | O(n²) | O(n²) | O(1) | No | Selection |
| Insertion Sort | O(n²) | O(n²) | O(1) | Yes | Insertion |


## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bPavan16/AlgoVisualizer.git
   cd AlgoVisualizer
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

To start the production server:
```bash
npm run start
# or
yarn start
```

## Usage

### Sorting Algorithm Visualizer

1. Navigate to the sorting algorithm section
2. Select an algorithm (Quick Sort, Merge Sort, etc.)
3. Adjust array size using the slider
4. Set animation speed as desired
5. Click "Generate Array" to create a new random array
6. Click "Sort" to watch the algorithm in action
7. Use "Pause/Resume" to control the visualization
8. Switch between different algorithms to compare their behavior

### Sudoku Solver Visualizer

1. Navigate to the Sudoku solver section
2. Use the provided puzzles or enter your own values
3. Adjust visualization speed
4. Click "Solve" to watch the backtracking algorithm solve the puzzle
5. Use the explanations to understand how backtracking works





## Project Structure

```
AlgoVisualizer/
├── app/                 # Next.js app directory (pages and routes)
│   ├── layout.tsx       # Main layout component
│   ├── page.tsx         # Home page
│   ├── graph/           # Graph algorithm visualizations
│   │   └── sorts/       # Sorting algorithm visualizations
│   │       ├── [algorithm]/  # Dynamic route for each sorting algorithm
│   │       │   └── page.tsx  # Dynamic page for specific algorithms
│   │       └── page.tsx      # Index page for sorting algorithms
│   └── sudoku/          # Sudoku solver visualization
│       └── page.tsx     # Sudoku solver page
├── components/          # Reusable React components
│   ├── shared/          # Shared components used across visualizers
│   │   ├── BarGraph.tsx # Bar chart visualization component
│   │   ├── CodeTab.tsx  # Code snippet display component
│   │   └── Sudoku.tsx   # Sudoku grid component
│   └── ui/              # UI components (buttons, tabs, etc.)
├── helpers/             # Helper functions and algorithm implementations
│   ├── sort_funcs.ts    # Sorting algorithm implementations
│   ├── CodeSnippets.ts  # Code examples for each algorithm
│   └── SortingAlgorithmsData.ts # Data about sorting algorithms
├── lib/                 # Utility libraries and functions
├── public/              # Static assets and images
└── types/               # TypeScript type definitions
```

## Educational Value

AlgoVisualizer is designed with educational purposes in mind:

### Understanding Complexity

- **Time Complexity**: Visualize how different algorithms scale with input size
- **Space Complexity**: Understand memory usage patterns for various algorithms
- **Best, Average, and Worst Cases**: See how algorithms perform under different scenarios

### Key Algorithmic Concepts

- **Divide and Conquer**: Visualize how problems are broken down and solved recursively
- **Backtracking**: Watch algorithms explore possibilities and correct mistakes
- **Greedy Strategies**: See how local optimization leads to global solutions
- **Dynamic Programming**: Understand overlapping subproblems and optimal substructure

### Learning Outcomes

After using AlgoVisualizer, you should be able to:

1. Recognize patterns in algorithm behavior
2. Understand when to apply specific algorithms
3. Explain the trade-offs between different algorithmic approaches
4. Analyze algorithm performance using proper metrics
5. Implement these algorithms in your own code with confidence

## Technology Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React framework)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: Custom animation logic with React hooks
- **State Management**: React Context API
- **Deployment**: Vercel/Netlify

## Performance Considerations

The visualizations are optimized for:

- **Smooth Animations**: Using efficient rendering techniques to ensure smooth animations even for large data sets
- **Responsive Design**: Adapting to different screen sizes without sacrificing functionality
- **Runtime Efficiency**: Implementing algorithms with proper optimizations where appropriate

## Roadmap

- [ ] Add more sorting algorithms (Tim Sort, Radix Sort)
- [ ] Implement graph algorithm visualizations
- [ ] Add complexity comparison charts
- [ ] Create interactive tutorials and guided learning paths
- [ ] Implement algorithm quizzes and challenges

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Contribution Guidelines

- Focus on educational value
- Maintain responsive design principles
- Ensure accessibility standards are met
- Include detailed explanations with any new algorithm
- Add proper documentation

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Introduction to Algorithms](https://mitpress.mit.edu/books/introduction-algorithms-third-edition) by CLRS
- [Algorithms, 4th Edition](https://algs4.cs.princeton.edu/home/) by Robert Sedgewick and Kevin Wayne
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs)

---

<div align="center">
  <p>Made with ❤️ for algorithm enthusiasts and learners everywhere by Pavan</p>
  <p>
    <a href="https://github.com/bPavan16/AlgoVisualizer/issues">Report Bug</a> •
    <a href="https://github.com/bPavan16/AlgoVisualizer/issues">Request Feature</a>
  </p>
</div>

