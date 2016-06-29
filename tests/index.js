require('isomorphic-fetch');

//const componentTestsContext = require.context('../tests/components/', true, /^\.\/.*\.js$/);
//componentTestsContext.keys().forEach(componentTestsContext);
//const componentsContext = require.context('../components/', true, /^\.\/.*\.js$/);
//componentsContext.keys().forEach(componentsContext);

const actionsTestsContext = require.context('../tests/actions/', true, /^\.\/.*\.js$/);
actionsTestsContext.keys().forEach(actionsTestsContext);
const actionsContext = require.context('../actions/', true, /^\.\/.*\.js$/);
actionsContext.keys().forEach(actionsContext);

//const reducersTestsContext = require.context('../tests/reducers/', true, /^\.\/.*\.js$/);
//reducersTestsContext.keys().forEach(reducersTestsContext);
//const reducersContext = require.context('../reducers/', true, /^\.\/.*\.js$/);
//reducersContext.keys().forEach(reducersContext);

// const helpersTestsContext = require.context('../tests/helpers/', true, /^\.\/.*\.js$/);
// helpersTestsContext.keys().forEach(helpersTestsContext);
// const helpersContext = require.context('../app/scripts/helpers/', true, /^\.\/.*\.js$/);
// helpersContext.keys().forEach(helpersContext);

//const selectorsTestsContext = require.context('../tests/selectors/', true, /^\.\/.*\.js$/);
//selectorsTestsContext.keys().forEach(selectorsTestsContext);
//const selectorsContext = require.context('../app/scripts/selectors/', true, /^\.\/.*\.js$/);
//selectorsContext.keys().forEach(selectorsContext);