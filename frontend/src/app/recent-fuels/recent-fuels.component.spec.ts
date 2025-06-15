import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentFuelsComponent } from './recent-fuels.component';

describe('RecentFuelsComponent', () => {
  let component: RecentFuelsComponent;
  let fixture: ComponentFixture<RecentFuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentFuelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentFuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
