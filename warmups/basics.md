## 1. not-string

Given a string, return a new string where "not " has been added to the front.
However, if the string already begins with "not", return the string unchanged.


```
notString('candy') → 'not candy'
notString('x') → 'not x'
notString('not bad') → 'not bad'
```

## 2. Missing-char

Given a non-empty string and an int n, return a new string where the char at
index n has been removed. The value of n will be a valid index of a char in the
original string (i.e. n will be in the range 0..len(str)-1 inclusive).


```
missingChar('kitten', 1) → 'ktten'
missingChar('kitten', 0) → 'itten'
missingChar('kitten', 4) → 'kittn'
```

## 3. front3


Given a string, we'll say that the front is the first 3 chars of the string. If
the string length is less than 3, the front is whatever is there. Return a new
string which is 3 copies of the front.


```
front3('Java') → 'JavJavJav'
front3('Chocolate') → 'ChoChoCho'
front3('abc') → 'abcabcabc'
```

## 4. strinTimes


Given a string and a non-negative int n, return a larger string that is n
copies of the original string.


```
stringTimes('Hi', 2) → 'HiHi'
stringTimes('Hi', 3) → 'HiHiHi'
stringTimes('Hi', 1) → 'Hi'
```

## 5. stringBits

Given a string, return a new string made of every other char starting with the
first, so "Hello" yields "Hlo".

```
stringBits('Hello') → 'Hlo'
stringBits('Hi') → 'H'
stringBits('Heeololeo') → 'Hello'
```

## 6. stringSplosion

Given a non-empty string like "Code" return a string like "CCoCodCode".


```
stringSplosion('Code') → 'CCoCodCode'
stringSplosion('abc') → 'aababc'
stringSplosion('ab') → 'aab'
```

## 7. last2

Given a string, return the count of the number of times that a substring length
2 appears in the string and also as the last 2 chars of the string, so
"hixxxhi" yields 1 (we won't count the end substring).


```
last2('hixxhi') → 1
last2('xaxxaxaxx') → 1
last2('axxxaaxx') → 2
```

## 8. arrayCount99

Given an array of ints, return the number of 9's in the array.

```
arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
```

## 9. arrayFront9
Given an array of ints, return True if one of the first 4 elements in the array is a 9. The array length may be less than 4.

```
arrayFront9([1, 2, 9, 3, 4]) → True
arrayFront9([1, 2, 3, 4, 9]) → False
arrayFront9([1, 2, 3, 4, 5]) → False
```

## 10. array123


Given an array of ints, return True if the sequence of numbers 1, 2, 3 appears in the array somewhere.

```
array123([1, 1, 2, 3, 1]) → True
array123([1, 1, 2, 4, 1]) → False
array123([1, 1, 2, 1, 2, 3]) → True
```

