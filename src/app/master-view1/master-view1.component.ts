import { Component, OnInit } from '@angular/core';
import { DataSource3Service } from '../services/data-source3.service';

@Component({
  selector: 'app-master-view1',
  templateUrl: './master-view1.component.html',
  styleUrls: ['./master-view1.component.scss']
})
export class MasterView1Component implements OnInit {
  public dataSource3Countries: any = null;

  constructor(
    private dataSource3Service: DataSource3Service,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.dataSource3Service.getCountries().subscribe(data => this.dataSource3Countries = data);
  }
}
