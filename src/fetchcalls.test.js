import { retrieveGames } from './fetchCalls';

describe('retrieveGames', () => {
    let mockResponse = [{
        title: "Smouha - Wadi Degla",
        embed: "url"
    },
    {
        title: "foster - barcelona",
        embed: "url"
    },
    ]

    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            });
        });
    });

    it('should be passed the correct url', () => {
        retrieveGames()
        expect(window.fetch).toHaveBeenCalledWith('https://www.scorebat.com/video-api/v1/');
    })

    it('should return an array of soccer games and highlights', () => {
        expect(retrieveGames()).resolves.toEqual(mockResponse);
    })

})
