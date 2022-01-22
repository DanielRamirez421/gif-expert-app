import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('GifExpertApp tests', () => {
  
    const wrapper = shallow( <GifExpertApp /> );

    test('should create GifExpertApp component', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
