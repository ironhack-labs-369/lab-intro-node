class SortedList {
    constructor() {
        (this.items = []), (this.length = this.items.length);
    }

    add(item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.length = this.items.length;
    }

    get(pos) {
        if (!this.items[pos]) {
            throw new Error('OutOfBounds');
        } else {
            return this.items[pos];
        }
    }

    max() {
        if (!this.items) {
            throw new Error('EmptySortedList');
        } else {
            return Math.max(this.items);
        }
    }

    min() {
        if (!this.items) {
            throw new Error('EmptySortedList');
        } else {
            return Math.min(this.items);
        }
    }

    sum() {
        if (!this.items) {
            return 0;
        } else {
            return this.items.reduce((acc, num) => acc + num);
        }
    }

    avg() {
        if (!this.items) {
            throw new Error('EmptySortedList');
        } else {
            return this.items.reduce((acc, num) => acc + num) / this.length;
        }
    }
}

module.exports = SortedList;
