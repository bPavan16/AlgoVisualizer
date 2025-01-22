

export const CodeSnippetsAll = {
    BubbleSort: {
        "C": `#include <stdio.h>

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    printf("Sorted array: \\n");
    printArray(arr, n);
    return 0;
}`,

        "C++": `#include <iostream>
using namespace std;

void bubbleSort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main() {
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
    int n = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr, n);
    cout << "Sorted array: \\n";
    printArray(arr, n);
    return 0;
}`,

        "Python": `
def bubbleSort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

def printArray(arr):
    for i in range(len(arr)):
        print("%d" % arr[i], end=" ")
    print()

if __name__ == "__main__":
    arr = [64, 34, 25, 12, 22, 11, 90]
    bubbleSort(arr)
    print("Sorted array:")
    printArray(arr)
`,

        "Java": `
public class BubbleSort {
    public static void bubbleSort(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n-1; i++) {
            for (int j = 0; j < n-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
    }

    public static void printArray(int arr[]) {
        int n = arr.length;
        for (int i = 0; i < n; ++i) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    public static void main(String args[]) {
        int arr[] = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("Sorted array:");
        printArray(arr);
    }
}
`,
        "JavaScript": `
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n-1; i++) {
        for (let j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

function printArray(arr) {
    console.log(arr.join(" "));
}

let arr = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(arr);
console.log("Sorted array:");
printArray(arr);
`

    },


    SelectionSort: {
        "C": `#include <stdio.h>

void selectionSort(int arr[], int n) {
for (int i = 0; i < n-1; i++) {
    int min_idx = i;
    for (int j = i+1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
    }
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
}
}

void printArray(int arr[], int size) {
for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
}
printf("\\n");
}

int main() {
int arr[] = {64, 25, 12, 22, 11};
int n = sizeof(arr)/sizeof(arr[0]);
selectionSort(arr, n);
printf("Sorted array: \\n");
printArray(arr, n);
return 0;
}`,

        "C++": `#include <iostream>
using namespace std;

void selectionSort(int arr[], int n) {
for (int i = 0; i < n-1; i++) {
    int min_idx = i;
    for (int j = i+1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
    }
    int temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
}
}

void printArray(int arr[], int size) {
for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
}
cout << endl;
}

int main() {
int arr[] = {64, 25, 12, 22, 11};
int n = sizeof(arr)/sizeof(arr[0]);
selectionSort(arr, n);
cout << "Sorted array: \\n";
printArray(arr, n);
return 0;
}`,

        "Python": `
def selectionSort(arr):
for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]

def printArray(arr):
for i in range(len(arr)):
    print("%d" % arr[i], end=" ")
print()

if __name__ == "__main__":
arr = [64, 25, 12, 22, 11]
selectionSort(arr)
print("Sorted array:")
printArray(arr)
`,

        "Java": `
public class SelectionSort {
public static void selectionSort(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        int min_idx = i;
        for (int j = i+1; j < n; j++) {
            if (arr[j] < arr[min_idx]) {
                min_idx = j;
            }
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

public static void printArray(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; ++i) {
        System.out.print(arr[i] + " ");
    }
    System.out.println();
}

public static void main(String args[]) {
    int arr[] = {64, 25, 12, 22, 11};
    selectionSort(arr);
    System.out.println("Sorted array:");
    printArray(arr);
}
}
`,

        "JavaScript": `
function selectionSort(arr) {
let n = arr.length;
for (let i = 0; i < n-1; i++) {
    let min_idx = i;
    for (let j = i+1; j < n; j++) {
        if (arr[j] < arr[min_idx]) {
            min_idx = j;
        }
    }
    let temp = arr[min_idx];
    arr[min_idx] = arr[i];
    arr[i] = temp;
}
}

function printArray(arr) {
console.log(arr.join(" "));
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr);
console.log("Sorted array:");
printArray(arr);
`
    },

    MergeSort: {
        "C": `#include <stdio.h>

void merge(int arr[], int l, int m, int r) {
int n1 = m - l + 1;
int n2 = r - m;
int L[n1], R[n2];

for (int i = 0; i < n1; i++)
    L[i] = arr[l + i];
for (int j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

int i = 0, j = 0, k = l;
while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
    } else {
        arr[k] = R[j];
        j++;
    }
    k++;
}

while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
}

while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
}
}

void mergeSort(int arr[], int l, int r) {
if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
}

void printArray(int arr[], int size) {
for (int i = 0; i < size; i++) {
    printf("%d ", arr[i]);
}
printf("\\n");
}

int main() {
int arr[] = {12, 11, 13, 5, 6, 7};
int arr_size = sizeof(arr) / sizeof(arr[0]);
printf("Given array is \\n");
printArray(arr, arr_size);
mergeSort(arr, 0, arr_size - 1);
printf("\\nSorted array is \\n");
printArray(arr, arr_size);
return 0;
}`,

        "C++": `#include <iostream>
using namespace std;

void merge(int arr[], int l, int m, int r) {
int n1 = m - l + 1;
int n2 = r - m;
int L[n1], R[n2];

for (int i = 0; i < n1; i++)
    L[i] = arr[l + i];
for (int j = 0; j < n2; j++)
    R[j] = arr[m + 1 + j];

int i = 0, j = 0, k = l;
while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
    } else {
        arr[k] = R[j];
        j++;
    }
    k++;
}

while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
}

while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
}
}

void mergeSort(int arr[], int l, int r) {
if (l < r) {
    int m = l + (r - l) / 2;
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
}

void printArray(int arr[], int size) {
for (int i = 0; i < size; i++) {
    cout << arr[i] << " ";
}
cout << endl;
}

int main() {
int arr[] = {12, 11, 13, 5, 6, 7};
int arr_size = sizeof(arr) / sizeof(arr[0]);
cout << "Given array is \\n";
printArray(arr, arr_size);
mergeSort(arr, 0, arr_size - 1);
cout << "\\nSorted array is \\n";
printArray(arr, arr_size);
return 0;
}`,

        "Python": `
def merge(arr, l, m, r):
n1 = m - l + 1
n2 = r - m
L = arr[l:m+1]
R = arr[m+1:r+1]

i = j = 0
k = l
while i < n1 and j < n2:
    if L[i] <= R[j]:
        arr[k] = L[i]
        i += 1
    else:
        arr[k] = R[j]
        j += 1
    k += 1

while i < n1:
    arr[k] = L[i]
    i += 1
    k += 1

while j < n2:
    arr[k] = R[j]
    j += 1
    k += 1

def mergeSort(arr, l, r):
if l < r:
    m = l + (r - l) // 2
    mergeSort(arr, l, m)
    mergeSort(arr, m + 1, r)
    merge(arr, l, m, r)

def printArray(arr):
for i in range(len(arr)):
    print("%d" % arr[i], end=" ")
print()

if __name__ == "__main__":
arr = [12, 11, 13, 5, 6, 7]
print("Given array is")
printArray(arr)
mergeSort(arr, 0, len(arr) - 1)
print("Sorted array is")
printArray(arr)
`,

        "Java": `
public class MergeSort {
public static void merge(int arr[], int l, int m, int r) {
    int n1 = m - l + 1;
    int n2 = r - m;
    int L[] = new int[n1];
    int R[] = new int[n2];

    for (int i = 0; i < n1; ++i)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; ++j)
        R[j] = arr[m + 1 + j];

    int i = 0, j = 0;
    int k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

public static void mergeSort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}

public static void printArray(int arr[]) {
    int n = arr.length;
    for (int i = 0; i < n; ++i) {
        System.out.print(arr[i] + " ");
    }
    System.out.println();
}

public static void main(String args[]) {
    int arr[] = {12, 11, 13, 5, 6, 7};
    System.out.println("Given array is");
    printArray(arr);
    mergeSort(arr, 0, arr.length - 1);
    System.out.println("Sorted array is");
    printArray(arr);
}
}
`,

        "JavaScript": `
function merge(arr, l, m, r) {
let n1 = m - l + 1;
let n2 = r - m;
let L = arr.slice(l, m + 1);
let R = arr.slice(m + 1, r + 1);

let i = 0, j = 0, k = l;
while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
    } else {
        arr[k] = R[j];
        j++;
    }
    k++;
}

while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
}

while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
}
}

function mergeSort(arr, l, r) {
if (l < r) {
    let m = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, m);
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
}
}

function printArray(arr) {
console.log(arr.join(" "));
}

let arr = [12, 11, 13, 5, 6, 7];
console.log("Given array is");
printArray(arr);
mergeSort(arr, 0, arr.length - 1);
console.log("Sorted array is");
printArray(arr);
`
    }
}





























































































































































































































































































































































































































































