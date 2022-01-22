import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp component tests', () => {
  
    test('should create GifExpertApp component', () => {
        const wrapper = shallow( <GifExpertApp /> );
        expect(wrapper).toMatchSnapshot();
    });

    test('should first', () => {
        const categories = ['Dragon Ball', 'One Punch'];
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    

});
