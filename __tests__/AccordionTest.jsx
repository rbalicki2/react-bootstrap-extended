import React from 'react';
import { shallow } from 'enzyme';
import RbsAccordion from 'react-bootstrap/lib/Accordion';

import { Accordion } from '../src';

describe('Accordion', () => {
  it('should render a react-bootstrap Accordion', () => {
    const accordion = shallow(<Accordion />);

    expect(accordion.find(RbsAccordion)).toHaveLength(1);
  });

  it('should transform the pullRight prop to a className of pull-right', () => {
    const accordion = shallow(<Accordion pullRight />);
    const rbsAccordion = accordion.find(RbsAccordion);

    expect(rbsAccordion.props().className.includes('pull-right')).toBe(true);
  });

  it('should pass along other classNames', () => {
    const accordion = shallow(<Accordion className="super-duper" />);
    const rbsAccordion = accordion.find(RbsAccordion);

    expect(rbsAccordion.props().className.includes('super-duper')).toBe(true);
  });

  it('should pass along other properties to the Accordion', () => {
    const accordion = shallow(<Accordion helloWorld />);
    const rbsAccordion = accordion.find(RbsAccordion);

    expect(rbsAccordion.props().helloWorld).toBe(true);
  });
});
