export class Game {
    #settings;

    setSettings = (settings) => {
        this.#settings = settings
    }

    getSettings = () => {
        return this.#settings
    }
}
