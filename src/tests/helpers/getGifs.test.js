import { getGifs } from "../../helpers/getGifs";

describe('GetGifs fetch function tests', () => {

    test('should bring 10 elements', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBe(10);
    })
    
});

