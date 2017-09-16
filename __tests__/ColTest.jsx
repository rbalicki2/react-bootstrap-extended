import React from 'react';
import { shallow, render } from 'enzyme';
import RbsCol from 'react-bootstrap/lib/Col';

import { Col } from '../src';

describe('Col', () => {
  it('should render a react-bootstrap Col', () => {
    const col = shallow(<Col xs={1}>asdf</Col>);

    expect(col.find(RbsCol)).toHaveLength(1);
  });

  it('should transform the pullRight prop to a className of pull-right', () => {
    const col = shallow(<Col pullRight />);
    const rbsCol = col.find(RbsCol);

    expect(rbsCol.props().className.includes('pull-right')).toBe(true);
  });

  it('should pass along other classNames', () => {
    const col = shallow(<Col className="super-duper" />);
    const rbsCol = col.find(RbsCol);

    expect(rbsCol.props().className.includes('super-duper')).toBe(true);
  });

  it('should pass along other properties to the Col', () => {
    const col = shallow(<Col helloWorld />);
    const rbsCol = col.find(RbsCol);

    expect(rbsCol.props().helloWorld).toBe(true);
  });

  it('should be able to combine classNames', () => {
    // NB: I'm not sure why I need to test col-xs-12 differently from the rest
    // However, the .html() tests appear to indicate that this is an enzyme quirk.
    const shallowRenderCol = shallow(<Col xs={12} className="custom-class" pullRight />);
    const fullRenderCol = render(<Col xs={12} className="custom-class" pullRight />);
    const renderedHtml = '<div class="custom-class pull-right col-xs-12"></div>';

    expect(fullRenderCol.find('.col-xs-12')).toHaveLength(1);
    expect(shallowRenderCol.hasClass('custom-class')).toBe(true);
    expect(shallowRenderCol.hasClass('pull-right')).toBe(true);
    expect(fullRenderCol.html()).toEqual(renderedHtml);
    expect(shallowRenderCol.html()).toEqual(renderedHtml);
  });
});
