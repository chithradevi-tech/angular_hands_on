# Angular Project Structure

After creating an Angular project:

```bash
ng new my-app
cd my-app
ng serve
```

Angular CLI creates a project structure for us.

A modern Angular project looks roughly like this:

```text
my-app/
│
├── .angular/
├── .vscode/
├── node_modules/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── angular.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

Now let's understand each one.

---

## 1. `src/`

`src` means **source**.

This is where we write most of our Angular application code.

```text
src/
├── app/
├── index.html
├── main.ts
└── styles.css
```

---

# 2. `src/app/`

This is the **main application folder**.

Most of the Angular application code will be written inside `app`.

For example:

```text
app/
├── app.component.ts
├── app.component.html
├── app.component.css
├── app.config.ts
└── app.routes.ts
```

Later, as the application grows, we create folders such as:

```text
app/
├── components/
├── services/
├── pages/
├── models/
├── guards/
└── pipes/
```

---

# 3. `app.component.ts`

This is the **TypeScript file for the root component**.

It contains the component's logic and metadata.

Example:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
```

Think:

```text
app.component.ts
        ↓
Component Logic
```

---

# 4. `app.component.html`

This is the **HTML template** of the root component.

Example:

```html
<h1>Welcome to Angular</h1>
```

Think:

```text
app.component.html
        ↓
User Interface
```

---

# 5. `app.component.css`

This contains CSS styles for the component.

Example:

```css
h1 {
  font-size: 32px;
}
```

Think:

```text
app.component.css
        ↓
Component Styling
```

---

# 6. `app.config.ts`

This contains **application-level configuration and providers** in a modern standalone Angular application.

For example, application-wide providers can be configured here.

```text
app.config.ts
      ↓
Application Configuration
```

---

# 7. `app.routes.ts`

This file is used to define **application routes**.

Example:

```typescript
export const routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];
```

For example:

```text
/home
/users
/products
/login
```

---

# 8. `main.ts`

`main.ts` is the **entry point of the Angular application**.

It starts the Angular application.

Conceptually:

```text
main.ts
   ↓
Start Angular
   ↓
Root Component
   ↓
Application
```

This is one of the most important files to understand.

---

# 9. `index.html`

This is the **main HTML page** loaded by the browser.

Typically, you will see:

```html
<body>
  <app-root></app-root>
</body>
```

The:

```html
<app-root></app-root>
```

element is where the root Angular component is rendered.

---

# 10. `styles.css`

This is used for **global CSS styles**.

Example:

```css
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
```

Unlike component CSS, these styles can apply globally.

---

# 11. `public/`

The `public` folder is used for **static assets** that should be served directly.

For example:

```text
public/
├── logo.png
├── images/
└── favicon.ico
```

You can reference public assets from your application.

---

# 12. `node_modules/`

This folder contains the project's **installed npm packages and dependencies**.

For example:

```text
node_modules/
├── @angular/
├── rxjs/
└── ...
```

⚠️ Normally, you **do not manually edit files inside `node_modules`**.

---

# 13. `angular.json`

This contains **Angular CLI configuration**.

It controls things related to:

```text
Build
Serve
Assets
Styles
Scripts
Testing
```

Angular CLI uses this configuration when running commands such as:

```bash
ng build
ng serve
```

---

# 14. `package.json`

This file contains the project's:

```text
Dependencies
Dev Dependencies
Scripts
Project Information
```

Example:

```json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build"
  }
}
```

---

# 15. `package-lock.json`

This file records the **exact dependency versions** installed for the project.

It helps keep dependency installations consistent across different machines.

---

# 16. `tsconfig.json`

This contains **TypeScript compiler configuration**.

It controls how TypeScript is compiled.

---

# 17. `.angular/`

This is used by Angular's tooling for **generated/cache-related files**.

You normally don't need to edit it manually.

---

# 18. `.vscode/`

This folder can contain **VS Code workspace settings** for the project.

---

# 19. `README.md`

This contains documentation about the project.

You can write:

```text
Project description
Installation steps
Commands
Features
Usage
```

---

# ⭐ Most Important Files for Beginners

Don't try to memorize everything.

Start with these:

```text
src/
 │
 ├── app/
 │    ├── app.component.ts
 │    ├── app.component.html
 │    ├── app.component.css
 │    ├── app.config.ts
 │    └── app.routes.ts
 │
 ├── main.ts
 ├── index.html
 └── styles.css
```

Remember this simple relationship:

```text
main.ts
   ↓
Angular Application
   ↓
App Component
   ↓
app.component.ts
   ↓
app.component.html
   ↓
Browser UI
```

