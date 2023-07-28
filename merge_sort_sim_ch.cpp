#include<iostream>
#include<bits/stdc++.h>
using namespace std;

void merge(int arr[], int start, int mid, int end) {
    int n1 = mid - start + 1;
    int n2 = end - mid;

    int a[n1];
    int b[n2];

    for (int i = 0; i < n1; i++) {
        a[i] = arr[start + i];
    }
    for (int i = 0; i < n2; i++) {
        b[i] = arr[mid + 1 + i];
    }

    int i = 0;
    int j = 0;
    int k = start;

    while (i < n1 && j < n2) {
        if (a[i] < b[j]) {
            arr[k] = a[i];
            k++;
            i++;
        }
        else {
            arr[k] = b[j];
            k++;
            j++;
        }
    }

    while (i < n1) {
        arr[k] = a[i];
        k++;
        i++;
    }

    while (j < n2) {
        arr[k] = b[j];
        k++;
        j++;
    }
}

void mergesort(int arr[], int start, int end) {
    if (start < end) {
        int mid = start + (end - start) / 2; // Corrected calculation of mid
        mergesort(arr, start, mid);
        mergesort(arr, mid + 1, end);

        merge(arr, start, mid, end);
    }

}

int main() {
    int n;
    cin >> n;
    int a[n];
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }
    mergesort(a, 0, n - 1); // Pass n-1 as the end index instead of n

    for (int i = 0; i < n; i++) {
        cout << a[i] << " ";
    }

    cout << endl;
    return 0;
}
