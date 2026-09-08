# Angular CLI

### 1. What is Angular CLI?

**Answer:**
Angular CLI stands for **Angular Command Line Interface**.

It is a command-line tool provided by the Angular team to **create, develop, build, test, and maintain Angular applications**.

Simply:

> **Angular CLI = Tool used to work with Angular projects from the command line.**

---

### 2. Why do we use Angular CLI?

Without CLI, we would have to manually create many files and configure the Angular application.

Angular CLI does this work for us.

It helps us:

* Create Angular projects
* Generate components
* Generate services
* Generate directives
* Generate pipes
* Generate guards
* Run the application
* Build the application
* Test the application
* Update Angular

---

# 3. What is `ng`?

`ng` is the command used to access Angular CLI.

For example:

```bash
ng new my-app
```

Here:

```text
ng       → Angular CLI command
new      → Create a new project
my-app   → Project name
```

---

# 4. Check Angular CLI Installation

Run:

```bash
ng version
```

or:

```bash
ng --version
```

If Angular CLI is installed, you will see Angular CLI and related version information.

---

# 5. Install Angular CLI

If `ng` is not recognized, install Angular CLI using npm:

```bash
npm install -g @angular/cli
```

Then check:

```bash
ng version
```

### If you get:

```text
'ng' is not recognized as an internal or external command
```

Angular CLI is either not installed or its npm global executable path is not available in your PATH.

---

# 6. Create a New Angular Application

The most important Angular CLI command:

```bash
ng new my-app
```

Example:

```bash
ng new student-app
```

Angular CLI will create the project structure automatically.

Then:

```bash
cd student-app
```

Run the application:

```bash
ng serve
```

---

# 7. `ng serve`

Used to run the Angular application locally.

```bash
ng serve
```

You can also use:

```bash
ng serve --open
```

This starts the development server and opens the application in the browser.

Typical local URL:

```text
http://localhost:4200
```

---

# 8. `ng generate`

`ng generate` is used to generate Angular files.

Short form:

```bash
ng g
```

For example:

```bash
ng generate component home
```

or:

```bash
ng g component home
```

Angular CLI generates the required component files.

---

# 9. Generate a Component

```bash
ng g component users
```

This creates a component for `users`.

You will commonly work with:

```text
users.component.ts
users.component.html
users.component.css
```

---

# 10. Generate a Service

```bash
ng g service user
```

This generates a service that can contain reusable application logic.

Example:

```text
user.service.ts
```

---

# 11. Generate a Directive

```bash
ng g directive highlight
```

Creates a custom directive.

---

# 12. Generate a Pipe

```bash
ng g pipe uppercase
```

Creates a custom pipe.

---

# 13. Generate a Guard

```bash
ng g guard auth
```

Guards are commonly used to control route access.

---

# 14. Generate an Interface

```bash
ng g interface user
```

Useful for defining TypeScript data structures.

---

# 15. Generate a Class

```bash
ng g class user
```

Creates a TypeScript class.

---

# 16. `ng build`

Used to build the Angular application.

```bash
ng build
```

The generated build can be used for deployment.

---

# 17. `ng test`

Used to run the project's tests.

```bash
ng test
```

---

# 18. `ng lint`

If linting is configured for the project:

```bash
ng lint
```

It checks the code for potential problems and style issues.

---

# 19. `ng update`

Used to update Angular packages.

```bash
ng update
```

For example, you may use it when upgrading Angular-related dependencies.

---

# 20. `ng version`

Used to display Angular and related version information.

```bash
ng version
```

Short form:

```bash
ng v
```

---

# ⭐ Important Angular CLI Commands

```text
ng version
ng new
ng serve
ng generate
ng build
ng test
ng update
ng lint
```




