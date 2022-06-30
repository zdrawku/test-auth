import { Component, OnInit } from '@angular/core';
import { DataSource2Service } from '../services/data-source2.service';

@Component({
  selector: 'app-master-view',
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit {
  public dataSource2Table1: any = null;

  constructor(
    private dataSource2Service: DataSource2Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource2Service.getTable1().subscribe(data => this.dataSource2Table1 = data);
  }
}
