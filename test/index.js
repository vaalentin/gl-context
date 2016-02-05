import test from 'tape';
import getGl from '../src';

test('should return the WebGL context', t => {
  t.plan(1);

  const canvas = document.createElement('canvas');
  const gl = getGl(canvas);

  t.ok(gl instanceof WebGLRenderingContext, 'WebGL context returned');
});

test('should returns null if fails', t => {
  t.plan(1);

  const div = document.createElement('div');
  const gl = getGl(div);

  t.ok(gl === null, 'null returned');
});

