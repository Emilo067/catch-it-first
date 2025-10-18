import {Game} from "./game"

describe('game tests', () => {
    it('init game', () => {
        const game = new Game()

        game.setSettings ({
            gridSize: {
                rows: 4,
                columns: 5
            }
        })

        const settings = game.getSettings()

        expect(settings.gridSize.rows).toBe(4)
        expect(settings.gridSize.columns).toBe(5)
    })
})
