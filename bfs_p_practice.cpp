#include<iostream>
#include<bits/stdc++.h>
using namespace std;
const int n=1e5+2;
bool vis[n];
vector<int>adj[n];
int main(){
    
    for(int i=0;i<n;i++){
        vis[i]=false;
    }
    int m,n;
    cin>>m>>n;
    for(int i=0;i<m;i++){
        int x,y;
        cin>>x>>y;
        adj[x].push_back(y);
        adj[y].push_back(x);
    }

    queue<int>q;
    q.push(1);
    vis[1]=true;

    #pragma omp parallel
    {
        while(!q.empty()){
            int node=q.front();
            q.pop();

            cout<<node<<endl;

            for(int i=0;i<adj[node].size();i++){
                int nei=adj[node][i];
                if(!vis[nei]){
                    vis[nei]=true;
                    q.push(nei);
                }
            }
        }
    }
    return 0;
}