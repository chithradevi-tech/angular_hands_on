# Standalone Components in Angular

### 1. What is a Standalone Component?

A **standalone component** is an Angular component that can work **without being declared inside an `NgModule`**.

In modern Angular, standalone components are the **recommended approach for new applications**.

Simple definition:

> **A standalone component is a component that manages its own Angular dependencies and does not need to be declared in an NgModule.**

---

# 2. Traditional Angular vs Standalone Angular

### Traditional approach

Earlier Angular applications commonly used `NgModule`.

```text
AppModule
   │
   ├── Components
   ├── Directives
   ├── Pipes
   └── Services
```

Components had to be declared in a module.

### Standalone approach

Modern Angular:

```text
Application
   │
   ├── Component
   ├── Component
   ├── Component
   └── Component
```

Components can directly import the dependencies they need.

---

# 3. Traditional Component

A traditional component might be declared inside an `NgModule`:

```typescript
@NgModule({
  declarations: [
    HomeComponent
  ]
})
export class AppModule {}
```

The module manages the component.

---

# 4. Standalone Component Example

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Welcome to Angular</h1>
  `
})
export class HomeComponent {}
```

The important part is:

```typescript
standalone: true
```

This tells Angular:

> **This component is standalone.**

---

# 5. Why Do We Need Standalone Components?

Standalone components make Angular applications:

* Simpler
* More modular
* Easier to understand
* Easier to maintain
* Easier to lazy-load
* More explicit about dependencies

Instead of putting everything into modules, each component can specify what it needs.

---

# 6. Standalone Component with Imports

Suppose we want to use another Angular feature in our component.

We can import it directly.

Example:

```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Home</h1>
  `
})
export class HomeComponent {}
```

Here:

```text
standalone: true
       ↓
Component works independently
       ↓
imports: [...]
       ↓
Component gets the dependencies it needs
```

---

# 7. Modern Angular Control Flow

With modern Angular, you can use built-in control-flow syntax such as:

```html
@if (isLoggedIn) {
  <h1>Welcome</h1>
} @else {
  <h1>Please Login</h1>
}
```

And:

```html
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
}
```

These don't require you to import `CommonModule` just to use `@if` and `@for`.

---

# 8. Standalone Component with Another Component

Suppose we have:

```text
HomeComponent
ButtonComponent
```

If `HomeComponent` wants to use `ButtonComponent`, it can import it directly.

### Button Component

```typescript
@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button>Click Me</button>
  `
})
export class ButtonComponent {}
```

### Home Component

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from './button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <h1>Home</h1>
    <app-button></app-button>
  `
})
export class HomeComponent {}
```

Notice:

```text
HomeComponent
      ↓
imports: [ButtonComponent]
      ↓
<app-button>
```

---

# 9. Standalone Components and `NgModule`

### Does standalone Angular completely remove NgModules?

**Answer:**

No.

Angular still supports `NgModule`, especially in existing/legacy applications.

But for **new Angular applications**, standalone APIs and standalone components are the preferred approach.

---

# 10. How to Create a Standalone Component

With current Angular CLI:

```bash
ng generate component home
```

or:

```bash
ng g c home
```

Modern Angular projects generally generate standalone components by default.

You can also explicitly specify:

```bash
ng g c home --standalone
```

---

# 11. Standalone Component Architecture

A simple modern Angular application can look like:

```text
src/
└── app/
    │
    ├── app.component.ts
    │
    ├── home/
    │   └── home.component.ts
    │
    ├── users/
    │   └── users.component.ts
    │
    ├── products/
    │   └── products.component.ts
    │
    └── app.routes.ts
```

Each component can manage its own dependencies.

---

# 12. Standalone Components and Routing

Standalone components work very well with lazy loading.

Example:

```typescript
export const routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component')
        .then(m => m.HomeComponent)
  }
];
```

Angular can load the component only when the user navigates to `/home`.

---

# 13. Standalone Components and `bootstrapApplication`

Modern Angular applications commonly start with:

```typescript
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent);
```

Instead of the older module-based:

```text
platformBrowserDynamic()
        ↓
AppModule
        ↓
AppComponent
```

Modern approach:

```text
bootstrapApplication()
        ↓
AppComponent
```

---

# 14. Important Difference

### Module-based Angular

```text
AppModule
   ↓
declarations
   ↓
Components
   ↓
Application
```

### Standalone Angular

```text
bootstrapApplication()
        ↓
AppComponent
        ↓
Standalone Components
```

---

# 15. Advantages of Standalone Components

### 1. Less boilerplate

You don't need to create and manage modules just to declare components.

### 2. Clear dependencies

The component tells you exactly what it imports.

```typescript
imports: [
  ButtonComponent,
  FormsModule
]
```

### 3. Easier lazy loading

Standalone components work naturally with route-level lazy loading.

### 4. Better application organization

Large applications can be divided into independent features and components.

### 5. Modern Angular approach

Standalone APIs are the preferred direction for new Angular development.

---

> **“In older Angular applications, components were usually declared inside NgModules. In modern Angular, we can create standalone components. A standalone component does not need to be declared in an NgModule. It can directly import the components, directives, and pipes it needs.”**

Draw this on the board:

```text
OLD ANGULAR

AppModule
   │
   ├── Component
   ├── Component
   ├── Directive
   └── Pipe


MODERN ANGULAR

AppComponent
   │
   ├── HomeComponent
   │      ├── ButtonComponent
   │      └── HeaderComponent
   │
   └── ProductComponent
          └── ProductCardComponent
```

---

### What is a standalone component?

A component that can be used without being declared in an `NgModule`.

### How do you define a standalone component?

```typescript
@Component({
  standalone: true
})
```

### Are standalone components recommended in modern Angular?

**Yes.** They are the recommended approach for new Angular applications.

### Do standalone components completely replace NgModules?

**No.** `NgModule` is still supported and is common in existing applications.

### How does a standalone component use another component?

Import the component in the `imports` array:

```typescript
@Component({
  standalone: true,
  imports: [ButtonComponent]
})
```

### What is `bootstrapApplication()`?

It is the modern API used to **bootstrap a standalone Angular application**, starting with the root component.

---

> **Standalone Component = Angular component that can work independently without being declared in an NgModule.**
