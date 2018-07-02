## Bistromathics:
```
The Bistromathic Drive is a wonderful new method of crossing vast interstellar
distances without all the dangerous mucking about with Improbability Factors.
Bistromathics itself is simply a revolutionary new way of understanding the
behaviour of numbers. Just as Einstein observed that time was not an absolute
but depended on the observer's movement in space, and that space was not an
absolute, but depended on the observer's movement in time, it is now realised
that numbers are not absolute, but depended on the observer's movement in
restaurants.  -Hitchhiker’s Guide to the Galaxy
```

In order to fully understand the nature of Bistromathics and come closer to
implementing it for our stardrives, you have been tasked with the following:
Write a function called receipt that:

- Takes 1 argument, the subtotal (total cost of the meal, without tax or tip)
- Returns the total cost, based on a 9% tax and a 15% tip.
- For example:

```
> receipt(20)
> '$24.80'

```

### Complete these if you have extra time and want to take on a challenge!

#### Modify your receipt function in the following ways:

- Take an additional argument, tip, to specify the percentage of tip to leave.
  For example, receipt(20, 10) should return 23.8.
- Replace the subtotal argument with an array called costsPerItem, which is an
  array containing the prices for each item ordered in the meal.
- Compute the subtotal from the costsPerItem array and calculate the total cost
  with tax and tip.
- Round to the nearest cent.

For example:
```
> receipt([10, 9, 25], 20)
> '$56.76'
```

##### Write a function called splitTheBill that:

- Takes 2 arguments, the total cost (i.e. with tax and tip included), and an
  array of string names (e.g. ["Victoria", "Jessie", "Joseph"])
- For each person, returns an item in an array for the amount that they owe in the form of
  "[name] owes $[money]"
- Splits the amount owed per person as evenly as possible among the number of
  people.
- Note that money cannot exceed 2 decimal places (e.g. you cannot have $12.255)
  and the sum of each part should still add exactly up to the total cost.

For example:
```
> splitTheBill(122.27, ["Victoria", "Joseph", "Jessie"])

> "Victoria owes $40.76"
. "Joseph owes $40.76"
. "Jessie owes $40.75"
```

Borrowed from: https://github.com/learn-co-curriculum/cssi-3-javascript-warmup
