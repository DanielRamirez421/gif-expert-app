import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';

import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')


describe('GifGrid tests', () => {
  
    const initialCategory = 'One punch';

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create GifGrid component', () => {

        const imgsMockAns = [
            {
                id: '1',
                title: 'titleImg1',
                url: 'http://localhost/fernando.course',
            },
            {
                id: '2',
                title: 'titleImg2',
                url: 'http://localhost/fernando.course',
            }
        ];

        useFetchGifs.mockReturnValue({
            data: imgsMockAns,
            loading: false
        });

        const wrapper = shallow( <GifGrid category={ initialCategory } /> );
        
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBeFalsy();

        expect(wrapper.find('GifGridItem').exists()).toBeTruthy();
        expect(wrapper.find('GifGridItem').length).toBe(imgsMockAns.length);
    });

});
