#  archetype react component

This library is 1/2 of of the react-component archetype.
The second half of the prototype is the [react-component-dev](https://gitlab.com/short-interval-control/short-interval-control-archetype-react-component-dev) module

To find out more about archetypes see [here](https://gitlab.com/short-interval-control/archetype)

## To install

```npm install short-interval-control-archetype-react-component short-interval-control-archetype-react-component-dev```

## To use


You can then define scripts which call out to any of the scripts in this module.
For example:

````
 "scripts": {
    "start": "builder run archetype:lint && builder run archetype:build && builder run archetype:test",
    "test": "builder run archetype:test",
    "build": "builder run archetype:build",
    "lint": "builder run archetype:lint",
  },
  ```

