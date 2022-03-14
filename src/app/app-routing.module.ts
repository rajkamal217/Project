import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteComponent } from './delete/delete.component';
import { LoginComponent } from './login/login.component';
// import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'addprd',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'updateprd',component:UpdateComponent},
  {path:'deleteprd',component:DeleteComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
