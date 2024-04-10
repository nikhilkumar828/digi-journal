import { Route } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { isUserLoggedInGuard } from './guards/is-user-logged-in.guard';
import { SharedUiDashboardComponent } from '@digi-journal/shared-ui/dashboard/lib/shared-ui-dashboard/shared-ui-dashboard.component';

export const appRoutes: Route[] = [
    {
        path: '',
        canActivate: [isUserLoggedInGuard],
        component: SharedUiDashboardComponent
    },
    {
        path: 'login',
        component: LandingPageComponent
    }
];
