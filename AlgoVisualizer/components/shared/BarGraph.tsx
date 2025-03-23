"use client"

import { Bar, BarChart, Tooltip } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"
import { Button } from "../ui/button"
import { useState, useEffect } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Loader2 } from "lucide-react"

export interface ChartDataProps {
    bar: number
    color?: string
}

// Constants
const DEFAULT_ARRAY_SIZE = 30
const MIN_ARRAY_SIZE = 5
const MAX_ARRAY_SIZE = 200
const DEFAULT_DELAY = 200
const MIN_DELAY = 10

// Scale delay based on array size
function calculateProportionateDelay(delay: number, arraySize: number): number {
    // For smaller arrays, use closer to full delay
    // For larger arrays, reduce delay proportionately
    const sizeRatio = (arraySize - MIN_ARRAY_SIZE) / (MAX_ARRAY_SIZE - MIN_ARRAY_SIZE)
    const scaleFactor = 1 - (sizeRatio * 0.8) // Scale down to 20% of original delay for max size
    return Math.max(MIN_DELAY, Math.floor(delay * scaleFactor));
}

function generateRandomChartData(numValues: number): ChartDataProps[] {
    const randomData: ChartDataProps[] = []
    for (let i = 0; i < numValues; i++) {
        randomData.push({ bar: Math.floor(Math.random() * 100) + 1 })
    }
    return randomData
}

export function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

interface BarchartProps {
    sortfunction: (
        data: ChartDataProps[],
        setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>,
        delay: number
    ) => Promise<ChartDataProps[]>
}

export const chartConfig = {
    desktop: {
        label: "Array Elements",
        color: "#2563eb",
    },
} satisfies ChartConfig

export function Barchart({ sortfunction }: BarchartProps) {
    const [chartData, setChartData] = useState<ChartDataProps[]>(generateRandomChartData(DEFAULT_ARRAY_SIZE))
    const [delay, setDelay] = useState(DEFAULT_DELAY)
    const [arraySize, setArraySize] = useState(DEFAULT_ARRAY_SIZE)
    const [isSorting, setIsSorting] = useState(false)
    const [effectiveDelay, setEffectiveDelay] = useState(delay)
    
    // Update effective delay whenever array size or base delay changes
    useEffect(() => {
        setEffectiveDelay(calculateProportionateDelay(delay, arraySize))
    }, [delay, arraySize])

    const handleSortData = async () => {
        setIsSorting(true)
        try {
            await sortfunction(chartData, setChartData, effectiveDelay)
        } catch (error) {
            console.error("Sorting error:", error)
        } finally {
            setIsSorting(false)
        }
    }

    const handleGenerateData = () => {
        const size = Math.min(Math.max(arraySize, MIN_ARRAY_SIZE), MAX_ARRAY_SIZE)
        setArraySize(size)
        setChartData(generateRandomChartData(size))
    }

    return (
        <div className="space-y-6">
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
                <BarChart
                    accessibilityLayer
                    data={chartData}
                >
                    <Tooltip
                        formatter={(value) => [`Value: ${value}`, 'Element']}
                        labelFormatter={() => ''}
                    />
                    <Bar
                        dataKey="bar"
                        fill="#2976f1"
                        className="transition-transform duration-300"
                        radius={6}
                        animationDuration={300}
                    />
                </BarChart>
            </ChartContainer>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                    <Label htmlFor="array-size">Array Size</Label>
                    <div className="flex items-center gap-2">
                        <Input
                            id="array-size"
                            type="number"
                            className="w-full"
                            value={arraySize}
                            max={MAX_ARRAY_SIZE}
                            min={MIN_ARRAY_SIZE}
                            disabled={isSorting}
                            onChange={(e) => setArraySize(Number(e.target.value))}
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="delay">Base Delay (ms) <span className="mt-1 text-xs text-muted-foreground">
                            Effective: {effectiveDelay}ms
                        </span></Label>
                    <div className="flex flex-col">
                        <Input
                            id="delay"
                            type="number"
                            className="w-full"
                            value={delay}
                            min={MIN_DELAY}
                            disabled={isSorting}
                            onChange={(e) => setDelay(Number(e.target.value))}
                        />
                        
                    </div>
                </div>

                <Button
                    onClick={handleGenerateData}
                    className="h-10 self-end"
                    disabled={isSorting}
                    variant="outline"
                >
                    Generate New Array
                </Button>

                <Button
                    onClick={handleSortData}
                    className="h-10 self-end"
                    disabled={isSorting}
                >
                    {isSorting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sorting...
                        </>
                    ) : (
                        "Sort Array"
                    )}
                </Button>
            </div>
        </div>
    )
}