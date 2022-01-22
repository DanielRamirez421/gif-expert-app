import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('useFetch hook tests', () => {
  
    test('should return initial state', async() => {
        const  { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dragon Ball') );
        const { data:images, loading } = result.current;
        await waitForNextUpdate();
        expect(images).toEqual([]);
        expect(loading).toBeTruthy();
    });
    
    test('should return an images array and a false', async () => {
        const  { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Dragon Ball') );
        await waitForNextUpdate();
        const { data:images, loading } = result.current;
        expect( images.length ).toBe(10);
        expect( loading ).toBe( false );
    });
    
});
