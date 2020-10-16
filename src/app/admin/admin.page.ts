import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Home } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {  
  barang: Home[];
  loadedBarang: Home;
  constructor(
    private homeService: HomeService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController

    ) { }

  ngOnInit() {
    this.barang = this.homeService.getAllBarang();
  }

  deleteBarang(barangId: string){
    this.homeService.deleteBarang(barangId);
    this.router.navigate(['/home']);
    this.presentToast();
  }

  async presentAlert(barangId: string){
    const alert = await this.alertCtrl.create({
      header: 'Hapus',
      message: 'Apakah anda yakin ingin menghapus barang ini?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel'
        },
        {
          text: 'Hapus',
          handler: () => this.deleteBarang(barangId)
        }
      ]
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: "Barang dihapus.",
      duration: 3000
    });
    toast.present();
  }

  ionViewWillEnter(){
    this.barang = this.homeService.getAllBarang();
  }
}
