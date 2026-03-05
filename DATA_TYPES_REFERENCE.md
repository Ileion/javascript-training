# 📊 Data Types Reference Guide

## Complete Data Types Table (As Shown in Lesson 2)

This is the professional reference table now available in your JavaScript training website under **Lesson 2: Variables & Data Types**.

### The Full Table

| Data Type | Example | typeof Returns | Description |
|-----------|---------|-----------------|-------------|
| **number** | `5, 3.14, 34e-2 (=0.34), 2_500 (=2500)` | `"number"` | Integers, decimals, scientific notation, numbers with underscores for readability |
| **string** | `"hello", 'world', `template`` | `"string"` | Text data enclosed in double quotes, single quotes, or backticks for template literals |
| **boolean** | `true, false` | `"boolean"` | Logical values used for comparisons and conditional logic |
| **array** | `['red', 'green', 'blue']` | `"object"` | Ordered list of values (arrays are actually objects in JavaScript) |
| **object** | `{name:'John', age:30}` | `"object"` | Collection of key-value pairs (properties and methods) |
| **null** | `null` | `"object"` | Intentional empty or non-existent value (this is a known quirk in JavaScript!) |
| **undefined** | `undefined` | `"undefined"` | Variable has been declared but not assigned a value |

---

## Understanding Each Type

### 1. **Number** 🔢
Numbers in JavaScript include:
- **Integers:** `5, -10, 100`
- **Decimals:** `3.14, 99.99, 0.5`
- **Scientific Notation:** `34e-2` (equals 0.34)
- **With Underscores:** `2_500` (equals 2500, for readability)

```javascript
let age = 25;              // integer
let price = 99.99;         // decimal
let small = 34e-2;         // 0.34 (scientific)
let million = 1_000_000;   // 1000000
```

### 2. **String** 📝
Text data with three options for quotes:
- **Double quotes:** `"Hello"`
- **Single quotes:** `'World'`
- **Backticks:** `` `Template string` ``

```javascript
let name = "Alice";           // double quotes
let greeting = 'Hi there!';   // single quotes
let message = `Hello, ${name}!`; // template literal (with interpolation)
```

### 3. **Boolean** ✓/✗
Only two possible values:
- `true` - represents something is complete/valid/yes
- `false` - represents something is incomplete/invalid/no

```javascript
let isStudent = true;
let isGraduated = false;
let canVote = age >= 18;  // boolean result from comparison
```

### 4. **Array** 📚
An ordered list of values (indexed from 0):

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];  // arrays can mix types!

console.log(colors[0]);  // "red" (first element)
console.log(colors[2]);  // "blue" (third element)
```

### 5. **Object** 🏠
A collection of properties (key-value pairs):

```javascript
let person = {
  firstName: "John",      // property: value
  lastName: "Doe",
  age: 30,
  city: "Amsterdam"
};

console.log(person.firstName);  // "John"
console.log(person["age"]);      // 30
```

### 6. **Null** ☐
Represents **intentional** absence of value:

```javascript
let result = null;  // explicitly set to "nothing"
let empty = null;   // intentional empty
```

**Important:** `typeof null` returns `"object"` - this is a famous JavaScript quirk! It was technically a bug in the original JavaScript specification, but it's been kept for backward compatibility.

### 7. **Undefined** ❓
Represents **unintentional** absence of value:

```javascript
let declared;          // declared but not assigned
console.log(declared); // undefined

let x;                 // undefined
let result = undefined; // explicitly set to undefined
```

**Key Difference:**
- **`null`** - Intentional "nothing" (I set this)
- **`undefined`** - Accidental "nothing" (variable not assigned)

---

## Understanding `typeof`

The `typeof` operator tells you the data type:

```javascript
// Numbers
typeof 42           // "number"
typeof 3.14         // "number"
typeof NaN          // "number" (weird but true!)

// Strings
typeof "hello"      // "string"
typeof 'world'      // "string"

