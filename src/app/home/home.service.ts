import { Injectable } from '@angular/core';
import { Home } from './home.model';
import { HomePage } from './home.page';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  tambahBarang(tempId: number, value: any, lastId: string) {
    throw new Error('Method not implemented.');
  }
  private barang: Home[] = [
    {
      id: '1',
      tipe: 'RAM',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/7/99734883/99734883_f9d00eca-863e-4570-a0eb-4bbd471df536_670_670.jpg',
      merek: 'Corsair',
      model: 'Dominator',
      base_clock: '0',
      boost_clock: '0',
      core:'',
      thread: '0',
      harga: 2069.000,
      stok: '5',
      speed: 'PC25600 (3200MHz)',
      ukuran: '16',
      chipset: '',
      prosesor: '',
    },
    {
      id: '2',
      tipe: 'CPU',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/6/30/9651507/9651507_35d045a1-e60c-4bf6-9385-3037f91b146d_700_700',
      merek: 'AMD',
      model: 'Ryzen 9 3950X',
      base_clock: '3.5',
      boost_clock: '4.7',
      core:'16',
      thread: '32',
      harga: 12299000,
      stok: '6',
      speed: '',
      ukuran: '',
      chipset: '',
      prosesor: '',
    },
    {
      id: '3',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2020/8/28/66039451/66039451_533bae16-f7f6-4666-a254-cb8f8b5d579a_500_500',
      merek: 'GALAX',
      model: 'B550M',
      base_clock: '',
      boost_clock: '',
      core:'',
      thread: '5',
      harga: 1370000,
      stok: '2',
      speed: '',
      ukuran: '',
      chipset: 'AMD B550',
      prosesor: 'AMD AM4 Ryzen',
    },
    {
      id: '4',
      tipe: 'Motherboard',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/5/15/2369805/2369805_71378538-8475-475e-8f59-df413a815416_700_700',
      merek: 'Gigabyte',
      model: 'H310M-DS2',
      base_clock: '',
      boost_clock: '',
      core:'',
      thread: '5',
      harga: 926000,
      stok: '0',
      speed: '',
      ukuran: '',
      chipset: 'Intel® H310',
      prosesor: 'Max Support i9',
    },
    {
      id: '5',
      tipe: 'GPU',
      foto: 'https://www.asus.com/media/global/products/cBG2qm5wXMAqScSJ/P_setting_fff_1_90_end_600.png',
      merek: 'Asus',
      model: 'Geforce RTX 2080',
      base_clock: '',
      boost_clock: '',
      core:'',
      thread: '',
      harga: 3350000,
      stok: '6',
      speed: '',
      ukuran: '',
      chipset: '',
      prosesor: '',
    },
    {
      id: '6',
      tipe: 'CPU',
      foto: 'https://cf.shopee.co.id/file/0b68418c9b23538b3b0344624627b7cc',
      merek: 'Intel',
      model: 'Core i9-10850K',
      base_clock: '3.6',
      boost_clock: '5.2',
      core:'10',
      thread: '20',
      harga: 7399000,
      stok: '4',
      speed: '',
      ukuran: '',
      chipset: '',
      prosesor: '',
    }
  ]

  constructor() { }

  getAllBarang(){
    return [...this.barang];
  }

  getBarang(barangId: string){
    return {...this.barang.find(home => {
      return home.id == barangId;
    })};
  }

  deleteBarang(barangId: string){
    this.barang = this.barang.filter(home =>{
      return home.id !== barangId;
    });
  }

  editBarang(
    barangId:string,
    editBarang: Home,
    ){
    length = this.barang.length;
    for(var i = 0; i < length; i++){
      if(this.barang[i].id == barangId){
        this.barang[i].foto = editBarang.foto;
        this.barang[i].merek = editBarang.merek;
        this.barang[i].model = editBarang.model;
        this.barang[i].harga = editBarang.harga;
        this.barang[i].stok = editBarang.stok;
      }
    }
  }

  tambahkanBarang(
    tempId: number,
    tambahBarang: Home,
    lastId: string
    ){
      length = this.barang.length;
      lastId = ""+ tempId;
      this.barang.push({
        id: lastId,
        foto: tambahBarang.foto,
        tipe: tambahBarang.tipe,
        merek: tambahBarang.merek,
        model: tambahBarang.model,
        base_clock: tambahBarang.base_clock,
        boost_clock: tambahBarang.boost_clock,
        core: tambahBarang.core,
        thread: tambahBarang.thread,
        speed: tambahBarang.speed,
        ukuran: tambahBarang.ukuran,
        chipset: tambahBarang.chipset,
        prosesor: tambahBarang. prosesor,
        harga: tambahBarang.harga,
        stok: tambahBarang.stok
      });
    }
}
