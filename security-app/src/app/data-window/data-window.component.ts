import {Component, OnInit, Input, EventEmitter} from '@angular/core';
import {SecurityRouteService} from 'services/security-route.service';
import {User} from 'app/user.model';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-data-window',
  templateUrl: './data-window.component.html',
  styleUrls: ['./data-window.component.css']
})
export class DataWindowComponent implements OnInit {

  userList: User[];
  activeDevices: Number;
  loginAlerts: Boolean;
  selected: String;

  constructor(private SecurityRouteService: SecurityRouteService) {
  }

  menuChange(select: string) {
    this.userList = [];
    this.selected = select;
    switch (select) {
      case 'getAll':
        this.getAllUsers();
        break;
    }
  }

  getAllUsers(){
    this.SecurityRouteService.getAllUsers()
      .subscribe(
        data => {
          this.userList = data}
      );
  }

  getUserById(id) {
    this.SecurityRouteService.getUserById(id)
      .subscribe(
        data => {
          this.userList = data}
      );
  }

  getAlertsDevicesNumberCross(params) {
    this.SecurityRouteService.getAlertsDevicesCrossUsers(params)
      .subscribe(
        data => {
          this.userList = data}
      );
  }

  onSubmitId(form: NgForm) {
    var id = form.value.id;
    this.getUserById(id);
  }

  onSubmitAlerts(form: NgForm) {
    var params = {
      login_alerts: form.value.loginAlerts,
      min_devices: form.value.activeDevices
    };
    console.log(params);
    this.getAlertsDevicesNumberCross(params);
  }

  ngOnInit() {
  }

}
