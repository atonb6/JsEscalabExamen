import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthentificationComponent } from "./components/authentification/authentification.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { NopageComponent } from "./components/nopage/nopage.component";
import { RegisterComponent } from "./components/register/register.component";
import { SearchComponent } from "./components/search/search.component";
import { LoggedGuard } from "./guards/logged.guard";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  /*   {path:'obras', loadChildren:() => import('./art/art.module').then(mod => mod.ArtModule), canActivate: [LoggedGuard]}, */
  {
    path: "obras",
    loadChildren: () => import("./art/art.module").then((mod) => mod.ArtModule)
  },
  { path: "contacto", component: ContactComponent, canActivate: [LoggedGuard]},
  { path: "login", component: AuthentificationComponent },
  { path: "register", component: RegisterComponent },
  { path: "buscar", component: SearchComponent},
  { path: "**", component: NopageComponent, pathMatch: "prefix" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
