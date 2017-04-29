const bootstrapClasses = [
  'text-muted',
  'text-primary',
  'text-success',
  'text-info',
  'text-warning',
  'text-danger',

  'bg-primary',
  'bg-success',
  'bg-info',
  'bg-warning',
  'bg-danger',

  // 'caret',
  // 'close',

  'pull-left',
  'pull-right',
  'navbar-left',
  'navbar-right',

  'center-block',

  'clearfix',

  // 'show',
  // 'hidden,
  'invisible',

  'sr-only',
  { srOnlyFocusable: 'sr-only sr-only-focusable' },

  'text-hide',

  'visible-xs-block',
  'visible-xs-inline',
  'visible-xs-inline-block',
  'hidden-xs',
  'visible-sm-block',
  'visible-sm-inline',
  'visible-sm-inline-block',
  'hidden-sm',
  'visible-md-block',
  'visible-md-inline',
  'visible-md-inline-block',
  'hidden-md',
  'visible-lg-block',
  'visible-lg-inline',
  'visible-lg-inline-block',
  'hidden-lg',
  'visible-print-block',
  'visible-print-inline',
  'visible-print-inline-block',
  'hidden-print',

  'text-left',
  'text-center',
  'text-right',
  'text-justify',
  'text-nowrap',

  'text-lowercase',
  'text-uppercase',
  'text-capitalize',

  'initialism',
];

const camelCaseRe = /-([a-z])/g;
const convertClass = stringOrObj =>
  (stringOrObj instanceof Object
    ? stringOrObj
    : { [stringOrObj.replace(camelCaseRe, g => g[1].toUpperCase())]: stringOrObj });

export {
  bootstrapClasses,
};

export default bootstrapClasses.reduce((accum, className) => ({
  ...accum,
  ...convertClass(className),
}), {});
