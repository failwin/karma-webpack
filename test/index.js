const testsContext = require.context('.', true, /\.spec(\.6)?$/);
testsContext.keys().forEach(testsContext);