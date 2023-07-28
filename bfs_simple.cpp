#include<iostream>
#include<bits/stdc++.h>
using namespace std;
const int n=1e5+2;
bool vis[n];
vector<int>adj[n];

int main(){
    for(int i=0;i<n;i++){
        vis[i]=0;
    }

    int n,m;
    cin>>n>>m;

    for(int i=0;i<m;i++){
        int x,y;
        cin>>x>>y;
        adj[x].push_back(y);
        adj[y].push_back(x);
    }

    queue<int>q;
    q.push(1);
    vis[1]=true;

    while(!q.empty()){
        int node=q.front();
        q.pop();
        cout<<node<<endl;

        for(auto it=adj[node].begin();it!=adj[node].end();it++){
            if(!vis[*it]){
                vis[*it]=1;
                q.push(*it);
            }
        }
    }
    return 0;
}