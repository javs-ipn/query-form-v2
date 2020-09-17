import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-queries',
  templateUrl: './my-queries.component.html',
  styleUrls: ['./my-queries.component.css']
})
export class MyQueriesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'user', 'query', 'status', 'actions'];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource([
      { position: 1, user: 'Hydrogen', query: 1.0079, status: 'H', comment: 'Esto es un comentario' },
      { position: 2, user: 'Helium', query: 4.0026, status: 'He', comment: 'Esto es un comentario' },
      { position: 3, user: 'Lithium', query: 6.941, status: 'Li', comment: 'Esto es un comentario' },
      { position: 3, user: 'Lithium', query: 6.941, status: 'Li', comment: 'Esto es un comentario' },
      { position: 4, user: 'Beryllium', query: 9.0122, status: 'Be', comment: 'Esto es un comentario' },
      { position: 5, user: 'Boron', query: 10.811, status: 'B', comment: 'Esto es un comentario' },
      { position: 6, user: 'Carbon', query: 12.0107, status: 'C', comment: 'Esto es un comentario' },
      { position: 7, user: 'Nitrogen', query: 14.0067, status: 'N', comment: 'Esto es un comentario' },
      { position: 8, user: 'Oxygen', query: 15.9994, status: 'O', comment: 'Esto es un comentario' },
      { position: 9, user: 'Fluorine', query: 18.9984, status: 'F', comment: 'Esto es un comentario' },
      { position: 10, user: 'Neon', query: 20.1797, status: 'Ne', comment: 'Esto es un comentario' },
    ]);
    this.dataSource.paginator = this.paginator;
  }

}
