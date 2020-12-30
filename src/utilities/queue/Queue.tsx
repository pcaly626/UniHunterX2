
class Queue {
    queue = [];
    private indexOfQueue = 0;

    /**
     * Add to the queue
     * @param value {any}
     */
    enqueue( value : any ) {
        this.queue.push(value);
    } 

    /**
     * Remove from queue
     * @return first value in queue
     */
    dequeue( ) {
        return this.queue.shift()
    }

    /**
     * length of queue
     * @return {number} length of queue
     */
    length() {
        return this.queue.length;
    }

    /**
     * Look at top element
     * @return {any} first value
     */
    peek() {
        return !this.isEmpty() ? this.queue[0] : undefined;
    }


    /**
     * Check if queue is empty
     * @return {bool} true if empty else false
     */
    isEmpty() {
        return this.queue.length == 0;
    }

    cycleForward(){
        if( this.isEmpty()){
            return false;
        }

        let newQueue : any = []
        let temp = this.queue[0]
        for(let i = 1; i < this.length() ; i++ ) {
            newQueue.push(this.queue[i]);
        }
        newQueue.push(temp)
        this.queue = newQueue;
    }

    cycleBack(){
        if( this.isEmpty()){
            return false;
        }
        let newQueue : any = []
        newQueue.push(this.queue[this.length() - 1])
        for(let i = 0; i < this.length() -1 ; i++ ) {
            newQueue.push(this.queue[i]);
        }
        this.queue = newQueue;
    }

    next() {
        this.indexOfQueue++;
        if(this.indexOfQueue >= this.length() && !this.isEmpty()) {
            this.indexOfQueue = 0;
        }
        return this.queue[this.indexOfQueue];
    }

    hasNext() {
        if(this.isEmpty())
            return false;

        return this.indexOfQueue < this.length();
    }

    current() {
        return this.indexOfQueue;
    }

    getQueue() {
        return this.queue;
    }

    copy() {
        return [...this.queue];
    }
}

export default Queue;