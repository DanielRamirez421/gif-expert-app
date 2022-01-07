import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component file test', () => {
   
    const setCategories = () => {};
    const wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    test('should show AddCategory component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should change input element', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo!';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );

    });
    

});
