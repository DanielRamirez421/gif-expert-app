import { GifGridItem } from "../../components/GifGridItem"
import { shallow } from 'enzyme';

describe('Testing component GridItem', () => {
    
    const title = 'a title';
    const url = 'http://localhost/algo.jpg';
    let wrapper = shallow( <GifGridItem title={ title } url={ url }/> );

    test('should show GifFridItem component correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('should have a paragraph with title', () => {
        
        const p = wrapper.find('p');
        const valueTitle = p.text().trim();
        expect( valueTitle ).toBe( title );

    });
    
    test('should have as src the url and alt the image title', () => {

        const image = wrapper.find('img');
        const imageSrc = image.prop('src');
        const imageAlt = image.prop('alt');

        expect(imageSrc).toBe(url);
        expect(imageAlt).toBe(title);
        
    });

    test('should have a class named animate__fadeInUp', () => {
       
        const div = wrapper.find('div').at(0);
        const desiredClass = 'animate__fadeInUp';
        const divClassNames = div.prop( 'className' );
        
        expect( div.hasClass( desiredClass ) ).toBe(true);
        expect( divClassNames ).toContain( desiredClass );

    });
        
    
})

