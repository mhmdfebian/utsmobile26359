import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TambahPage } from './tambah.page';

describe('TambahPage', () => {
  let component: TambahPage;
  let fixture: ComponentFixture<TambahPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TambahPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TambahPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
