#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    int n=5;
    
    for(int i=1;i<n+1;i++){
        for(int k=1;k<=n-i;k++){
            cout<<" ";
            // cout<<" ";
        }
        for(int j=0;j<2 * i - 1;j++){
            cout<<"*";
        }
        cout<<endl;
    }
    return 0;
}