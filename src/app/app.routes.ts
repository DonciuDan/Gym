import { Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {HomeComponent} from "./home/home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {SuplimenteComponent} from "./suplimente/suplimente.component";
import {SalaComponent} from "./sala/sala.component";
import {NutritieComponent} from "./nutritie/nutritie.component";
import {EchipamentSportivComponent} from "./echipament-sportiv/echipament-sportiv.component";
import {AntrenamenteComponent} from "./antrenamente/antrenamente.component";
import {TryComponent} from "./try/try.component";


export const routes: Routes = [
  {
    path:"auth",component:AuthComponent,
  },
  {
    path:"home",component:HomeComponent,
  },
  {
    path:"dashboard",component:DashboardComponent,
  },
  {
    path:"",redirectTo:"welcome",pathMatch:"full"
  },
  {
    path:"welcome",component: WelcomeComponent,
  },
  {
    path:"suplimente",component: SuplimenteComponent,
  },
  {
    path:"sala",component: SalaComponent,
  },
  {
    path:"nutritie",component: NutritieComponent,
  },
  {
    path:"echipament-sportiv",component: EchipamentSportivComponent,
  },
  {
    path:"antrenamente",component: AntrenamenteComponent,
  },
  {
    path:"try",component: TryComponent,
  },
];
