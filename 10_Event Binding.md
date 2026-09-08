# Angular Event Binding

## 1. What is Event Binding?

**Event Binding** is used to **handle user actions/events in the HTML template**.

### Simple definition

> **Event Binding = When an event happens in the UI, call a component method.**

Syntax:

```html
(event)="method()"
```

The important symbol is:

```text
( )
```

---

# 2. Simple Example

### Component

```ts
export class AppComponent {

  showMessage() {
    alert('Button clicked!');
  }

}
```

### Template

```html
<button (click)="showMessage()">
  Click Me
</button>
```

When the user clicks the button:

```text
User clicks button
       ↓
   (click)
       ↓
showMessage()
       ↓
Alert displayed
```

---

# 3. Why Do We Need Event Binding?

Web applications need to respond to user actions.

For example:

* User clicks a button
* User types in an input
* User selects an option
* User moves the mouse
* User presses a keyboard key

Angular Event Binding allows us to handle these actions.

---

# 4. Common Events

### Click

```html
<button (click)="save()">
  Save
</button>
```

### Input

```html
<input (input)="onInput()">
```

### Change

```html
<select (change)="onChange()">
</select>
```

### Keyboard

```html
<input (keyup)="onKeyUp()">
```

```html
<input (keydown)="onKeyDown()">
```

### Mouse

```html
<div (mouseover)="onMouseOver()">
  Move mouse here
</div>
```

```html
<div (mouseout)="onMouseOut()">
  Move mouse away
</div>
```

---

# 5. Passing `$event`

Angular provides a special object called:

```text
$event
```

It contains information about the event.

Example:

```html
<input (input)="onInput($event)">
```

TypeScript:

```ts
onInput(event: Event) {
  console.log(event);
}
```

`$event` represents the actual browser event.

---

# 6. Getting Input Value

This is a very common example.

```html
<input (input)="onInput($event)">
```

```ts
onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;

  console.log(value);
}
```

If the user types:

```text
Angular
```

The value will be:

```text
Angular
```

---

# 7. Passing Your Own Value

You don't always need `$event`.

### HTML

```html
<button (click)="greet('Ravi')">
  Greet
</button>
```

### TypeScript

```ts
greet(name: string) {
  console.log('Hello ' + name);
}
```

Output:

```text
Hello Ravi
```

---

# 8. Event Binding with `$event` and Custom Value

You can pass both.

```html
<button (click)="greet('Ravi', $event)">
  Greet
</button>
```

```ts
greet(name: string, event: Event) {
  console.log(name);
  console.log(event);
}
```

---

# 9. Event Binding with Input

```html
<input (input)="name = $any($event.target).value">

<p>Hello {{ name }}</p>
```

When the user types:

```text
Chithra
```

the `name` property gets updated.

For beginners, you can also use a template reference variable:

```html
<input #username (input)="name = username.value">

<p>Hello {{ name }}</p>
```

---

# 10. Event Binding vs Property Binding

This is very important.

### Property Binding

```html
<button [disabled]="isDisabled">
  Save
</button>
```

Direction:

```text
Component → Template
```

### Event Binding

```html
<button (click)="save()">
  Save
</button>
```

Direction:

```text
Template → Component
```

So:

```text
Property Binding
Component ─────────→ Template

Event Binding
Component ←───────── Template
```

---

# 11. Property + Event Binding

These two can be combined.

```html
<input
  [value]="name"
  (input)="onInput($event)">
```

Here:

```html
[value]
```

➡️ Property Binding

```html
(input)
```

➡️ Event Binding

This concept leads to **two-way data binding**.

---

# 12. Event Binding with Button

### TypeScript

```ts
count = 0;

increment() {
  this.count++;
}
```

### HTML

```html
<h2>{{ count }}</h2>

<button (click)="increment()">
  +
</button>
```

Every click:

```text
0 → 1 → 2 → 3 → 4...
```

This is a simple and excellent classroom example.

---

# 13. Multiple Events

One element can handle different events.

```html
<input
  (input)="onInput($event)"
  (keyup)="onKeyUp($event)"
  (focus)="onFocus()"
  (blur)="onBlur()">
```

---

# 14. Event Binding with Keyboard Events

```html
<input (keyup)="keyPressed($event)">
```

```ts
keyPressed(event: KeyboardEvent) {
  console.log(event.key);
}
```

If the user presses:

```text
A
```

Output:

```text
a
```

---

# 15. Event Binding with `change`

```html
<select (change)="selectCountry($event)">
  <option>India</option>
  <option>USA</option>
  <option>UK</option>
</select>
```

```ts
selectCountry(event: Event) {
  const value = (event.target as HTMLSelectElement).value;
  console.log(value);
}
```

---

# 16. Important Syntax

Remember:

```html
(event)="method()"
```

Examples:

```html
(click)="save()"

(input)="onInput($event)"

(change)="onChange($event)"

(keyup)="onKeyUp($event)"

(keydown)="onKeyDown($event)"

(mouseover)="onMouseOver()"

(focus)="onFocus()"

(blur)="onBlur()"
```

---

# Interview Questions & Answers

### 1. What is Event Binding?

**Answer:**

Event Binding is an Angular technique used to respond to user-generated events and execute component methods.

---

### 2. What syntax is used for Event Binding?

```html
(event)="expression"
```

Example:

```html
<button (click)="save()">Save</button>
```

---

### 3. What is the direction of Event Binding?

```text
Template → Component
```

It is a **one-way data-binding mechanism**.

---

### 4. What is `$event`?

**Answer:**

`$event` is a special Angular template variable that contains information about the current event.

Example:

```html
<button (click)="handleClick($event)">
  Click
</button>
```

---

### 5. Can we pass parameters in Event Binding?

**Yes.**

```html
<button (click)="greet('Ravi')">
  Greet
</button>
```

---

### 6. Can we use multiple events on one element?

**Yes.**

```html
<input
  (focus)="onFocus()"
  (blur)="onBlur()"
  (input)="onInput($event)">
```

---

### 7. What are some common Angular events?

```text
click
input
change
keyup
keydown
focus
blur
mouseover
mouseout
```

---

### 8. What is the difference between Property Binding and Event Binding?

**Property Binding:**

```html
[disabled]="isDisabled"
```

```text
Component → Template
```

**Event Binding:**

```html
(click)="save()"
```

```text
Template → Component
```

---

## ⭐ Best Classroom Definition

> **Event Binding is a one-way data-binding technique in Angular that allows the template to communicate with the component when a user performs an action such as click, input, change, or key press.**

### Easy formula

```text
User Action
     ↓
   (event)
     ↓
Component Method
     ↓
   Logic
```

### Most important example

```ts
count = 0;

increment() {
  this.count++;
}
```

```html
<h2>{{ count }}</h2>

<button (click)="increment()">
  Increment
</button>
```

**Remember:**
`{{ }}` → Display data
`[ ]` → Send data to HTML
`( )` → Respond to events
