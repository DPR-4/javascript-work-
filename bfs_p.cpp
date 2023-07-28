#include <iostream>
#include <queue>
#include <vector>
#include <omp.h>
#include<stdlib.h>

#define NUM_THREADS 4 // Number of threads to use

using namespace std;

vector<vector<int>> graph; // Adjacency list representation of the graph
vector<bool> visited;      // Boolean array to track visited nodes

void bfs(int source)
{
    queue<int> q;
    q.push(source);
    visited[source] = true;

    while (!q.empty())
    {
        int current = q.front();
        q.pop();
        cout << "Visited: " << current << " (Thread " << omp_get_thread_num() << ")" << endl;

        // Traverse all neighboring nodes of the current node
        #pragma omp parallel for
        for (size_t i = 0; i < graph[current].size(); ++i)
        {
            int neighbor = graph[current][i];

            // If the neighbor hasn't been visited, mark it as visited and enqueue it
            if (!visited[neighbor])
            {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
}

int main()
{
    int numNodes, numEdges;
    cout << "Enter the number of nodes: ";
    cin >> numNodes;
    cout << "Enter the number of edges: ";
    cin >> numEdges;

    // Initialize the graph and visited array
    graph.resize(numNodes);
    visited.resize(numNodes, false);

    // Input the edges of the graph
    cout << "Enter the edges (node u to node v):" << endl;
    for (int i = 0; i < numEdges; ++i)
    {
        int u, v;
        cin >> u >> v;
        graph[u].push_back(v);
        graph[v].push_back(u);
    }

    // Perform BFS from node 0
    omp_set_num_threads(NUM_THREADS);
    #pragma omp parallel
    {
        #pragma omp single nowait
        bfs(0);
    }

    return 0;
}
