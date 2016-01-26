import test from 'tape';
import getGl from '../src';

test('if it fails, it should returns null', t => {
  t.plan(1);

  const div = document.createElement('div');
  const gl = getGl(div);

  t.ok(gl === null, 'Failed, null returned');
});

test('it should return the WebGL context', t => {
  t.plan(1);

  const canvas = document.createElement('canvas');
  const gl = getGl(canvas);

  if(window.WebGLRenderingContext) {
    t.ok(gl instanceof window.WebGLRenderingContext, 'WebGL context returned');
  } else {
    t.ok(gl === null, 'WebGL not available, null returned');
  }
});

