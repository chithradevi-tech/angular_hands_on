import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeCard } from '../employee-card/employee-card';
import { Employee } from '../../models/employee';
import { employees } from '../../data/employees';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [EmployeeCard, FormsModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {

  employees: Employee[] = employees;

  searchText: string = '';

  selectedDepartment: string = 'All';

  constructor(private router: Router) {}

  get departments(): string[] {
    return [
      'All',
      ...new Set(this.employees.map(employee => employee.department))
    ];
  }

  get filteredEmployees(): Employee[] {

    return this.employees.filter(employee => {

      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchesDepartment =
        this.selectedDepartment === 'All' ||
        employee.department === this.selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }

  viewEmployee(id: number): void {
    this.router.navigate(['/employees', id]);
  }
}