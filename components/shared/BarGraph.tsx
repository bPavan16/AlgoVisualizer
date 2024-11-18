"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

export interface chartDataProps {
    bar: number
    color?: string
}

export let initchartData: chartDataProps[] = []

function generateRandomChartData(numValues: number): chartDataProps[] {
    const randomData: chartDataProps[] = [];
    for (let i = 0; i < numValues; i++) {
        randomData.push({ bar: Math.floor(Math.random() * 100) + 1 });
    }
    return randomData;
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

interface BarchartProps {

    sortfunction: (data: chartDataProps[], setChartData: React.Dispatch<React.SetStateAction<chartDataProps[]>>, delay: number) => Promise<chartDataProps[]>;

}

export const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
} satisfies ChartConfig

export function Barchart({ sortfunction }: BarchartProps) {


    const [chartData, setChartData] = useState<chartDataProps[]>(generateRandomChartData(30));
    const [delay, setDelay] = useState(200)
    const [randomCount, setRandomCount] = useState(30)

    const handleSortData = () => {
        sortfunction(chartData, setChartData, delay); // Adjust the delay as needed
    };


    const handleButtonClick = () => {
        if (randomCount < 5)
            setRandomCount(5);
        else if (randomCount > 200)
            setRandomCount(200);
        const newChartData = generateRandomChartData(randomCount);
        setChartData(newChartData);
    };


    return (
        <div>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <Bar dataKey="bar" fill="#2976f1" className="transition-transform duration-500" radius={6} />
                </BarChart>
            </ChartContainer>

            <div className="mt-4 flex items-center gap-4 sm:flex-row">
                <Input
                    type="number"
                    className="w-32 rounded-md border border-gray-300 bg-black p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-black"
                    value={randomCount}
                    max={200}

                    min={5}
                    onChange={(e) => setRandomCount(Number(e.target.value))}
                />
                <Button
                    onClick={handleButtonClick}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Generate Random Data
                </Button>
                <Button
                    onClick={handleSortData}
                    className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Sort Data
                </Button>
                <Input
                    type="number"
                    className="w-32 rounded-md border border-gray-300 bg-black p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-white dark:text-black"
                    value={delay}

                    min={200}
                    onChange={(e) => setDelay(Number(e.target.value))}
                />
            </div>


        </div>
    )
}
