import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  barang: Home[];
  private displayMode = 1;
  constructor(private homeService: HomeService){}
  
  ngOnInit(){
    this.barang = this.homeService.getAllBarang();
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  ionViewWillEnter(){
    this.barang = this.homeService.getAllBarang();
  }
}
