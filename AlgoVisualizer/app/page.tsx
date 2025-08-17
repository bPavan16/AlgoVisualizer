'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowUpDown,
  BarChart2,
  Box,
  Clock,
  Code,
  FileText,
  ChevronRight,
  BookOpen,
  ExternalLink,
  ListOrdered,
  Shuffle,
  Layers,
  GitMerge,
  DownloadCloud
} from 'lucide-react';
import { motion } from 'framer-motion';

// Simple animation for bar chart preview
const PreviewBarChart = () => {
  const bars = [65, 40, 85, 30, 55, 75, 25, 95, 50, 70];

  return (
    <div className="flex h-32 items-end justify-center gap-1 p-4">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          initial={{ height: 0 }}
          animate={{ height: `${height}%` }}
          transition={{
            duration: 0.5,
            delay: index * 0.05,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5
          }}
          className="w-6 rounded-t bg-blue-500 dark:bg-blue-600"
        />
      ))}
    </div>
  );
};

export default function IndexPage() {
  const [activeTab, setActiveTab] = useState('all');

  const algorithmCategories = [
    { id: 'all', name: 'All Algorithms' },
    { id: 'efficient', name: 'Efficient (O(n log n))' },
    { id: 'simple', name: 'Simple (O(n²))' },
    { id: 'specialized', name: 'Specialized' }
  ];

  const algorithms = [
    {
      id: 'quick',
      name: 'Quick Sort',
      description: 'A divide-and-conquer algorithm that picks a pivot element and partitions the array around it.',
      complexity: 'O(n log n)',
      category: 'efficient',
      icon: Code,
      colors: 'from-orange-500 to-red-500'
    },
    {
      id: 'merge',
      name: 'Merge Sort',
      description: 'A stable, divide-and-conquer algorithm that divides the array, sorts, and merges.',
      complexity: 'O(n log n)',
      category: 'efficient',
      icon: GitMerge,
      colors: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'heap',
      name: 'Heap Sort',
      description: 'Converts the array into a heap data structure, then repeatedly extracts the maximum.',
      complexity: 'O(n log n)',
      category: 'efficient',
      icon: Layers,
      colors: 'from-green-500 to-teal-500'
    },
    {
      id: 'bubble',
      name: 'Bubble Sort',
      description: 'Repeatedly steps through the list, compares adjacent elements, and swaps them if needed.',
      complexity: 'O(n²)',
      category: 'simple',
      icon: ArrowUpDown,
      colors: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'insertion',
      name: 'Insertion Sort',
      description: 'Builds a sorted array one element at a time, similar to sorting playing cards.',
      complexity: 'O(n²)',
      category: 'simple',
      icon: Shuffle,
      colors: 'from-amber-500 to-yellow-500'
    },
    {
      id: 'selection',
      name: 'Selection Sort',
      description: 'Repeatedly finds the minimum element and puts it at the beginning of the array.',
      complexity: 'O(n²)',
      category: 'simple',
      icon: ListOrdered,
      colors: 'from-pink-500 to-rose-500'
    }
  ];

  const filteredAlgorithms = activeTab === 'all'
    ? algorithms
    : algorithms.filter(algo => algo.category === activeTab);

  return (
    <main className="min-h-full w-full bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-900 sm:p-6 md:p-8">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-colors duration-300 dark:bg-gray-800 md:max-w-3xl lg:max-w-6xl">
        {/* Hero section */}
        <header className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white dark:from-blue-800 dark:to-blue-900 sm:p-10">
          <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 text-white opacity-10 md:block">
            <BarChart2 className="size-64" strokeWidth={1} />
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Algorithm <span className="text-blue-200">Visualizer</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium text-blue-100 sm:text-xl">
              {"Learn how different algorithms work through interactive visualizations and understand their time and space complexities."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/sorts" className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-800 shadow-lg transition-colors hover:bg-blue-50 dark:bg-blue-900 dark:text-blue-100 dark:hover:bg-blue-800">
                <div className="flex items-center gap-2">
                  <BarChart2 className="size-4" />
                  <span>Start Visualizing</span>
                </div>
              </Link>
              <Link href="#algorithms" className="rounded-lg bg-blue-700 px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-600 dark:bg-blue-950 dark:hover:bg-blue-900">
                <div className="flex items-center gap-2">
                  <ListOrdered className="size-4" />
                  <span>Explore Algorithms</span>
                </div>
              </Link>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="p-6 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">Understanding Sorting Algorithms</h2>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                Sorting algorithms are used to order elements according to specific rules, such as numerical or lexicographical order. They play a crucial role in computer science, and new methods continue to be developed to improve sorting efficiency.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
                There are numerous sorting algorithms, each with unique characteristics. These algorithms are classified based on two key metrics: space complexity and time complexity. These metrics are represented using asymptotic notations—O, Θ, Ω—indicating upper, tight, and lower bounds of algorithm efficiency.
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:mt-8">
                <div className="flex items-start gap-3 rounded-lg border border-gray-100 p-4 dark:border-gray-700">
                  <Clock className="mt-1 size-6 shrink-0 text-blue-500 dark:text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Time Complexity</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Measures the computational time required by an algorithm as a function of input size.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg border border-gray-100 p-4 dark:border-gray-700">
                  <Box className="mt-1 size-6 shrink-0 text-blue-500 dark:text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">Space Complexity</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Measures the amount of memory used by an algorithm as a function of input size.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="dark:bg-gray-750 flex flex-col justify-center rounded-xl bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-semibold text-blue-800 dark:text-blue-300">Algorithm Visualization Preview</h3>
              <div className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
                <PreviewBarChart />
              </div>
              <p className="mt-4 text-sm text-blue-700 dark:text-blue-300">
                Visualizing algorithms makes complex concepts easier to understand. Watch how each element moves through the sorting process in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-50 p-6 dark:bg-gray-700 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">Categories of Sorting Algorithms</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Sorting algorithms vary in efficiency, stability, and implementation complexity. Understanding these categories helps choose the right algorithm for specific scenarios.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-full bg-green-100 p-3 text-green-600 dark:bg-green-900 dark:text-green-300">
                <Shuffle className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Logarithmic Complexity</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                The most efficient general-purpose sorting algorithms run in O(n log n) time. These include Quick Sort, Merge Sort, and Heap Sort.
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">Examples: Quick Sort, Merge Sort</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-full bg-amber-100 p-3 text-amber-600 dark:bg-amber-900 dark:text-amber-300">
                <ArrowUpDown className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Quadratic Complexity</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Simpler algorithms with O(n²) time complexity. While less efficient for large datasets, they are often easier to implement and understand.
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">Examples: Bubble Sort, Insertion Sort</p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
              <div className="mb-4 inline-flex rounded-full bg-purple-100 p-3 text-purple-600 dark:bg-purple-900 dark:text-purple-300">
                <DownloadCloud className="size-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Linear Complexity</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Specialized algorithms like Counting Sort, Radix Sort, and Bucket Sort achieve O(n) time complexity under specific conditions.
              </p>
              <p className="mt-3 text-xs text-gray-500 dark:text-gray-500">Examples: Counting Sort, Radix Sort</p>
            </div>
          </div>
        </section>

        {/* Algorithm comparison table */}
        <section className="p-6 sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">Algorithm Comparison</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Understanding the strengths and limitations of each algorithm helps select the right one for your specific use case.
          </p>

          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Algorithm</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Best Case</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Average Case</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Worst Case</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Space</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Stable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Quick Sort</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n²)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Merge Sort</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Yes</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Heap Sort</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n log n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(1)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">No</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Bubble Sort</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n²)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n²)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(1)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Yes</td>
                </tr>
                <tr>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">Insertion Sort</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n²)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(n²)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">O(1)</td>
                  <td className="px-6 py-4 text-gray-500 dark:text-gray-400">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Explore algorithms */}
        <section id="algorithms" className="bg-gradient-to-b from-gray-50 to-white p-6 dark:bg-gray-700 dark:text-white sm:p-10">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 sm:text-3xl">Explore Sorting Algorithms</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Select an algorithm to visualize and learn about its implementation, complexity, and characteristics.
          </p>

          {/* Tabs */}
          <div className="mt-6 border-b border-gray-200 dark:border-gray-700">
            <div className="-mb-px flex flex-wrap">
              {algorithmCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`inline-block rounded-t-lg p-4 text-sm font-medium ${activeTab === category.id
                      ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-500'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300'
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Algorithm cards */}
          <div className="mt-8 grid gap-6 dark:text-gray-200 sm:grid-cols-2 lg:grid-cols-3  " >
            {filteredAlgorithms.map((algorithm) => (
              <Link
                href={`/sorts/${algorithm.id}`}
                key={algorithm.id}
                className="dark:bg-gray-750 group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg dark:hover:bg-gray-700"
              >
                <div className={`absolute h-2 w-full bg-gradient-to-r ${algorithm.colors}`}></div>
                <div className="p-6 pt-8">
                  <div className="mb-4 flex justify-between">
                    <algorithm.icon className="size-8 text-gray-700 dark:text-gray-300" />
                    <div className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {algorithm.complexity}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-blue-400">
                    {algorithm.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {algorithm.description}
                  </p>
                  <div className="mt-4 flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <span>Visualize Algorithm</span>
                    <ChevronRight className="ml-1 size-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-blue-600 p-8 text-white dark:bg-blue-800 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to Visualize Algorithms?</h2>
            <p className="mt-4 max-w-2xl text-blue-100">
              Sorting algorithms can be complex, but visualizing them can significantly aid understanding. Dive into our interactive visualizers to make learning fun and engaging!
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/sorts" className="rounded-lg bg-white px-6 py-3 font-medium text-blue-600 shadow-lg transition-all hover:bg-blue-50">
                <div className="flex items-center gap-2">
                  <BarChart2 className="size-5" />
                  <span>Start Visualizing</span>
                </div>
              </Link>
              <Link href="/resources" className="rounded-lg bg-blue-700 px-6 py-3 font-medium text-white shadow-lg transition-all hover:bg-blue-500 dark:bg-blue-900 dark:hover:bg-blue-700">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-5" />
                  <span>Learning Resources</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 p-6 text-center text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400 sm:p-8">
          <p>© {new Date().getFullYear()} AlgoVisualizer. Created for educational purposes.</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://github.com/bPavan16/AlgoVisualizer" className="hover:text-blue-600 dark:hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              <span className="flex items-center gap-1">
                <Code className="size-4" />
                <span>GitHub</span>
              </span>
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <span className="flex items-center gap-1">
                <FileText className="size-4" />
                <span>Documentation</span>
              </span>
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              <span className="flex items-center gap-1">
                <ExternalLink className="size-4" />
                <span>External Resources</span>
              </span>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}