import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';



export interface PeriodicElement {
  name: string;
  Id: number;
  age: number;
  gender: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Id: 1, name: 'A1', age: 11, gender: 'F' },
  { Id: 2, name: 'A2', age: 15, gender: 'M' },
  { Id: 3, name: 'A3', age: 19, gender: 'F' },
  { Id: 4, name: 'A4', age: 13, gender: 'M' },
  { Id: 5, name: 'A5', age: 15, gender: 'F' },
  { Id: 6, name: 'A6', age: 16, gender: 'M' },
  { Id: 7, name: 'A7', age: 14, gender: 'F' },
  { Id: 8, name: 'A8', age: 15, gender: 'M' },
  { Id: 9, name: 'A9', age: 18, gender: 'F' },
  { Id: 10, name: 'A10', age: 20, gender: 'F' },
  { Id: 11, name: 'A11', age: 22, gender: 'F' },
  { Id: 12, name: 'A12', age: 24, gender: 'M' },
  { Id: 13, name: 'A13', age: 26, gender: 'F' },
  { Id: 14, name: 'A14', age: 28, gender: 'M' },
  { Id: 15, name: 'A15', age: 30, gender: 'F' },
  { Id: 16, name: 'A16', age: 32, gender: 'F' },
  { Id: 17, name: 'A17', age: 35, gender: 'F' },
  { Id: 18, name: 'A18', age: 39, gender: 'M' },
  { Id: 19, name: 'A19', age: 39, gender: 'M' },
  { Id: 20, name: 'A20', age: 40, gender: 'M' },
];

@Component({
  selector: 'app-mat',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './mat.component.html',
  styleUrl: './mat.component.scss'
})
export class MatComponent {
  displayedColumns: string[] = ['Id', 'name', 'age', 'gender'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
