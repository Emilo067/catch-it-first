export class Game {
    #settings;
    #status = 'pending'

    get status() {
        return this.#status
    }

    async start() {
        if(this.#status === 'pending') {
            this.#status = 'in-process'
        }
    }

    setSettings = (settings) => {
        this.#settings = settings
    }

    getSettings = () => {
        return this.#settings
    }
}
