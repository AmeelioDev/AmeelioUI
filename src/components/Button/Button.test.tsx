import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Button, { ButtonProps } from './Button';

const sampleText = 'Click Me';
const sampleUrl = 'ameelio.org';

describe('<Button />', () => {
    let component: ShallowWrapper<ButtonProps>;

    describe('with default options', () => {
        beforeEach(() => {
            component = shallow(<Button>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with block style', () => {
        beforeEach(() => {
            component = shallow(<Button block={true}>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with disabled state', () => {
        beforeEach(() => {
            component = shallow(<Button disabled={true}>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with link', () => {
        beforeEach(() => {
            component = shallow(<Button href={sampleUrl}>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with link', () => {
        beforeEach(() => {
            component = shallow(<Button href={sampleUrl}>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with small size', () => {
        beforeEach(() => {
            component = shallow(<Button size='sm'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with large size', () => {
        beforeEach(() => {
            component = shallow(<Button size='lg'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with submit type', () => {
        beforeEach(() => {
            component = shallow(<Button type='submit'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with reset type', () => {
        beforeEach(() => {
            component = shallow(<Button type='reset'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with submit type', () => {
        beforeEach(() => {
            component = shallow(<Button type='submit'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with secondary variant', () => {
        beforeEach(() => {
            component = shallow(<Button variant='secondary'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with outline warning variant', () => {
        beforeEach(() => {
            component = shallow(<Button variant='outline-warning'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with custom base class prefix', () => {
        beforeEach(() => {
            component = shallow(<Button bsPrefix='ameelio-btn'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });

    describe('with additional className', () => {
        beforeEach(() => {
            component = shallow(<Button className='TEST_CLASSNAME'>{sampleText}</Button>);
        });

        it('matches its snapshot', () => {
            expect(component).toMatchSnapshot();
        });
    });
});