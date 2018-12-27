import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from '../event.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const canActivate: boolean = !!this.eventService.getEvent(+route.params['id']);
    if (!canActivate) {
      this.router.navigate(['/404']);
    }
    return canActivate;
  }

}
