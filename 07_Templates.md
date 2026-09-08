# Angular Templates

## 1. What is a Template?

An **Angular Template** is the HTML part of a component that defines **what appears on the screen**.

> **Template = HTML + Angular syntax used to display and control the UI.**

Example:

```ts
@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to Angular</h1>
    <p>This is my first Angular page.</p>
  `
})
export class HomeComponent {}
```

Here, the content inside `template` is the **Angular template**.

---

# 2. External Template

Instead of writing HTML inside TypeScript, we normally create a separate `.html` file.

### `home.component.ts`

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {}
```

### `home.component.html`

```html
<h1>Welcome to Angular</h1>
<p>This is my home page.</p>
```

This is called an **external template**.

---

# 3. Inline Template vs External Template

### Inline Template

HTML is directly inside `.ts`.

```ts
@Component({
  selector: 'app-home',
  template: `
    <h1>Hello Angular</h1>
  `
})
export class HomeComponent {}
```

### External Template

HTML is in a separate `.html` file.

```ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {}
```

For larger applications, **external templates are usually easier to maintain**.

---

# 4. What Can We Do Inside an Angular Template?

Angular templates allow us to use:

* Interpolation
* Property binding
* Event binding
* Two-way binding
* Conditional rendering
* Loops
* Template reference variables
* Pipes
* Directives
* Components

These are the most important template concepts.

---

# 5. Interpolation

Used to display TypeScript data in HTML.

### TypeScript

```ts
export class HomeComponent {
  name = 'Chithra';
}
```

### HTML

```html
<h1>Hello {{ name }}</h1>
```

Output:

```text
Hello Chithra
```

Syntax:

```html
{{ expression }}
```

### Example

```ts
age = 25;
city = 'Bangalore';
```

```html
<p>Age: {{ age }}</p>
<p>City: {{ city }}</p>
```

---

# 6. Property Binding

Property binding is used to connect a TypeScript value to an HTML property.

```ts
imageUrl = 'assets/angular.png';
```

```html
<img [src]="imageUrl">
```

Another example:

```ts
isDisabled = true;
```

```html
<button [disabled]="isDisabled">
  Submit
</button>
```

### Remember

```html
{{ value }}
```

➡️ Display data

```html
[property]="value"
```

➡️ Bind a property

---

# 7. Event Binding

Event binding is used to respond to user actions.

Example:

```html
<button (click)="showMessage()">
  Click Me
</button>
```

TypeScript:

```ts
showMessage() {
  console.log('Button clicked');
}
```

Common events:

```html
(click)
(input)
(change)
(keyup)
(keydown)
(mouseover)
```

---

# 8. Two-Way Data Binding

Two-way binding means:

**Component → HTML**

and

**HTML → Component**

The most common syntax is:

```html
[(ngModel)]
```

Example:

```ts
name = '';
```

```html
<input [(ngModel)]="name">

<p>Hello {{ name }}</p>
```

When the user types:

```text
Chithra
```

the `name` property automatically becomes:

```text
Chithra
```

For `ngModel`, import `FormsModule`.

```ts
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  ...
})
```

---

# 9. Conditional Rendering

Angular templates can display elements based on conditions.

Modern Angular uses:

```html
@if (isLoggedIn) {
  <h1>Welcome User</h1>
} @else {
  <h1>Please Login</h1>
}
```

TypeScript:

```ts
isLoggedIn = true;
```

If `isLoggedIn` is `true`:

```text
Welcome User
```

Otherwise:

```text
Please Login
```

---

# 10. Looping with `@for`

To display a list:

```ts
students = ['Ravi', 'Kumar', 'Priya'];
```

Template:

```html
<ul>
  @for (student of students; track student) {
    <li>{{ student }}</li>
  }
</ul>
```

Output:

```text
Ravi
Kumar
Priya
```

---

# 11. Template Reference Variable

A template reference variable allows us to refer to an element inside the template.

```html
<input #username>

<button (click)="show(username.value)">
  Submit
</button>
```

Here:

```html
#username
```

is a **template reference variable**.

---

# 12. Pipes in Templates

Pipes transform data before displaying it.

Example:

```ts
name = 'chithra';
```

```html
<p>{{ name | uppercase }}</p>
```

Output:

```text
CHITHRA
```

Other examples:

```html
{{ name | lowercase }}
{{ price | currency }}
{{ today | date }}
```

---

# 13. Expressions in Templates

Angular allows expressions inside templates.

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

You can also do:

```html
<p>{{ name.toUpperCase() }}</p>
```

But complex business logic should **not** be placed inside templates.

---

# 14. Template vs Component

Think of it simply:

```text
Component
   ↓
TypeScript
   ↓
Logic / Data
   ↓
Template
   ↓
HTML
   ↓
User Interface
```

Example:

### Component

```ts
export class HomeComponent {
  name = 'Ravi';

  greet() {
    alert('Hello Ravi');
  }
}
```

### Template

```html
<h1>Hello {{ name }}</h1>

<button (click)="greet()">
  Click
</button>
```

The **component provides the data and logic**.

The **template displays the UI**.

---

# 15. Important Template Syntax

You should remember these four:

### Interpolation

```html
{{ name }}
```

**Display data**

### Property Binding

```html
[src]="imageUrl"
```

**Send data to an HTML property**

### Event Binding

```html
(click)="save()"
```

**Respond to an event**

### Two-Way Binding

```html
[(ngModel)]="name"
```

**Send and receive data**

---

# 16. Simple Real-World Example

### TypeScript

```ts
export class StudentComponent {

  name = 'Ravi';
  age = 20;
  isStudent = true;

  showMessage() {
    alert('Welcome ' + this.name);
  }
}
```

### Template

```html
<h1>Student Details</h1>

<p>Name: {{ name }}</p>

<p>Age: {{ age }}</p>

@if (isStudent) {
  <p>This person is a student.</p>
}

<button (click)="showMessage()">
  Welcome
</button>
```

This single example demonstrates:

* Template
* Interpolation
* Conditional rendering
* Event binding

---

### 1. What is an Angular Template?

**Answer:**

An Angular template is the HTML view of a component that can contain HTML and Angular template syntax.

---

### 2. Where is the template defined?

It can be defined using:

```ts
template
```

or:

```ts
templateUrl
```

---

### 3. What is an inline template?

HTML written directly inside the component's TypeScript file.

```ts
template: `<h1>Hello</h1>`
```

---

### 4. What is an external template?

HTML stored in a separate `.html` file.

```ts
templateUrl: './home.component.html'
```

---

### 5. What is interpolation?

Interpolation is used to display component data in the template.

```html
{{ name }}
```

---

### 6. What is property binding?

Property binding connects a component value to an HTML property.

```html
<img [src]="imageUrl">
```

---

### 7. What is event binding?

Event binding allows the template to respond to user events.

```html
<button (click)="save()">Save</button>
```

---

### 8. What is two-way binding?

Two-way binding synchronizes data between the component and the template.

```html
<input [(ngModel)]="name">
```

---

### 9. What is `@if`?

`@if` conditionally renders content in an Angular template.

```html
@if (isLoggedIn) {
  <p>Welcome</p>
}
```

---

### 10. What is `@for`?

`@for` is used to repeat template content for items in a collection.

```html
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
}
```

---

### 11. What is a template reference variable?

A variable created inside a template using `#`.

```html
<input #email>
```

---

### 12. Can we write TypeScript directly inside an Angular template?

**No.**

Angular templates support **template expressions and statements**, but they are not normal TypeScript code.

---

> **Angular Template is the HTML view of a component where we use Angular syntax to display data, handle events, bind properties, and control the UI.**
