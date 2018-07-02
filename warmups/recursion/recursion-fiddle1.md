## How would you call this function repeatedly to get the whole sentence?

```javascript
const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  // MODIFY CODE HERE ------------
  return [];
  // MODIFY CODE HERE ------------
}

console.log(getSentence([], 0).join(''))
```

