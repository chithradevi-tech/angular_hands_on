# Angular Components

Angular **Component** is one of the most important concepts in Angular.

> **A component is a building block of an Angular application.**

An Angular application is usually divided into many small components, and each component controls a specific part of the user interface.

---

## 1. What is a Component?

A component contains:

```text
TypeScript → Logic
HTML       → UI
CSS        → Styling
```

For example, a shopping application can have:

```text
Application
│
├── Navbar Component
├── Login Component
├── Product Component
├── Cart Component
└── Footer Component
```

Each component handles a particular part of the application.

---

# 2. Why do we use Components?

Without components, we might put the entire application's UI and logic into one huge file.

Components help us:

* Divide the application into smaller parts
* Reuse UI
* Organize code
* Maintain code easily
* Separate responsibilities
* Build large applications

Simple idea:

```text
Large Application
       ↓
Small Components
       ↓
Easy to Develop
       ↓
Easy to Maintain
```

---

# 3. How to Create a Component?

Angular CLI can generate a component.

```bash
ng generate component home
```

Short form:

```bash
ng g component home
```

Angular creates the component files.

Depending on your Angular CLI configuration, the generated files may look like:

```text
home/
├── home.component.ts
├── home.component.html
└── home.component.css
```

Some newer Angular configurations may generate slightly different file names or omit a separate stylesheet if you choose that option.

---

# 4. What is `@Component`?

Angular uses the `@Component` decorator to define a component.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
```

The important part is:

```typescript
@Component({
   ...
})
```

It tells Angular:

> **This class should be treated as an Angular component.**

---

# 5. Component Parts

Look at this:

```typescript
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
```

There are three important parts:

### `selector`

```typescript
selector: 'app-home'
```

Defines the HTML element used to place the component.

### `templateUrl`

```typescript
templateUrl: './home.component.html'
```

Defines the HTML template.

### `styleUrl`

```typescript
styleUrl: './home.component.css'
```

Defines the component's CSS.

---

# 6. What is a Selector?

Suppose we have:

```typescript
selector: 'app-home'
```

We can use it in HTML like:

```html
<app-home></app-home>
```

Angular sees:

```html
<app-home>
```

and renders the `HomeComponent`.

Simple flow:

```text
<app-home>
     ↓
Angular finds selector
     ↓
HomeComponent
     ↓
Displays component UI
```

---

# 7. Component TypeScript File

The `.ts` file contains the component's **logic and data**.

Example:

```typescript
export class HomeComponent {

  title = 'Welcome to Angular';

}
```

---

# 8. Component HTML File

The HTML file defines the **user interface**.

```html
<h1>{{ title }}</h1>

<button>Click Me</button>
```

The value comes from the TypeScript class:

```typescript
title = 'Welcome to Angular';
```

Output:

```text
Welcome to Angular
```

---

# 9. Component CSS File

CSS controls the component's styling.

```css
h1 {
  font-size: 32px;
}
```

---

# 10. How Does a Component Work?

The basic flow is:

```text
Component
    │
    ├── TypeScript
    │      ↓
    │    Logic / Data
    │
    ├── HTML
    │      ↓
    │    User Interface
    │
    └── CSS
           ↓
         Styling
```

---

# 11. Simple Component Example

### TypeScript

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

  name = 'Arun';
  age = 20;

}
```

### HTML

```html
<h1>Student Details</h1>

<p>Name: {{ name }}</p>
<p>Age: {{ age }}</p>
```

The browser displays:

```text
Student Details

Name: Arun
Age: 20
```

---

# 12. Root Component

Every Angular application has a **root component**.

In a typical modern Angular project:

```text
AppComponent
```

is the root component.

The application starts from the root and other components are rendered as part of the application.

Basic structure:

```text
AppComponent
     │
     ├── NavbarComponent
     ├── HomeComponent
     ├── ProductComponent
     └── FooterComponent
```

---

# 13. Parent and Child Components

Components can have relationships.

For example:

```text
AppComponent
     │
     ├── NavbarComponent
     │
     └── ProductComponent
              │
              ├── ProductImageComponent
              └── ProductDetailsComponent
```

Here:

```text
AppComponent → Parent
ProductComponent → Child
```

This leads to **component communication**.

---

# 14. Component Communication

One component may need to communicate with another component.

Common patterns include:

```text
Parent → Child
Child → Parent
Shared Service
Signals / RxJS-based state
```

For Parent → Child, Angular provides APIs such as:

```text
input()
```

For Child → Parent:

```text
output()
```

You will learn these in detail after the basic component class.

---

# 15. Standalone Components

Modern Angular uses **standalone components** extensively.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Home</h1>`
})
export class HomeComponent {}
```

In current Angular projects, standalone components are the recommended approach for most new applications.

---

# 16. Component vs HTML Page

A component is **not simply an HTML page**.

A component combines:

```text
UI
+
Logic
+
Styling
```

For example:

```text
Login Component
│
├── login.component.ts
│     → Login logic
│
├── login.component.html
│     → Login UI
│
└── login.component.css
      → Login styling
```

---

# 🎤 Simple Classroom Definition

Tell your students:

> **“A component is a basic building block of an Angular application. It contains the logic, user interface, and styling for a particular part of the application.”**

Then show:

```text
              COMPONENT
                  │
       ┌──────────┼──────────┐
       ↓          ↓          ↓
 TypeScript     HTML        CSS
   Logic         UI       Styling
```

---

### What is a component?

A component is a building block of an Angular application that controls a part of the user interface.

### How do we create a component?

```bash
ng g component home
```

### What is `@Component`?

`@Component` is a decorator that tells Angular that a class is an Angular component.

### What is a selector?

A selector defines how a component is referenced in a template.

### What are the main parts of a component?

```text
TypeScript → Logic
HTML → UI
CSS → Styling
```

### What is the root component?

The root component is the starting component of the Angular application, typically `AppComponent`.

### What is a standalone component?

A standalone component can be used without being declared in an Angular `NgModule`. Modern Angular applications commonly use standalone components.
