import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-barang-detail',
  templateUrl: './barang-detail.page.html',
  styleUrls: ['./barang-detail.page.scss'],
})
export class BarangDetailPage implements OnInit {
  loadedBarang: Home;

  constructor(
    private activatedRoute: ActivatedRoute,
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('barangId')){return; }
      const barangId = paramMap.get('barangId');
      this.loadedBarang = this.homeService.getBarang(barangId);
    });
  }

}
