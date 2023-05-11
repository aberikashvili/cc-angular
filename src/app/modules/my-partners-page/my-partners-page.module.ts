import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "src/app/shared/shared.module";
import { NgModule } from "@angular/core";
import { MyPartnersPageComponent } from "./my-partners-page.component";
import { MyPartnersComponent } from "./components/my-partners/my-partners.component";

const routes: Routes = [
    {
      path: '',
      component: MyPartnersPageComponent,
    },
  ];

  @NgModule({
    declarations: [MyPartnersPageComponent,MyPartnersComponent],
    imports: [RouterModule.forChild(routes), SharedModule ],
  })

  export class MyPartnersPageModule {}