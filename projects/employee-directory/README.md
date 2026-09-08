# Angular Employee Directory

A simple **Employee Directory application built with Angular** for practicing fundamental Angular concepts.

The application uses **local employee data** and does not require a backend API.

---

## 📌 Features

* Display employee list
* Search employees by name
* Filter employees by department
* View employee details
* Reusable employee card component
* Employee profile details
* Navigation between employee list and details
* Responsive layout
* No backend API required

---

# 🛠️ Technologies Used

* Angular
* TypeScript
* HTML
* CSS
* Angular Router
* FormsModule

---

# 📦 Installation

Follow the steps below to run this project from scratch.

## 1. Install Node.js

Angular requires Node.js.

Download and install Node.js from the official website.

After installation, verify:

```bash
node --version
```

Check npm:

```bash
npm --version
```

Example:

```text
v22.x.x
10.x.x
```

---

## 2. Install Angular CLI

Open **Command Prompt / PowerShell / Terminal** and run:

```bash
npm install -g @angular/cli
```

Verify Angular CLI:

```bash
ng version
```

You should see the installed Angular CLI and Angular versions.

---

# 🚀 Create the Project

If you want to create this project from scratch:

## 3. Create Angular Application

Run:

```bash
ng new employee-directory
```

When Angular asks questions, select:

```text
Would you like to add Angular routing?
Yes

Which stylesheet format would you like to use?
CSS
```

If Angular asks about SSR/SSG, select:

```text
No
```

---

## 4. Navigate to the Project

```bash
cd employee-directory
```

---

## 5. Open the Project in VS Code

If VS Code is installed:

```bash
code .
```

---

# 📁 Create Project Components

Generate the Employee List component:

```bash
ng generate component components/employee-list
```

Generate the Employee Card component:

```bash
ng generate component components/employee-card
```

Generate the Employee Details component:

```bash
ng generate component components/employee-details
```

Short version:

```bash
ng g c components/employee-list
ng g c components/employee-card
ng g c components/employee-details
```

---

# 📂 Create Folders

Inside:

```text
src/app/
```

create:

```text
data/
models/
```

The final structure will look like:

```text
src/
└── app/
    │
    ├── components/
    │   ├── employee-list/
    │   ├── employee-card/
    │   └── employee-details/
    │
    ├── data/
    │   └── employees.ts
    │
    ├── models/
    │   └── employee.ts
    │
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.css
    ├── app.config.ts
    └── app.routes.ts
│
└── styles.css
```

---

# ▶️ Run the Application

Start the Angular development server:

```bash
ng serve
```

Or:

```bash
npm start
```

The terminal will show something similar to:

```text
Local: http://localhost:4200/
```

Open the browser:

```text
http://localhost:4200
```

---

# 🌐 Application Routes

Home:

```text
/
```

The home route redirects to:

```text
/employees
```

Employee list:

```text
/employees
```

Employee details:

```text
/employees/:id
```

Example:

```text
/employees/1
```

---

# 👨‍💻 Angular Concepts Practiced

## Components

```text
AppComponent
EmployeeList
EmployeeCard
EmployeeDetails
```

## Interpolation

```html
{{ employee.name }}
```

## Property Binding

```html
[value]="department"
```

## Event Binding

```html
(click)="onViewDetails()"
```

## Two-Way Binding

```html
[(ngModel)]="searchText"
```

## Input

```typescript
@Input() employee!: Employee;
```

## Output

```typescript
@Output() viewEmployee = new EventEmitter<number>();
```

## Modern Angular Control Flow

```html
@if (...)
```

```html
@for (...)
```

## Routing

```text
/employees
/employees/:id
```

## Route Parameters

```typescript
this.route.snapshot.paramMap.get('id')
```

## TypeScript Interface

```typescript
export interface Employee {
  id: number;
  name: string;
  email: string;
  phone: string;
  department: string;
  position: string;
  location: string;
  salary: number;
}
```

---

# 🔎 Search

Users can search employees by name.

Example:

```text
Search: Arun
```

The employee list will display matching employees.

---

# 🏢 Department Filter

Users can filter employees by department.

Available departments are generated from the employee data.

Example:

```text
All
IT
HR
QA
Design
Finance
```

---

# 👤 Employee Details

Click **View Details** on an employee card.

Example:

```text
/employees/1
```

The details page displays:

```text
Name
Email
Phone
Department
Position
Location
Salary
```

---

# 🗃️ Data Source

This project does not use a backend API.

Employee data is stored locally in:

```text
src/app/data/employees.ts
```

Example:

```typescript
export const employees: Employee[] = [
  {
    id: 1,
    name: 'Arun Kumar',
    email: 'arun@example.com',
    phone: '9876543210',
    department: 'IT',
    position: 'Angular Developer',
    location: 'Chennai',
    salary: 65000
  }
];
```

---

# 🔄 Application Flow

```text
Employee Data
      ↓
Employee List
      ↓
Employee Card
      ↓
@Input()
      ↓
User clicks View Details
      ↓
@Output()
      ↓
Employee List
      ↓
Angular Router
      ↓
Employee Details
```

---

# 🎯 Project Purpose

This project is created to practice fundamental Angular concepts using local data without requiring a backend API.

The main concepts practiced are:

```text
Angular CLI
Standalone Components
Components
Templates
Interpolation
Property Binding
Event Binding
Two-Way Binding
@Input()
@Output()
EventEmitter
@if
@for
Routing
Route Parameters
FormsModule
TypeScript Interfaces
Reusable Components
Search
Filtering
```

---

# 👨‍💻 Run the Project

After cloning or creating the project:

```bash
npm install
```

Then:

```bash
ng serve
```

Open:

```text
http://localhost:4200
```
