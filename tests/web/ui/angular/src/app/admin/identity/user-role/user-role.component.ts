import { Component, OnInit, OnDestroy, } from '@angular/core';
import { UserRoleService, } from './user-role.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'identity-user-role',
    templateUrl: './user-role.component.html',
    styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit, OnDestroy {

    constructor(private _service: UserRoleService) { }

    ngOnInit() {
    }

    ngOnDestroy() {
    }
}
