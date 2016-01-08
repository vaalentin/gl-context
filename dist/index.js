'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGl;
/**
 * @function getGl
 * @param {HTMLCanvasElement} canvas
 * @returns {WebGLRenderingContext}
 */
function getGl(canvas) {
  var gl = undefined;

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {
    console.warn(err);
  }

  return gl;
}
