#  archetype react component

This library is 1/2 of of the react-component archetype.
The second half of the prototype is the [react-component-dev](https://gitlab.com/short-interval-control/short-interval-control-archetype-react-component-dev) module

To find out more about archetypes see [here](https://gitlab.com/short-interval-control/archetype)

## To install

```
npm install --save short-interval-control-archetype-react-component 
npm install --save-dev short-interval-control-archetype-react-component-dev
```

## To use

You can then define scripts which call out to any of the scripts in this module.
For example:

````
 "scripts": {
    "start": "builder run archetype:lint && builder run archetype:build && builder run archetype:test",
    "test": "builder run archetype:test",
    "build": "builder run archetype:build",
    "lint": "builder run archetype:lint",
    "demo": "DEMO_SOURCE_DIR=demo builder run archetype:demo",
    "demo-client-server": "DEMO_SOURCE_DIR=demo-client-server builder run archetype:demo-client-server",
  },
  ```

### For Demo Functionality

Create an index.html which renders the component, then run ```npm run demo```

### For Demo-Client-Server Functionality

- Create an client/index.html which renders the component
- Create a  server/index.js which provides the back end for the component and includes [webpack-dev-middleware](https://webpack.js.org/guides/development/#using-webpack-dev-middleware)
- Then run ```npm run demo-client-server```


