
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

    /**
     * Creates a list the moves all elements forward and first element at the end
     */
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

    /**
     * Creates a list the moves all elements back and last element at the front
     */
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

    /**
     * Iterate to next queue entry
     * @return next element or null if at the end
     */
    next() {
        this.indexOfQueue++;
        if(this.indexOfQueue >= this.length() || this.isEmpty()) {
            return null;
        }
        return this.queue[this.indexOfQueue];
    }

    /**
     * Resets iterator to first element
     */
    reset() {
        this.indexOfQueue = 0
    }

    /**
     * Checks to see if there is a next entry
     * @return {bool}
     */
    hasNext() {
        if(this.isEmpty())
            return false;

        return this.indexOfQueue < this.length();
    }

    /**
     * Current Index
     * @return index of queue
     */
    currentIndex() {
        return this.indexOfQueue;
    }

    /**
     * Returns the queue as an array
     */
    getQueue() {
        return this.queue;
    }

    /**
     * Deep copy of queue
     * @return {Queue} new instance of Queue with current elements
     */
    copy() {
        let newQueue = new Queue();
        for(let i = 0; i < this.length(); i++){
            newQueue.enqueue(this.queue[i])
        } 
        return newQueue;
    }
}

export default Queue;