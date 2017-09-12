import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { TrajectoriesService } from './trajectories.service';

@Injectable()
export class TrajectoriesConditionalRouter {

    constructor(
        private router: Router,
        private trajectoriesSrvc: TrajectoriesService
    ) {
        this.router.events
            .filter((event) => event instanceof NavigationStart)
            .subscribe((event: NavigationStart) => this.redirect(event.url));
    }

    private redirect(url: string) {
        if (url === '/trajectories') {
            if (this.trajectoriesSrvc.hasTrajectory()) {
                this.router.navigate(['trajectories/view']);
            } else {
                this.router.navigate(['trajectories/selection']);
            }
        }
    }
}
