import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/auth/state/auth.actions';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  onLogout() {
    this.store.dispatch(logout());
  }

  isAuthenticated() {
    return this.router.url !== "/login" && this.router.url !== "/register";
  }

}
