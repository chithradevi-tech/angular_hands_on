# Angular Installation

For your class, teach Angular installation in this simple order:

```text
Node.js
   ↓
npm
   ↓
Angular CLI
   ↓
Create Angular Project
   ↓
Run Angular Application
```

## 1. Install Node.js

Angular CLI requires **Node.js**.

Download Node.js from the official website:

[Node.js official website](https://nodejs.org/?utm_source=chatgpt.com)

Install the **LTS version**.

After installation, open a **new Command Prompt** and check:

```bash
node --version
```

Example:

```text
v22.x.x
```

Also check npm:

```bash
npm --version
```

Example:

```text
10.x.x
```

If both commands show versions, Node.js and npm are installed correctly.

---

## 2. Install Angular CLI

Open **Command Prompt** and run:

```bash
npm install -g @angular/cli
```

Here:

```text
npm       → Node Package Manager
install   → Install a package
-g        → Install globally
@angular/cli → Angular CLI
```

---

## 3. Verify Angular CLI

Run:

```bash
ng version
```

You can also use:

```bash
ng --version
```

You should see Angular CLI information.

---

## 4. Create Your First Angular Project

Run:

```bash
ng new my-app
```

For example:

```bash
ng new student-app
```

Angular CLI will ask some configuration questions. For a beginner class, the default/recommended options are generally fine.

---

## 5. Go Inside the Project

```bash
cd student-app
```

---

## 6. Start Angular Application

```bash
ng serve
```

Or:

```bash
ng serve --open
```

`--open` automatically opens the application in your browser.

The development server normally runs at:

```text
http://localhost:4200
```

---

# Complete Installation Commands

For your students, the practical demo can simply be:

```bash
node --version
```

```bash
npm --version
```

```bash
npm install -g @angular/cli
```

```bash
ng version
```

```bash
ng new student-app
```

```bash
cd student-app
```

```bash
ng serve --open
```

---

# If `ng` is Not Recognized

If you see:

```text
'ng' is not recognized as an internal or external command
```

check:

```bash
npm --version
```

If npm works, try reinstalling Angular CLI:

```bash
npm install -g @angular/cli
```

Then **close and reopen Command Prompt** and run:

```bash
ng version
```

If it still doesn't work, the npm global executable directory may not be in your Windows **PATH**.

---


