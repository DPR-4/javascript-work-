#include<iostream>
#include<bits/stdc++.h>
using namespace std;
const int n=1e5+2;
bool vis[n];
vector<int>adj[n];

void dfs(int node){

    //preorder
    vis[node]=1;
    cout<<node<<endl;

    //inorder
    #pragma omp parallel
    {

    #pragma omp for
    for(auto i = adj[node].begin(); i!=adj[node].end(); i++){
        if(!vis[*i]){
            dfs(*i);
        }
    }
    }
    //postorder;

}

int main(){
    for(int i=0;i<n;i++){
        vis[i]=false;
    }
    int n,m;
    cin>>m>>n;
    for(int i=0;i<m;i++){
        int x,y;
        cin>>x>>y;
        adj[x].push_back(y);
        adj[y].push_back(x);
    }
    dfs(1);
    return 0;
}