import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateComponent } from '../../../pages/landing/components/date/date.component';
import { TimeComponent } from '../../../pages/landing/components/time/time.component';
import { ModulesComponent } from '../../../pages/landing/components/modules-component/modules.component';
import { CardComponent } from '../../../pages/landing/components/card/card.component';
import { TabsComponent } from '../../../pages/landing/components/tabs/tabs.component';
import { GeneralInfoComponent } from '../../../pages/landing/components/general-info/general-info.component';
import { LandingComponent } from '../../../pages/landing/landing.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { Menu } from 'primeng/menu';
import { Dialog } from 'primeng/dialog';
import { SelectButton } from 'primeng/selectbutton';
import { ConfirmDialog } from 'primeng/confirmdialog';
import { LayoutModule } from '../../layout/layout.module';
import { NotFoundComponent } from '../../../pages/not-found/not-found.component';

@NgModule({
  declarations: [
    LandingComponent,
    GeneralInfoComponent,
    TabsComponent,
    CardComponent,
    ModulesComponent,
    TimeComponent,
    DateComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    TabsModule,
    RouterModule,
    RippleModule,
    LayoutModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    AvatarModule,
    AvatarGroupModule,
    Menu,
    Dialog,
    SelectButton,
    ConfirmDialog,
    FormsModule,
  ],
})
export class LandingModule {}
