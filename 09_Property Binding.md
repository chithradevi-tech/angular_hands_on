# Angular Property Binding

## 1. What is Property Binding?

**Property Binding** is used to **bind a component property to an HTML element property**.

### Simple definition

> **Property Binding = Send data from the component to the HTML element.**

Syntax:

```html
[property]="expression"
```

The important symbol is:

```text
[ ]
```

---

# 2. Simple Example

### Component

```ts
export class AppComponent {
  imageUrl = 'assets/angular.png';
}
```

### Template

```html
<img [src]="imageUrl">
```

Here:

```html
[src]="imageUrl"
```

is **property binding**.

The value of `imageUrl` is assigned to the image's `src` property.

---

# 3. Why Do We Need Property Binding?

Suppose we have:

```ts
isDisabled = true;
```

We want to disable a button based on this value.

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

If:

```ts
isDisabled = true;
```

➡️ Button is disabled.

If:

```ts
isDisabled = false;
```

➡️ Button is enabled.

So the HTML property changes according to the component data.

---

# 4. Basic Examples

### `src`

```ts
imageUrl = 'assets/photo.jpg';
```

```html
<img [src]="imageUrl">
```

---

### `disabled`

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

---

### `value`

```ts
username = 'Ravi';
```

```html
<input [value]="username">
```

---

### `hidden`

```ts
hideMessage = true;
```

```html
<p [hidden]="hideMessage">
  Welcome to Angular
</p>
```

---

### `checked`

```ts
isChecked = true;
```

```html
<input type="checkbox" [checked]="isChecked">
```

---

# 5. Property Binding with Expression

Property binding doesn't have to use only a variable.

```ts
a = 10;
b = 20;
```

```html
<button [disabled]="a > b">
  Submit
</button>
```

Here Angular evaluates:

```text
10 > 20
```

Result:

```text
false
```

So the button is enabled.

---

# 6. Property Binding with Boolean

This is very common.

```ts
isDisabled = true;
```

Correct:

```html
<button [disabled]="isDisabled">
  Save
</button>
```

Don't write:

```html
<button disabled="isDisabled">
```

Because that is just a normal HTML attribute value, not Angular property binding.

---

# 7. Property Binding vs Interpolation

This is an important interview question.

### Interpolation

```html
<img src="{{ imageUrl }}">
```

### Property Binding

```html
<img [src]="imageUrl">
```

Both can display the image, but they work differently.

**Interpolation** is mainly used to convert a value to text.

**Property binding** directly binds the value to the DOM property.

---

# 8. Property Binding vs Attribute

This is another important concept.

### HTML attribute

```html
<button disabled>
  Submit
</button>
```

`disabled` is an **HTML attribute**.

### Property binding

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

`disabled` is being set as a **DOM property**.

Easy way to remember:

```text
HTML Attribute
      ↓
Initial HTML information

DOM Property
      ↓
Current element state
```

---

# 9. Binding Component Property to Element Property

Think:

```text
Component
   ↓
isDisabled = true
   ↓
[disabled]
   ↓
Button
```

Example:

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

This is **one-way data binding**.

The direction is:

```text
Component → Template
```

---

# 10. Property Binding with CSS Class

You can also bind CSS classes.

```ts
isActive = true;
```

```html
<div [class.active]="isActive">
  Home
</div>
```

If `isActive` is `true`, the `active` class is applied.

---

# 11. Property Binding with Style

You can bind styles.

```ts
textColor = 'red';
```

```html
<p [style.color]="textColor">
  Hello Angular
</p>
```

---

# 12. Property Binding with Component Properties

Property binding isn't limited to normal HTML elements.

Suppose we have a child component:

```ts
@Component({
  selector: 'app-user',
  ...
})
export class UserComponent {
  name = '';
}
```

Parent template:

```html
<app-user [name]="userName"></app-user>
```

This allows the parent component to pass data to the child component.

This becomes very important when learning **`input()` / component communication**.

---

# 13. Important Syntax

### Property Binding

```html
[property]="value"
```

### Examples

```html
[src]="imageUrl"

[disabled]="isDisabled"

[value]="username"

[checked]="isChecked"

[hidden]="isHidden"

[class.active]="isActive"

[style.color]="textColor"
```

---

# 14. Common Mistake

### ❌ Wrong

```html
<button [disabled]="true">
  Submit
</button>
```

Actually, this is valid, but the button will **always** be disabled.

Usually we want:

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

Now the value can change dynamically.

---

### 1. What is Property Binding?

**Answer:**

Property binding is an Angular technique used to bind a component value to an HTML or DOM property.

---

### 2. What symbol is used for Property Binding?

Square brackets:

```html
[property]="expression"
```

---

### 3. What is the direction of Property Binding?

```text
Component → Template
```

It is **one-way data binding**.

---

### 4. Give an example of Property Binding.

```html
<img [src]="imageUrl">
```

---

### 5. How do you disable a button dynamically?

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

---

### 6. What is the difference between Property Binding and Interpolation?

**Interpolation:**

```html
<h1>{{ name }}</h1>
```

Mainly used to **display data as text**.

**Property Binding:**

```html
<img [src]="imageUrl">
```

Used to **bind a value to an element/component property**.

---

### 7. Can Property Binding be used with CSS?

**Yes.**

```html
<div [class.active]="isActive"></div>
```

---

### 8. Can Property Binding be used with styles?

**Yes.**

```html
<p [style.color]="textColor">
  Hello
</p>
```

---

### 9. Can Property Binding pass data to another component?

**Yes.**

```html
<app-user [name]="userName"></app-user>
```

This is commonly used for **parent-to-child communication**.

---

> **Property Binding is a one-way data-binding technique in Angular that binds a component property to an HTML, DOM, or component property using `[ ]`.**

### Easy formula

```text
TypeScript
    ↓
Component Property
    ↓
[property]
    ↓
HTML / DOM
```

**Example:**

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```
