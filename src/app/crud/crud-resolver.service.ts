
import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { CrudService } from './crud.service';
import { DatastorageService } from '../datastorage.service';
import { Device } from './crud.model';

@Injectable({ providedIn: 'root' })
export class CrudResolverService implements Resolve<any> {
  constructor(private dataStorageService:DatastorageService
    ,private crudService:CrudService
    ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const devices = this.crudService.getDevices();

    if (devices.length === 0) {
      return this.dataStorageService.fetchDevices();
    } else {
      return devices;
    }
  }
}





  