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


