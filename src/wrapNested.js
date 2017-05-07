import wrapBootstrapClasses from 'bootstrap-class-props';
import { Component as ReactComponent } from 'react';

const wrapNested = (Component) => {
  Object.keys(Component).forEach(key => {
    const val = Component[key];
    if (Object.getPrototypeOf(val) === ReactComponent) {
      Component[key] = wrapNested(val);
    }
  });
  return wrapBootstrapClasses(Component);
};

export default wrapNested;