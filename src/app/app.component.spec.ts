/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RotPipe } from './rot.pipe';

describe('App: Bryggverket', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        RotPipe
      ],
      imports: [ RouterTestingModule ]
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Bryggverket');
  }));
});
