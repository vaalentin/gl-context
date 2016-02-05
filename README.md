# GL Context

Get the WebGL context from a canvas.

## Installation

```sh
$ npm install --save @vaalentin/gl-context
```

## Usage

```js
import getGl from '@vaalentin/gl-context';

const canvas = document.createElement('canvas');
const gl = getGl(canvas);

if(gl == null) {
  // WebGL is not supported
}
```

## API

#### `gl = getGl(canvas)`

Returns the `WebGL` context from the `canvas`. If it fails, `gl` is `null`.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/gl-context/blob/master/LICENSE.md) for more details.

## Credits

Thanks to the amazing [stackgl](http://stack.gl/) for the inspiration.
