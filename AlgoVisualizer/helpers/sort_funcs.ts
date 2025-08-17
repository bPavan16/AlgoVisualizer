"use client"

import { ChartDataProps, sleep } from "../components/shared/BarGraph";

export async function bubbleSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number) {
    const sortedData = [...data];
    let n = sortedData.length;
    let swapped: boolean;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (sortedData[i].bar > sortedData[i + 1].bar) {
                [sortedData[i], sortedData[i + 1]] = [sortedData[i + 1], sortedData[i]];
                swapped = true;
                setChartData([...sortedData]);
                await sleep(delay);
            }
        }
        n--;
    } while (swapped);
    return sortedData;
}


export async function selectionSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number) {
    const sortedData = [...data];
    let n = sortedData.length;

    for (let i = 0; i < n - 1; i++) {
        let min_idx = i;

        for (let j = i + 1; j < n; j++) {
            if (sortedData[j].bar < sortedData[min_idx].bar) {
                min_idx = j;
            }
        }

        let temp = sortedData[i].bar;
        sortedData[i].bar = sortedData[min_idx].bar;
        sortedData[min_idx].bar = temp;

        setChartData([...sortedData]);
        await sleep(delay/2);
    }
    return sortedData;
}

export async function mergeSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number): Promise<ChartDataProps[]> {
    const sortedData = [...data];

    async function mergeSortHelper(arr: ChartDataProps[], start: number, end: number): Promise<void> {
        if (start >= end) return;

        const mid = Math.floor((start + end) / 2);
        await mergeSortHelper(arr, start, mid);
        await mergeSortHelper(arr, mid + 1, end);
        await merge(arr, start, mid, end);
    }

    async function merge(arr: ChartDataProps[], start: number, mid: number, end: number): Promise<void> {
        const left = arr.slice(start, mid + 1);
        const right = arr.slice(mid + 1, end + 1);

        let i = 0, j = 0, k = start;

        // playBeep(audioContext, 640, 100); // Play beep sound


        while (i < left.length && j < right.length) {
            if (left[i].bar <= right[j].bar) {
                arr[k] = left[i];
                i++;
            } else {
                arr[k] = right[j];
                j++;
            }
            k++;
            setChartData([...arr]);
            // playBeep(audioContext, 640, 200); // Play beep sound
            await sleep(delay / 2);
        }

        while (i < left.length) {
            arr[k] = left[i];
            i++;
            k++;
            setChartData([...arr]);
            // playBeep(audioContext, 640, 100); // Play beep sound
            await sleep(delay / 2);
        }

        while (j < right.length) {
            arr[k] = right[j];
            j++;
            k++;
            setChartData([...arr]);
            await sleep(delay / 2);
        }
        // playBeep(audioContext, 640, 100); // Play beep sound
    }

    await mergeSortHelper(sortedData, 0, sortedData.length - 1);
    return sortedData;
}


export async function heapSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number) {
    const sortedData = [...data];
    let n = sortedData.length;

    const heapify = async (arr: ChartDataProps[], length: number, i: number) => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < length && arr[left].bar > arr[largest].bar) {
            largest = left;
        }

        if (right < length && arr[right].bar > arr[largest].bar) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            setChartData([...arr]);
            await sleep(delay/2);
            await heapify(arr, length, largest);
        }
    };

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(sortedData, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [sortedData[0], sortedData[i]] = [sortedData[i], sortedData[0]];
        setChartData([...sortedData]);
        await sleep(delay);
        await heapify(sortedData, i, 0);
    }

    return sortedData;
}

export async function quickSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number): Promise<ChartDataProps[]> {
    const sortedData = [...data];

    async function quickSortHelper(arr: ChartDataProps[], low: number, high: number): Promise<void> {
        if (low < high) {
            const pi = await partition(arr, low, high);
            await quickSortHelper(arr, low, pi - 1);
            await quickSortHelper(arr, pi + 1, high);
        }
    }

    async function partition(arr: ChartDataProps[], low: number, high: number): Promise<number> {
        const pivot = arr[high].bar;
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (arr[j].bar < pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setChartData([...arr]);
                await sleep(delay);
            }
        }

        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        setChartData([...arr]);
        await sleep(delay/2);
        return i + 1;
    }

    await quickSortHelper(sortedData, 0, sortedData.length - 1);
    return sortedData;
}

export async function insertionSort(data: ChartDataProps[], setChartData: React.Dispatch<React.SetStateAction<ChartDataProps[]>>, delay: number) {
    const sortedData = [...data];
    let n = sortedData.length;

    for (let i = 1; i < n; i++) {
        let key = sortedData[i];
        let j = i - 1;

        while (j >= 0 && sortedData[j].bar > key.bar) {
            sortedData[j + 1] = sortedData[j];
            j = j - 1;
            setChartData([...sortedData]);
            await sleep(delay);
        }
        sortedData[j + 1] = key;
        setChartData([...sortedData]);
        await sleep(delay/2);
    }
    return sortedData;
}
// Function to get appropriate sort function based on algorithm name
export const getSortFunction = (algorithm: string) => {
    switch (algorithm) {
      case 'bubble':
        return bubbleSort;
      case 'quick':
        return quickSort;
      case 'merge':
        return mergeSort;
      case 'insertion':
        return insertionSort;
      case 'selection':
        return selectionSort;
      case 'heap':
        return heapSort;
      default:
        return null;
    }
  };