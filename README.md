# Immer Performance Test

The script of each pattern was executed 100,000 times and the time was measured.

| pattern1.js           | pattern2.js                   | pattern3.js                       |
| --------------------- | ----------------------------- | --------------------------------- |
| Returning a new state | Modifying properties of draft | Define a new object without Immer |
| 0.9766s               | 1.2492s                       | 0.7582s                           |
