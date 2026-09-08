# Angular Introduction — Questions & Answers

### 1. What is Angular?

**Answer:**
Angular is a **TypeScript-based frontend framework** developed by Google. It is used to build dynamic, interactive, and scalable web applications.

---

### 2. Who developed Angular?

**Answer:**
Angular was developed and is maintained by **Google**.

---

### 3. Is Angular a programming language?

**Answer:**
No. Angular is a **frontend framework**.

Angular mainly uses:

* TypeScript
* HTML
* CSS

---

### 4. What is a framework?

**Answer:**
A framework provides a **predefined structure, tools, and features** that help developers build applications faster and in an organized way.

For example:

```text
Angular → Frontend Framework
Django → Backend Framework
FastAPI → Backend Framework
```

---

### 5. Why do we use Angular?

**Answer:**
We use Angular to build:

* Dynamic web applications
* Single Page Applications
* Admin dashboards
* E-commerce applications
* Enterprise applications
* Large-scale web applications

---

### 6. What is SPA?

**Answer:**
SPA stands for **Single Page Application**.

In an SPA, the browser doesn't need to completely reload the page whenever the user navigates or interacts with the application.

Example:

```text
Login
   ↓
Dashboard
   ↓
Users
   ↓
Products
```

The application can update the required content without a full page reload.

---

### 7. What language does Angular use?

**Answer:**
Angular primarily uses **TypeScript**.

It also uses:

```text
HTML → Structure
CSS → Styling
TypeScript → Logic
```

---

### 8. What is TypeScript?

**Answer:**
TypeScript is a **superset of JavaScript** developed by Microsoft.

It adds features such as:

```text
Types
Interfaces
Classes
Generics
Access Modifiers
```

Angular applications are primarily written using TypeScript.

---

### 9. Is Angular frontend or backend?

**Answer:**
Angular is a **frontend framework**.

The typical architecture is:

```text
Angular
   ↓
Backend API
   ↓
Database
```

Angular handles the user interface, while the backend handles business logic and database operations.

---

### 10. Can Angular connect to a backend?

**Answer:**
Yes.

Angular can communicate with backend applications through **HTTP APIs**.

For example:

```text
Angular
   ↓
GET /users
   ↓
Backend API
   ↓
Database
```

---

### 11. Can Angular directly connect to a database?

**Answer:**
Normally, no.

The recommended architecture is:

```text
Angular
   ↓
Backend API
   ↓
Database
```

Angular should communicate with the backend rather than directly exposing database access to the browser.

---

### 12. What is Angular CLI?

**Answer:**
Angular CLI stands for **Angular Command Line Interface**.

It is a tool used to:

* Create Angular projects
* Generate components
* Generate services
* Run applications
* Build applications
* Test applications

---

### 13. What does `ng` mean?

**Answer:**
`ng` is the command used to run Angular CLI commands.

Example:

```bash
ng new my-app
```

```bash
ng serve
```

```bash
ng build
```

---

### 14. How do you create an Angular project?

**Answer:**

```bash
ng new my-app
```

Then move into the project:

```bash
cd my-app
```

Run the application:

```bash
ng serve
```

---

### 15. What is a component?

**Answer:**
A component is one of the **basic building blocks of an Angular application**.

A component generally contains:

```text
TypeScript → Logic
HTML → UI
CSS → Styling
```

For example:

```text
Login Component
Dashboard Component
Navbar Component
Product Component
```

---

### 16. What is a template?

**Answer:**
A template is the **HTML part of an Angular component**.

It defines what the user sees on the screen.

Example:

```html
<h1>Welcome</h1>
<button>Login</button>
```

---

### 17. What is data binding?

**Answer:**
Data binding connects the **component's data with the HTML template**.

Angular provides different types of data binding:

```text
Interpolation
Property Binding
Event Binding
Two-Way Binding
```

---

### 18. What is a directive?

**Answer:**
A directive is an Angular feature that can **change the behavior or appearance of an HTML element**.

Examples include:

```text
@if
@for
@switch
ngClass
ngStyle
```

---

### 19. What is a pipe?

**Answer:**
A pipe is used to **transform data for display** in an Angular template.

Example:

```html
{{ name | uppercase }}
```

If:

```text
name = "chithra"
```

The output will be:

```text
CHITHRA
```

---

### 20. What is a service?

**Answer:**
A service is a class used to contain **reusable application logic**.

For example:

```text
UserService
ProductService
AuthService
```

A service can communicate with APIs and share data or functionality between components.

---

### 21. What is Dependency Injection?

**Answer:**
Dependency Injection, or **DI**, is a mechanism Angular uses to provide required dependencies to a class.

For example:

```text
Component
   ↓
UserService
```

Instead of manually creating the service, Angular can provide it through its dependency injection system.

---

### 22. What is routing in Angular?

**Answer:**
Routing allows users to **navigate between different views or pages** of an Angular application.

For example:

```text
/login
/dashboard
/users
/products
```

---

### 23. What is AngularJS?

**Answer:**
AngularJS is the **original JavaScript-based framework** released by Google.

Modern Angular is a redesigned successor and is different from AngularJS.

---

### 24. Angular vs AngularJS?

**Answer:**

**AngularJS:**

```text
JavaScript
Older framework
Released in 2010
```

**Angular:**

```text
TypeScript
Modern framework
Component-based architecture
```

They should not be treated as the same framework.

---

### 25. Angular vs React?

**Answer:**

**Angular** is a complete frontend framework that provides many features as part of its ecosystem.

**React** is primarily a UI library that can be combined with other libraries and tools.

Simple way to remember:

```text
Angular → Framework
React → UI Library
```

---

### 26. What are the main features of Angular?

**Answer:**

Important Angular features include:

```text
Components
Templates
Data Binding
Directives
Pipes
Services
Dependency Injection
Routing
Forms
HTTP Client
RxJS
Signals
Testing
```

---

### 27. Is Angular suitable for large applications?

**Answer:**
Yes.

Angular is well suited for **large and enterprise-level applications** because it provides a structured ecosystem for components, routing, forms, HTTP communication, dependency injection, testing, and more.

---

### 28. What is `main.ts`?

**Answer:**
`main.ts` is the **entry point of an Angular application**.

It starts the Angular application and bootstraps the root application component.

---

### 29. What is `app.config.ts`?

**Answer:**
`app.config.ts` contains **application-level configuration and providers** in a modern standalone Angular application.

---

### 30. What is `app.routes.ts`?

**Answer:**
`app.routes.ts` is commonly used to define the **routes of an Angular application**.

Example:

```typescript
export const routes = [
  {
    path: 'home',
    component: HomeComponent
  }
];
```

---

### 31. What is `package.json`?

**Answer:**
`package.json` contains information about the project, including:

```text
Dependencies
Development dependencies
Scripts
Project information
```

---

### 32. What is `node_modules`?

**Answer:**
`node_modules` contains the **packages and dependencies installed for the project**.

---

### 33. What is `angular.json`?

**Answer:**
`angular.json` contains **Angular CLI workspace configuration**, including build, serve, and project-related settings.

---

### 34. What is `ng serve`?

**Answer:**

```bash
ng serve
```

starts the Angular **development server** so you can run and test the application locally.

---

### 35. What is `ng build`?

**Answer:**

```bash
ng build
```

builds the Angular application and generates files that can be used for deployment.

---


