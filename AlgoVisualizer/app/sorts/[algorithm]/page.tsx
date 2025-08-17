'use client'
import { Barchart } from '@/components/shared/BarGraph'
import { CodeTab } from '@/components/shared/CodeTab'
import { bubbleSort, getSortFunction } from '@/helpers/sort_funcs'
import { CodeSnippetsAll } from '@/helpers/CodeSnippets'
import { sortingAlgorithmsData } from '@/helpers/SortingAlgorithmsData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import React, { useState, useEffect } from 'react'
import { ArrowUpDown, BookOpen, Code, LineChart, BarChart3, RefreshCw, Lightbulb, Award, Clock, Zap, Moon, Sun } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useParams, notFound } from 'next/navigation'

const SortingAlgorithmPage = () => {
  const [activeTab, setActiveTab] = useState("visualizer")
  const [isDarkMode, setIsDarkMode] = useState(false)
  const params = useParams()
  const algorithmSlug = params.algorithm as string

  

  // Get algorithm data or return 404 if not found
  const algorithmData = sortingAlgorithmsData[algorithmSlug]
  if (!algorithmData) {
    notFound()
  }
  
  const { 
    name, 
    description, 
    timeComplexity, 
    spaceComplexity, 
    stable,
    advantages, 
    disadvantages, 
    whenToUse,
    visualization,
    variants
  } = algorithmData
  
  const sortFunction = getSortFunction(algorithmSlug)
  
  const codeSnippets = CodeSnippetsAll[name as keyof typeof CodeSnippetsAll] || []

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
      
      if (prefersDark) {
        document.documentElement.classList.add('dark')
      }
    }
  }, [])
  
  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8 transition-colors duration-200 dark:bg-gray-900">
      <div className="absolute right-4 top-4">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleDarkMode}
          className="rounded-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <Sun className="size-5 text-yellow-500" />
          ) : (
            <Moon className="size-5 text-blue-600" />
          )}
        </Button>
      </div>
      
      <div className="relative mb-10 text-center">
        {/* Decorative elements */}
        <div className="absolute -top-6 left-1/2 size-24 -translate-x-1/2 opacity-10">
          <ArrowUpDown size={96} className="text-blue-500 dark:text-blue-400" />
        </div>
        
        <h1 className="relative z-10 mb-4 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-blue-400 dark:to-cyan-500 lg:text-5xl">
          {name} Visualizer
        </h1>
        <p className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-300">
          {description}
        </p>
      </div>

      <Tabs defaultValue="visualizer" value={activeTab} onValueChange={setActiveTab} className="mb-10">
        <TabsList className="mb-8 grid w-full grid-cols-3 bg-blue-50 p-1 dark:bg-gray-800">
          <TabsTrigger 
            value="visualizer" 
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:text-gray-200 dark:data-[state=active]:bg-blue-700 dark:data-[state=inactive]:text-gray-400"
          >
            <BarChart3 className="mr-2 size-4" />
            Interactive Visualizer
          </TabsTrigger>
          <TabsTrigger 
            value="explanation" 
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:text-gray-200 dark:data-[state=active]:bg-blue-700 dark:data-[state=inactive]:text-gray-400"
          >
            <BookOpen className="mr-2 size-4" />
            Algorithm Explanation
          </TabsTrigger>
          <TabsTrigger 
            value="code" 
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white dark:text-gray-200 dark:data-[state=active]:bg-blue-700 dark:data-[state=inactive]:text-gray-400"
          >
            <Code className="mr-2 size-4" />
            Implementation
          </TabsTrigger>
        </TabsList>
        
        <TabsContent 
          value="visualizer" 
          className="rounded-lg border border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50 p-6 shadow-sm 
          dark:border-gray-700 dark:from-gray-800 dark:to-gray-900 dark:shadow-none"
        >
          <div className="mb-6">
            <h2 className="mb-2 flex items-center text-2xl font-bold text-blue-800 dark:text-blue-300">
              <LineChart className="mr-2 size-6 text-blue-600 dark:text-blue-400" />
              Try It Yourself
            </h2>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              Adjust the array size and animation speed to see how {name} performs on different data sets.
            </p>
          </div>
          {sortFunction && <Barchart sortfunction={sortFunction} />}
        </TabsContent>
        
        <TabsContent value="explanation" className="space-y-6">
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-bold text-blue-800 dark:text-blue-300">
              <BookOpen className="mr-2 size-6 text-blue-600 dark:text-blue-400" />
              Understanding {name}
            </h2>
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
              {description}
            </p>
            
            {/* Visual representation */}
            {visualization && (
              <div className="mb-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm 
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 text-xl font-bold text-blue-700 dark:text-blue-300">Visual Explanation</h3>
                <div className="flex flex-col items-center">
                  <div className="relative mb-4 h-48 w-full max-w-lg overflow-hidden rounded-lg border border-blue-100 bg-blue-50
                      dark:border-gray-700 dark:bg-gray-900">
                    <div className="absolute left-0 top-0 flex size-full items-center justify-center">
                      <div className="text-center">
                        <p className="mb-2 font-medium text-blue-800 dark:text-blue-300">{name} Animation</p>
                        <div className="flex justify-center space-x-2">
                          {visualization.elements.map((num, i) => (
                            <div 
                              key={i} 
                              className={`flex size-10 items-center justify-center rounded-md font-bold text-white
                                ${visualization.highlightIndices.includes(i) ? 'scale-110 bg-blue-600 shadow-md dark:bg-blue-700' : 'bg-blue-400 dark:bg-blue-500'}`}
                            >
                              {num}
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-center text-blue-600 dark:text-blue-400">
                          <span>{visualization.explanation}</span>
                          {visualization.icon && (
                            <visualization.icon className="ml-2 size-4" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm italic text-slate-600 dark:text-slate-400">
                    {visualization.caption}
                  </p>
                </div>
              </div>
            )}
            
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm 
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300">
                  <RefreshCw className="mr-2 size-5 text-blue-600 dark:text-blue-400" /> 
                  How It Works
                </h3>
                <ol className="list-decimal space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                  {algorithmData.steps.map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>
              
              <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300">
                  <Clock className="mr-2 size-5 text-blue-600 dark:text-blue-400" />
                  Complexity Analysis
                </h3>
                <div className="space-y-3 text-slate-700 dark:text-slate-300">
                  <div>
                    <span className="font-semibold">Time Complexity:</span>
                    <ul className="mt-1 pl-5">
                      <li>Best Case: {timeComplexity.best}</li>
                      <li>Average Case: {timeComplexity.average}</li>
                      <li>Worst Case: {timeComplexity.worst}</li>
                    </ul>
                  </div>
                  <div>
                    <span className="font-semibold">Space Complexity:</span> {spaceComplexity}
                  </div>
                  <div className="mt-4 rounded border border-blue-100 bg-blue-50 p-3
                      dark:border-gray-600 dark:bg-gray-700">
                    <span className="font-semibold text-blue-700 dark:text-blue-300">Key Characteristics:</span>
                    <ul className="mt-1 list-disc pl-5 dark:text-slate-300">
                      {algorithmData.characteristics.map((char, index) => (
                        <li key={index}>{char}</li>
                      ))}
                      <li>Stable: {stable ? "Yes" : "No"}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300">
                  <Award className="mr-2 size-5 text-blue-600 dark:text-blue-400" />
                  Advantages
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                  {advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                </ul>
              </div>
              
              <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300">
                  <Zap className="mr-2 size-5 text-blue-600 dark:text-blue-400" />
                  Disadvantages
                </h3>
                <ul className="list-disc space-y-2 pl-5 text-slate-700 dark:text-slate-300">
                  {disadvantages.map((disadvantage, index) => (
                    <li key={index}>{disadvantage}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
              <h3 className="mb-3 flex items-center text-xl font-bold text-blue-700 dark:text-blue-300">
                <Lightbulb className="mr-2 size-5 text-blue-600 dark:text-blue-400" />
                When to Use {name}
              </h3>
              <div className="text-slate-700 dark:text-slate-300">
                <p className="mb-3">
                  {whenToUse.intro}
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  {whenToUse.scenarios.map((scenario, index) => (
                    <li key={index}>{scenario}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Step by step example if provided */}
            {algorithmData.example && (
              <div className="mt-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                  dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                <h3 className="mb-3 text-xl font-bold text-blue-700 dark:text-blue-300">Step-by-Step Example</h3>
                <p className="mb-4 text-slate-700 dark:text-slate-300">
                  {algorithmData.example.intro}
                </p>
                
                <div className="space-y-4">
                  {algorithmData.example.steps.map((step, index) => (
                    <Card key={index} className="border-blue-100 dark:border-gray-700">
                      <CardHeader className="bg-blue-50 pb-2 dark:bg-gray-700">
                        <CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4 text-sm dark:bg-gray-800">
                        <p className="mb-2 text-slate-700 dark:text-slate-300">{step.startState}</p>
                        
                        {step.operations && (
                          <ul className="space-y-1 text-slate-600 dark:text-slate-400">
                            {step.operations.map((op, idx) => (
                              <li key={idx} dangerouslySetInnerHTML={{ __html: op }} />
                            ))}
                          </ul>
                        )}
                        
                        {step.endState && (
                          <p className="mt-2 text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: step.endState }} />
                        )}
                        
                        {step.note && (
                          <p className="mt-1 text-xs italic text-slate-500 dark:text-slate-500">{step.note}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="code">
          <div className="space-y-6">
            <h2 className="mb-4 flex items-center text-2xl font-bold text-blue-800 dark:text-blue-300">
              <Code className="mr-2 size-6 text-blue-600 dark:text-blue-400" />
              {name} Implementation
            </h2>
            <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
              Check out these implementations of {name} in different programming languages.
            </p>
            
            {CodeSnippetsAll[algorithmSlug] ? (
              <CodeTab codeSnippets={CodeSnippetsAll[algorithmSlug]} />
            ) : (
              <div className="rounded bg-blue-50 p-4 text-blue-700 dark:bg-gray-700 dark:text-blue-300">
                No code examples available yet.
              </div>
            )}
            
            {/* Variants and optimizations */}
            {variants && variants.length > 0 && (
              <Accordion type="single" collapsible className="mt-8 w-full">
                {variants.map((variant, index) => (
                  <AccordionItem key={index} value={`variant-${index}`} className="dark:border-gray-700">
                    <AccordionTrigger className="text-lg font-medium text-blue-700 dark:text-blue-300">
                      <div className="flex items-center">
                        {variant.icon ? (
                          <variant.icon className="mr-2 size-5" />
                        ) : (
                          <RefreshCw className="mr-2 size-5" />
                        )}
                        {variant.name}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm
                          dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                        <p className="mb-4 text-slate-700 dark:text-slate-300">
                          {variant.description}
                        </p>
                        
                        {variant.code && (
                          <div className="overflow-auto rounded-md bg-gray-900 p-4 font-mono text-sm text-gray-100">
                            <pre>{variant.code}</pre>
                          </div>
                        )}
                        
                        {variant.benefits && (
                          <div className="mt-4">
                            <h4 className="mb-2 text-base font-medium text-blue-700 dark:text-blue-300">Benefits</h4>
                            <div className="rounded bg-blue-50 p-3 text-sm text-slate-700 dark:bg-gray-700 dark:text-slate-300">
                              <ul className="list-disc space-y-1 pl-5">
                                {variant.benefits.map((benefit, idx) => (
                                  <li key={idx}>{benefit}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            )}
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-12 rounded-lg border border-blue-100 bg-white p-6 shadow-sm
          dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <h2 className="mb-4 flex items-center text-2xl font-bold text-blue-800 dark:text-blue-300">
          <BarChart3 className="mr-2 size-6 text-blue-600 dark:text-blue-400" />
          Comparison with Other Sorting Algorithms
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-blue-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Algorithm</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Best Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Average Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Worst Case</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Space</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-300">Stable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
              {Object.values(sortingAlgorithmsData).map((algorithm, index) => (
                <tr 
                  key={index} 
                  className={`${algorithm.name === name ? 'bg-blue-50 dark:bg-gray-700' : 'dark:hover:bg-gray-700'}`}
                >
                  <td className={`whitespace-nowrap px-6 py-4 font-medium ${algorithm.name === name ? 'text-blue-700 dark:text-blue-300' : 'text-gray-700 dark:text-slate-300'}`}>
                    {algorithm.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 dark:text-slate-300">{algorithm.timeComplexity.best}</td>
                  <td className="whitespace-nowrap px-6 py-4 dark:text-slate-300">{algorithm.timeComplexity.average}</td>
                  <td className="whitespace-nowrap px-6 py-4 dark:text-slate-300">{algorithm.timeComplexity.worst}</td>
                  <td className="whitespace-nowrap px-6 py-4 dark:text-slate-300">{algorithm.spaceComplexity}</td>
                  <td className="whitespace-nowrap px-6 py-4 dark:text-slate-300">{algorithm.stable ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Educational resources */}
      <div className="mt-8 rounded-lg border border-blue-100 bg-white p-6 shadow-sm
          dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
        <h2 className="mb-4 text-xl font-bold text-blue-800 dark:text-blue-300">Educational Resources</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="dark:bg-gray-850 rounded border border-blue-50 p-4 dark:border-gray-700">
            <h3 className="mb-2 text-lg font-medium text-blue-700 dark:text-blue-300">Further Reading</h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Introduction to Algorithms (CLRS)</a></li>
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Donald Knuth: The Art of Computer Programming</a></li>
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Sorting Algorithms Visualizations</a></li>
            </ul>
          </div>
          <div className="dark:bg-gray-850 rounded border border-blue-50 p-4 dark:border-gray-700">
            <h3 className="mb-2 text-lg font-medium text-blue-700 dark:text-blue-300">Practice Problems</h3>
            <ul className="list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-300">
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Implement {name} variations</a></li>
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Compare {name} with other algorithms</a></li>
              <li><a href="#" className="text-blue-600 hover:underline dark:text-blue-400">Optimize {name} for specific data patterns</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SortingAlgorithmPage