import { Component,  OnInit, OnChanges  } from '@angular/core';
import {DisplayService } from '../display.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  years: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']

  filterLaunch: any[] = [];
  filterLanding: any[] = [];
  missionsList: any[] = [];

  url = "https://api.spacexdata.com/v3/launches?limit=100";



  constructor(private missions: DisplayService) { }




  ngOnInit(): void {

    this.missions.getMissions(this.url).subscribe(miss => {
      this.missionsList = [...miss];
    })

  }

  // tslint:disable-next-line:typedef
  ngOnChanges() {
    this.missions.getMissions(this.url).subscribe(miss => {
      this.missionsList = [...miss];
    });
  }

  filterValues(value, code, e) {
    e.preventDefault();
    e.target.className = 'active';
    this.url = "https://api.spacexdata.com/v3/launches?limit=100&" + code + "=" + value + "&";
    this.ngOnChanges();
  }

}
