// I don't like the idea of Arrays encapsulating Queues, so I made it my own class for TS/JS
// This will mainly be used for BFS in goalSystem.ts 

export class Queue<T> {
    private objects: T[] = [];


    add(object: T): void {
        this.objects.push(object);
    }

    remove(): T | undefined {
        return this.objects.shift();
    }

    get size(): number {
        return this.objects.length;
    }

    get isEmpty(): boolean {
        return this.objects.length === 0;
    }
}