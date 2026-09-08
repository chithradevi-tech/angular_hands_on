import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [],
  templateUrl: './employee-card.html',
  styleUrl: './employee-card.css'
})
export class EmployeeCard {

  @Input() employee!: Employee;

  @Output() viewEmployee = new EventEmitter<number>();

  onViewDetails(): void {
    this.viewEmployee.emit(this.employee.id);
  }
}