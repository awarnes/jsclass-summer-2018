## 1. makeBricks

We want to make a row of bricks that is goal inches long. We have a number of
small bricks (1 inch each) and big bricks (5 inches each). Return True if it is
possible to make the goal by choosing from the given bricks. This is a little
harder than it looks and can be done without any loops. See also: Introduction
to MakeBricks

```
/* eslint-disable no-console */
const makeBricks = (small, big, goal) => {}

console.assert(makeBricks(3, 1, 8) === true)
console.assert(makeBricks(3, 1, 9) === false)
console.assert(makeBricks(3, 2, 10) === true)
```

const makeBricks = (small, big, goal) => {}

## 2. loneSum

Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.


```
lone_sum(1, 2, 3) → 6
lone_sum(3, 2, 3) → 2
lone_sum(3, 3, 3) → 0
```

## 3. luckySum

Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

```
lucky_sum(1, 2, 3) → 6
lucky_sum(1, 2, 13) → 3
lucky_sum(1, 13, 3) → 1
```

## 4. noTeenSum

Given 3 int values, a b c, return their sum. However, if any of the values is a teen -- in the range 13..19 inclusive -- then that value counts as 0, except 15 and 16 do not count as a teens. Write a separate helper "def fix_teen(n):"that takes in an int value and returns that value fixed for the teen rule. In this way, you avoid repeating the teen code 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as the main no_teen_sum().

```
no_teen_sum(1, 2, 3) → 6
no_teen_sum(2, 13, 1) → 3
no_teen_sum(2, 1, 14) → 3
```

## 5. roundSum


For this problem, we'll round an int value up to the next multiple of 10 if its rightmost digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. Given 3 ints, a b c, return the sum of their rounded values. 

```
round_sum(16, 17, 18) → 60
round_sum(12, 13, 14) → 30
```

## 6. makeChocolate

We want make a package of goal kilos of chocolate. We have small bars (1 kilo each) and big bars (5 kilos each). Return the number of small bars to use, assuming we always use big bars before small bars. Return -1 if it can't be done.

```
make_chocolate(4, 1, 9) → 4
make_chocolate(4, 1, 10) → -1
make_chocolate(4, 1, 7) → 2
```
