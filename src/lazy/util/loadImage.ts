export default function loadImage (src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = function () {
      resolve()
      dispose()
    }

    image.onerror = function (e) {
      reject(e)
      dispose()
    }

    image.src = src

    function dispose () {
      image.onload = image.onerror = null
    }
  })
}