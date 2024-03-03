import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap } from 'rxjs/operators';
import { AuthenticateService } from 'src/app/core/services/authenticate.service';
import { User } from '../models/user.interface';
import { AuthActions, logout, logoutSuccess } from './auth.actions';



 
@Injectable()
export class AuthEffects {
  loginUser$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.LOGIN),
        mergeMap((data: { type: string; payload: User }) =>
          this.authService.login(data.payload).pipe(
            map((data) => ({ type: AuthActions.SET_TOKEN, token: data.token })),
            tap(() => this.router.navigate(["anti-heroes"])),
            catchError(async (data) => ({
              type: AuthActions.LOGIN_ERROR,
              error: data.error,
            }))
          )
        )
      );
    },
    { dispatch: true }
  );

  createUser$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.CREATE_USER),
        mergeMap((data: { type: string; payload: User }) =>
          this.authService.register(data.payload).pipe(
            tap(() => this.router.navigate(["login"])),
            catchError(async (data) => ({
              type: AuthActions.LOGIN_ERROR,
              error: data.error,
            }))
          )
        )
      );
    },
    { dispatch: true }
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      tap(() => console.log("logout effect activated")),
      exhaustMap(() =>
        this.authService.logout().pipe(
          map(() => logoutSuccess())
        )
      )
    )
  );
  constructor(
    private actions$: Actions,
    private authService: AuthenticateService,
    private router: Router
  ) {}
}