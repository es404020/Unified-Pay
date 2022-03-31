const fs = require('fs-extra');

const concat = require('concat');


(async function build() {
  const files = [
    './dist/unified-pay/runtime.js',
    './dist/unified-pay/polyfills.js',
    './dist/unified-pay/main.js'
  ]

  await fs.ensureDir('elements');

  await concat(files, 'elements/unified-payment.js')
}

)()
