"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const SortingAlgorithmContent: { title: string; href: string; description: string }[] = [
    {
        title: "Bubble Sort",
        href: "/sorts/bubble",
        description: "A simple sort algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.",
    },
    {
        title: "Selection Sort",
        href: "/sorts/selection",
        description: "An in-place comparison sort. It checks for the smallest element in the array and swaps it with the first element.",
    },
    {
        title: "Merge Sort",
        href: "/sorts/merge",
        description: "Merge sort is a divide and conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
    },
    {
        title: "Quick Sort",
        href: "/sorts/quick",
        description: "Quick sort is a divide and conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.",
    },
    {
        title: "Insertion Sort",
        href: "/sorts/insertion",
        description: "Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time.",
    },
    {
        title: "Heap Sort",
        href: "/sorts/heap",
        description: "Heap sort is a comparison-based sorting technique based on Binary Heap data structure.",
    },
];

export function NavigationMenuMain() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex size-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Icons.logo className="size-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            shadcn/ui
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beautifully designed components built with Radix UI and
                                            Tailwind CSS.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/docs" title="Introduction">
                                Re-usable components built using Radix UI and Tailwind CSS.
                            </ListItem>
                            <ListItem href="/docs/installation" title="Installation">
                                How to install dependencies and structure your app.
                            </ListItem>
                            <ListItem href="/docs/primitives/typography" title="Typography">
                                Styles for headings, paragraphs, lists...etc
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>


                    <NavigationMenuTrigger>Sorting Algorithms</NavigationMenuTrigger>


                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-4 lg:w-[1000px] lg:grid-cols-3 ">
                            {SortingAlgorithmContent.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>



                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Backtracking Visualizer</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-2">
                            <ListItem href="/sudoku" title="Sudoku Solver">
                                Visualize the process of solving a Sudoku puzzle step by step.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
               
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={props.href as string}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className="text text-sm font-medium leading-none dark:text-white">{title}</div>
                    <p className="text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
ListItem.displayName = "ListItem"


