import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('AddCategory component file test', () => {
   
    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

    beforeEach(() => {
        jest.clearAllMocks(); // clean simulations mocks
        wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
    });

    test('should show AddCategory component correctly', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('should change input element', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo!';
        input.simulate('change', { target: { value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    });

    test('Should not call onSubmit method', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });    
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('should call setCategories and clear input', () => {
        const value = 'One punch';
        wrapper.find('input').simulate('change', { target: { value } });
        wrapper.find('form').simulate ('submit', { preventDefault(){} });
        expect(setCategories).toBeCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');
        expect( setCategories ).toBeCalledWith( expect.any(Function) );
        // NOTE: Don't encapsule wrapper.find in a variable!!!!!!!!!
    });

});
