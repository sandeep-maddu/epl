import { Routes, RouterModule } from '@angular/router';
import { OverallComponent } from './overall/overall.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TeamResultComponent } from './team-result/team-result.component';
import { SummaryComponent } from './summary/summary.component';


// Route config let's you map routes to components
const routes: Routes = [
 
  {
    path: 'matches',
    component: OverallComponent,
  },
  
  {
    path: 'epl',
    component: OverallComponent,
  },
 
 {
    path: 'teams',
    component: TeamDetailComponent,
  },
  
  
  
  {
    path: 'teams/:team',
    component: TeamDetailComponent,
  },
  
  {
    path: 'summary',
    component: SummaryComponent,
  },
 
  {
    path: '',
    redirectTo: '/matches',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);