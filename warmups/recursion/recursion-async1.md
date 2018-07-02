## How would you interface with this async function to get the whole sentence?

```javascript
const getSentenceFragment = (offset, callback) => {
  const pageSize = 3
  const sentence = [...'hello world']
  setTimeout(() => callback({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset +
        pageSize < sentence.length ? offset + pageSize : undefined
  }), 500)
}

const getSentence = (offset, callback) => {
  // MODIFY THE CODE HERE ------
  return []
  // MODIFY THE CODE HERE ------
}

getSentence(0, (sentence) => console.log(sentence))
```
