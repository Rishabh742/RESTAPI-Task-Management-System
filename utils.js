
Step 7: Implement Min-Heap for Task Sorting

      We use a priority queue (Min-Heap) to sort tasks dynamically.

      📄 utils/priorityQueue.js

        class MinHeap {
  
		constructor() {
    
		this.heap = [];
  	}

 	 insert(task) {
    
	this.heap.push(task);
    
	this.heap.sort((a, b) => a.priority.localeCompare(b.priority) || a.createdAt - b.createdAt);
  	
	}

  	getHighestPriorityTask() {
    
	return this.heap.length ? this.heap[0] : null;
  	}
     }

    module.exports = MinHeap;
