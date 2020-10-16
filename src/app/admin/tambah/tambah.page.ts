import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Home } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-tambah',
  templateUrl: './tambah.page.html',
  styleUrls: ['./tambah.page.scss'],
})
export class TambahPage implements OnInit {
  
  tambahBarang: FormGroup;
  barang: Home[];
  lastId: string = null;
  tempId: number;
  tipe: string = null;
  constructor(
    private router: Router,
    private homeService: HomeService,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.tempId = this.homeService.getAllBarang().length;
    this.tempId = this.tempId + 1;
    this.tambahBarang = new FormGroup({
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      tipe: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required],
      }),
      merek: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      base_clock: new FormControl(null, {
        updateOn: 'change',
      }),
      boost_clock: new FormControl(null, {
        updateOn: 'change',
      }),
      core: new FormControl(null, {
        updateOn: 'change',
      }),
      thread: new FormControl(null, {
        updateOn: 'change',
      }),
      speed: new FormControl(null, {
        updateOn: 'change',
      }),
      ukuran: new FormControl(null, {
        updateOn: 'change',
      }),
      chipset: new FormControl(null, {
        updateOn: 'change',
      }),
      prosesor: new FormControl(null, {
        updateOn: 'change',
      }),
    });
    console.log(this.lastId);
  }

  async tambah() {
    const alert = await this.alertController.create({
      header: 'Tambah',
      message: 'Apakah anda yakin ingin menambahak barang baru?',
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
        },
        {
          text: 'Tambah',
          handler: () => this.tambahData()
        }
      ]
    });

    await alert.present();
  }

  ionViewWillEnter(){
    this.barang = this.homeService.getAllBarang();
  }

  tambahData(){
    this.homeService.tambahkanBarang(
      this.tempId,
      this.tambahBarang.value,
      this.lastId
      );
    this.router.navigate(['/admin']);
    console.log(this.tambahBarang.value);
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil ditambahkan',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }
}
