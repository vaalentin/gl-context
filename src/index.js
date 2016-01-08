/**
 * @function getGl
 * @param {HTMLCanvasElement} canvas
 * @returns {WebGLRenderingContext}
 */
export default function getGl(canvas) {
  let gl;

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  }
  catch(err) {
    console.warn(err);
  }

  return gl;
}

