# Angular Interpolation

## 1. What is Interpolation?

**Interpolation** is used to **display component data inside the HTML template**.

### Simple definition

> **Interpolation = Display TypeScript data in HTML using `{{ }}`.**

Syntax:

```html
{{ expression }}
```

---

## 2. Simple Example

### Component

```ts
export class AppComponent {
  name = 'Ravi';
}
```

### Template

```html
<h1>Hello {{ name }}</h1>
```

### Output

```text
Hello Ravi
```

Here:

```html
{{ name }}
```

is **interpolation**.

---

## 3. Why do we use Interpolation?

Suppose we have data in TypeScript:

```ts
name = 'Chithra';
age = 25;
city = 'Bangalore';
```

We can display it in HTML:

```html
<h2>{{ name }}</h2>
<p>Age: {{ age }}</p>
<p>City: {{ city }}</p>
```

Output:

```text
Chithra
Age: 25
City: Bangalore
```

---

# 4. Interpolation with Expressions

Interpolation can contain expressions.

```ts
a = 10;
b = 20;
```

```html
<p>{{ a + b }}</p>
```

Output:

```text
30
```

Another example:

```ts
firstName = 'Ravi';
lastName = 'Kumar';
```

```html
<p>{{ firstName + ' ' + lastName }}</p>
```

Output:

```text
Ravi Kumar
```

---

# 5. Interpolation with Object

### TypeScript

```ts
student = {
  name: 'Ravi',
  age: 20
};
```

### HTML

```html
<p>Name: {{ student.name }}</p>
<p>Age: {{ student.age }}</p>
```

Output:

```text
Name: Ravi
Age: 20
```

---

# 6. Interpolation with Method

You can call a method from the template.

### TypeScript

```ts
name = 'Ravi';

getMessage() {
  return 'Hello ' + this.name;
}
```

### HTML

```html
<p>{{ getMessage() }}</p>
```

Output:

```text
Hello Ravi
```

However, avoid putting **heavy/complex logic** inside template expressions.

---

# 7. Interpolation with Boolean

### TypeScript

```ts
isLoggedIn = true;
```

### HTML

```html
<p>{{ isLoggedIn }}</p>
```

Output:

```text
true
```

---

# 8. Interpolation with Array

### TypeScript

```ts
students = ['Ravi', 'Priya', 'Kumar'];
```

You can access an array item:

```html
<p>{{ students[0] }}</p>
```

Output:

```text
Ravi
```

---

# 9. Interpolation vs Normal HTML

Without Angular:

```html
<h1>Hello Ravi</h1>
```

The value is fixed.

With interpolation:

```html
<h1>Hello {{ name }}</h1>
```

The value comes from the component.

If:

```ts
name = 'Priya';
```

Output becomes:

```text
Hello Priya
```

---

# 10. Interpolation with Attributes

You may see:

```html
<img src="{{ imageUrl }}">
```

This uses interpolation inside an attribute.

However, for property binding, Angular recommends:

```html
<img [src]="imageUrl">
```

So remember:

```html
{{ value }}
```

➡️ **Interpolation**

```html
[property]="value"
```

➡️ **Property Binding**

---

# 11. Important Rule

Interpolation is mainly used for **displaying values**.

Example:

```html
<h1>{{ name }}</h1>
<p>{{ age }}</p>
```

For changing an HTML property:

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

For handling events:

```html
<button (click)="save()">
  Save
</button>
```

---

### 1. What is interpolation in Angular?

**Answer:**

Interpolation is an Angular template syntax used to display component data in HTML using double curly braces `{{ }}`.

---

### 2. What is the syntax of interpolation?

```html
{{ expression }}
```

---

### 3. Where does the data come from?

The data usually comes from the **component class**.

```ts
name = 'Ravi';
```

```html
{{ name }}
```

---

### 4. Can we use expressions inside interpolation?

**Yes.**

```html
{{ 10 + 20 }}
```

Result:

```text
30
```

---

### 5. Can we call a method using interpolation?

**Yes.**

```html
{{ getName() }}
```

---

### 6. Can interpolation display object properties?

**Yes.**

```html
{{ student.name }}
```

---

### 7. What symbol is used for interpolation?

Double curly braces:

```text
{{ }}
```

---

### 8. What is the difference between interpolation and property binding?

**Interpolation:**

```html
<h1>{{ name }}</h1>
```

Used mainly to **display a value as text**.

**Property binding:**

```html
<img [src]="imageUrl">
```

Used to **bind a value to an HTML/DOM property**.

---

> **Interpolation is a one-way data-binding technique in Angular that displays component data in the template using `{{ }}`.**

### Easy formula

```text
TypeScript Data
      ↓
   {{ data }}
      ↓
    HTML
      ↓
   Screen
```
