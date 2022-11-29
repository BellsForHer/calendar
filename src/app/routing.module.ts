import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestPageComponent } from "./test-page/test-page.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/test-page", pathMatch: "full" },
  { path: "test-page", component: TestPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
