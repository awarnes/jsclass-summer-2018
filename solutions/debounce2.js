/* eslint-disable no-console */

const debounce = (fn, timeout) => {
  let counter = 0
  let running = false
  return (arg) => {
    counter += 1
    if (!running) {
      running = true
      setTimeout(() => {
        fn(arg)
        console.log('>>> counter', counter)
        running = false
      }, timeout)
    } else {
      console.log('ignorning that one...', counter)
    }
  }
}

const testfn = (str) => {
  console.log(str)
}

const debouncedFn = debounce(testfn, 100)
debouncedFn('HELLO!')
debouncedFn('HELLO!')
debouncedFn('HELLO!')

setTimeout(() => debouncedFn('HELLO!'), 1000)
