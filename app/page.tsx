export default function IndexPage() {
  return (
    <main className="min-h-full w-full bg-gray-50 p-4 transition-colors duration-300 dark:bg-gray-900 sm:p-6 md:p-8">
      <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-colors duration-300 dark:bg-gray-800 md:max-w-3xl lg:max-w-4xl">
        <header className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white dark:from-blue-700 dark:to-blue-800 sm:p-8">
          <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl">Sorting Algorithms</h1>
          <p className="mt-2 text-sm font-medium sm:text-base md:text-lg">
            Learn how different sorting algorithms work and understand their time and space complexities.
          </p>
        </header>
        <section className="p-6 sm:p-8">
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-base">
            Sorting algorithms are used to order elements according to specific rules, such as numerical or lexicographical order. They play a crucial role in computer science, and new methods continue to be developed to improve sorting efficiency.
          </p>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-base">
            There are numerous sorting algorithms, each with unique characteristics. These algorithms are classified based on two key metrics: space complexity and time complexity. These metrics are represented using asymptotic notations—O, Θ, Ω—indicating upper, tight, and lower bounds of algorithm efficiency.
          </p>
          <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-200 sm:text-2xl">Categories of Sorting Algorithms</h2>
          <ul className="mb-4 list-inside list-disc text-sm text-gray-700 dark:text-gray-400 sm:mb-6 sm:text-base">
            <li className="mb-2">
              <strong className="text-blue-700 dark:text-blue-400">Logarithmic Complexity:</strong> Proportional to the binary logarithm of n. Example: Quick sort (O(n log n)).
            </li>
            <li className="mb-2">
              <strong className="text-blue-700 dark:text-blue-400">Quadratic Complexity:</strong> Proportional to the square of n. Example: Bubble sort (O(n<sup>2</sup>)).
            </li>
          </ul>
          <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:mb-6 sm:text-base">
            Complexity is further classified into best, average, and worst-case scenarios.
          </p>
          <div className="rounded-lg bg-blue-50 p-4 text-blue-800 shadow-md dark:bg-blue-900 dark:text-blue-300 sm:p-6">
            <p className="text-sm font-medium sm:text-base">
              Sorting algorithms can be complex, but visualizing them can significantly aid understanding. Dive into algorithm visualization to make learning fun and interactive!
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
