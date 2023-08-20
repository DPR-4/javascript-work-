#include<iostream>
#include<bits/stdc++.h>
using namespace std;

int main(){
    vector<int>v;

    v.push_back(12);
    v.push_back(13);
    v.push_back(14);
    v.push_back(17);
    v.push_back(10);

    // cout<<"the size before deletion "<<v.size()<<endl;
    // v.erase(v.begin());
   
    // cout<<"the size after deletion "<<v.size()<<endl;

    
    
    for(int i=0;i<v.size();i++){
        v.erase(v.begin());
        cout<<v[i]<<": i :"<<i<<endl;
    }


    return 0;
}