const testsContext = require.context('.', true, /\.spec(\.6)?$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../src', true, /\.js$/);
srcContext.keys().forEach(srcContext);
