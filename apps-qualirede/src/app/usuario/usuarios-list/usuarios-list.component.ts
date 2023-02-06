import { Component } from '@angular/core';
import { ApiserviceService } from 'src/apiservice.service';
@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent {
  filter: string = '';

  constructor(private service:ApiserviceService) { }
  readData:any;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];


  ngOnInit(): void {
    this.fetchPosts()
  }

  fetchPosts(): void {
    this.service.getAllData().subscribe((res)=>{
      this.readData = res.data
    })
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.fetchPosts();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchPosts();
  }

}
