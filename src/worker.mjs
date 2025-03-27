export default class MyWorker {
    constructor () {
        this.state = {};
        self.onmessage = this.handleMessage.bind(this);
    }

    handleMessage(event) {
        const { type, data } = event.data;
        let result;

        if (type === "calculate") {
            let start = 0;
            for (let end = 0; end < data.length; end++) {
                const segment = data.slice(start, end + 1);
                result = this.performCalculation(segment);

                setTimeout(() => {
                    console.log(`Sleeping for window: ${start}, ${end + 1}`), 2000
                })
                self.postMessage({ type: 'result', data: result });
            }
        }
    }

    /**
     * @param {number[]} numbers
     */
    performCalculation(numbers) {
        return numbers.reduce((sum, num) => sum + num, 0);
    }
}

new MyWorker();