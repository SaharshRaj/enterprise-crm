import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateComponent } from './date.component';

describe('DateComponent', () => {
    let component: DateComponent;
    let fixture: ComponentFixture<DateComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DateComponent]
        });
        fixture = TestBed.createComponent(DateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