// Booleans
typeof true         // "boolean"
typeof false        // "boolean"

// Arrays (quirk!)
typeof [1,2,3]      // "object" (arrays are objects!)
typeof ['a','b']    // "object"

// Objects
typeof {name:"John"}  // "object"
typeof {}             // "object"

// Special values (quirks!)
typeof null         // "object" (should be "null"!)
typeof undefined    // "undefined"

// Uninitialized variables
let x;
typeof x            // "undefined"
```

---

## Type Conversion

You can convert between types:

### String Conversion
```javascript
String(123);        // "123"
String(true);       // "true"
String(false);      // "false"
String(null);       // "null"
String(undefined);  // "undefined"
(50).toString();    // "50"
```

### Number Conversion
```javascript
Number("123");      // 123
Number("3.14");     // 3.14
Number(true);       // 1
Number(false);      // 0
Number(null);       // 0
Number(undefined);  // NaN (Not a Number)
parseInt("123");    // 123 (string to integer)
parseFloat("3.14"); // 3.14 (string to decimal)
```

### Boolean Conversion
```javascript
Boolean(1);         // true
Boolean(0);         // false
Boolean("");        // false (empty string)
Boolean("hello");   // true (non-empty string)
Boolean(null);      // false
Boolean(undefined); // false
```

---

## Quick Reference

### When to Use Each Type

| Type | When | Example |
|------|------|---------|
| **number** | Storing quantities, ages, prices, counts | `age = 25`, `price = 99.99` |
| **string** | Storing text, names, messages | `name = "John"`, `message = "Hello"` |
| **boolean** | True/false conditions, flags | `isStudent = true`, `isOpen = false` |
| **array** | Storing lists of items | `colors = ["red", "blue"]` |
| **object** | Storing multiple properties | `person = {name: "John", age: 30}` |
| **null** | Intentionally setting nothing | `result = null` |
| **undefined** | Variables not yet assigned | `let x;` |

---

## Common JavaScript Quirks

### ⚠️ Important Quirks to Remember

1. **`typeof null` returns `"object"`**
   ```javascript
   typeof null  // "object" (should be "null", but it's a bug!)
   ```

2. **Arrays are objects**
   ```javascript
   typeof [1,2,3]  // "object" (not "array"!)
   typeof {x:1}    // "object"
   ```

3. **`undefined` vs `null`**
   ```javascript
   undefined == null   // true (loose equality)
   undefined === null  // false (strict equality)
   ```

4. **NaN is a number**
   ```javascript
   typeof NaN  // "number" (ironically, NaN = "Not a Number")
   NaN == NaN  // false (NaN is not equal to itself!)
   ```

---

## Testing Your Knowledge

### Quick Quiz
1. What does `typeof 3.14` return?
   - Answer: `"number"`

2. What will `typeof ['a', 'b']` return?
   - Answer: `"object"` (not "array"!)

3. What's the difference between `null` and `undefined`?
   - Answer: `null` is intentional empty, `undefined` is accidental

4. Why does `typeof null` return `"object"`?
   - Answer: It's a famous JavaScript bug that was never fixed

5. What data type is the result of `5 > 3`?
   - Answer: `boolean` (true)

---

## This Table in Practice

### In the Classroom
- Show this table to students during Lesson 2
- Explain each type with examples
- Point out the quirks (null being "object", etc.)
- Have students try `typeof` with different values in the Sandbox
- Ask them to identify what type each example is

### For Self-Study
- Use as a reference when learning JavaScript
- Check what `typeof` returns for different values
- Understand type conversion
- Remember the quirks that can trip up beginners

---

## Resources

**In Your Website:**
- ✅ This table is in Lesson 2 of your training platform
- ✅ Students can access it anytime by reopening the lesson
- ✅ They can reference it while doing exercises
- ✅ It's searchable and interactive

**Online:**
- MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
- JavaScript.info: https://javascript.info/types

---

**Remember:** This comprehensive reference makes learning JavaScript data types much easier for students! 📚✨
