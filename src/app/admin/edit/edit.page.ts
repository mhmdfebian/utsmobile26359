import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { Home } from 'src/app/home/home.model';
import { HomeService } from 'src/app/home/home.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  editBarang : FormGroup;
  loadedBarang: Home;

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private homeService: HomeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('barangId')) { return; }
      const barangId = paramMap.get('barangId');
      this.loadedBarang = this.homeService.getBarang(barangId);
    });

    this.editBarang = new FormGroup({
      foto: new FormControl(this.loadedBarang.foto, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merek: new FormControl(this.loadedBarang.merek, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.loadedBarang.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.loadedBarang.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.loadedBarang.stok, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      base_clock: new FormControl(this.loadedBarang.base_clock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boost_clock: new FormControl(this.loadedBarang.boost_clock, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(this.loadedBarang.core, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(this.loadedBarang.thread, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      speed: new FormControl(this.loadedBarang.speed, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      ukuran: new FormControl(this.loadedBarang.ukuran, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(this.loadedBarang.chipset, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      prosesor: new FormControl(this.loadedBarang.prosesor, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
    });
  }

  async edit() {
    const alert = await this.alertController.create({
      header: 'Edit barang',
      message: 'Apakah anda yakin ingin mengubah barang ini?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya, Edit',
          handler: () => this.editData()
        }
      ]
    });
    await alert.present();
  }

  editData(){
    this.homeService.editBarang(
      this.loadedBarang.id,
      this.editBarang.value,
      
    );
    console.log(this.loadedBarang.harga);
    this.router.navigate(['./admin'])
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Barang berhasil diedit',
      color: "primary",
      duration: 2500
    });
    toast.present();
  }

}
