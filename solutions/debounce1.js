/* eslint-disable no-console */

const debounce = (callback, timeout) => {
  let time = Date.now()
  // let time = {time: Date.now(), timeout: timeout}
  // console.log(time)

  const func = function (message) {
    if (Date.now() > time + timeout) {
      callback(message)
    } else {
      console.log('not yet')
    }
    time = Date.now()
  }

  // func.bind(time)()
  return func
}

const testfn = (str) => {
  console.log(str)
}
const func1 = debounce(testfn, 100)
const func2 = debounce(testfn, 100)

func1('func1') // won't be called
setTimeout(() => func1('func1'), 200) // will be called
setTimeout(() => func1('func1'), 400) // will be called
setTimeout(() => func1('func1'), 450) // won't be called
setTimeout(() => func2('func2'), 460) // will be called
