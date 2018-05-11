# react-selectable-grid
>react component with selectable grid elements
> [NPM](https://www.npmjs.com/package/react-selectable-grid)
### Installing

```sh
npm install --save react-selectable-grid
```

### Usage

```js
// Import RSGrid

import {RSGrid} from "react-selectable-grid";
```

> Example Usage.
```js
import React, { Component } from 'react'

import {RSGrid} from "react-selectable-grid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={open:null}
  }
  render() {
    return (
      <div className="App">
         <RSGrid
          width="90vw"
          height="50vh"
          cols={4}
          rows={4}
          gap="10px"
          onSelected={(i, classname) => {
            console.log(i, classname);
          }}
        />
      </div>
    );
  }
}

export default App;

```

### Development

```sh
git clone https://github.com/Aniket965/react-selectable-grid.git
cd react-selectable-grid
```
>Install Dependices

```sh
yarn
```
> Build

```sh
yarn build
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

* **aniket965** - *Initial work* - [aniket965](https://github.com/aniket965)

<!-- See also the list of [contributors](https://github.com/aniket965/react-selectable-grid/contributors) who participated in this project. -->

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
