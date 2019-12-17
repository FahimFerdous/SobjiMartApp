import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckTutorial } from "./providers/check-tutorial.service";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/tutorial",
    pathMatch: "full"
  },
  {
    path: "account",
    loadChildren: () =>
      import("./pages/account/account.module").then(m => m.AccountModule)
  },
  {
    path: "support",
    loadChildren: () =>
      import("./pages/support/support.module").then(m => m.SupportModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./pages/signup/signup.module").then(m => m.SignUpModule)
  },
  {
    path: "app",
    loadChildren: () =>
      import("./pages/tabs-page/tabs-page.module").then(m => m.TabsModule)
  },
  {
    path: "tutorial",
    loadChildren: () =>
      import("./pages/tutorial/tutorial.module").then(m => m.TutorialModule),
    canLoad: [CheckTutorial]
  },
  {
    path: "input-location",
    loadChildren: () =>
      import("./pages/input-location/input-location.module").then(
        m => m.InputLocationPageModule
      )
  },
  {
    path: "select-option-page",
    loadChildren: () =>
      import("./pages/select-option-page/select-option-page.module").then(
        m => m.SelectOptionPagePageModule
      )
  },
  {
    path: "vegetable-list",
    loadChildren: () =>
      import("./pages/vegetable-list/vegetable-list.module").then(
        m => m.VegetableListPageModule
      )
  },
  {
    path: "add-vegetable-inof",
    loadChildren: () =>
      import("./pages/add-vegetable-inof/add-vegetable-inof.module").then(
        m => m.AddVegetableInofPageModule
      )
  },
  {
    path: "add-fruits-info",
    loadChildren: () =>
      import("./pages/add-fruits-info/add-fruits-info.module").then(
        m => m.AddFruitsInfoPageModule
      )
  },
  {
    path: "add-location",
    loadChildren: () =>
      import("./pages/add-location/add-location.module").then(
        m => m.AddLocationPageModule
      )
  },
  {
    path: "fruit-list",
    loadChildren: () =>
      import("./pages/fruit-list/fruit-list.module").then(
        m => m.FruitListPageModule
      )
  },
  { path: 'approve-user', 
  loadChildren: ()=> import("./pages/approve-user/approve-user.module").then(
    m=>m.ApproveUserPageModule
  ) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
