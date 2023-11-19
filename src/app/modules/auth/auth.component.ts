import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

import {AuthAction, BaseFormHelper, Credentials, GlobalState, ROUTES_PATH} from "../../shared";
import {environment} from "../../../environments/environment";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm!: FormGroup;
  utils: BaseFormHelper;
  env = environment;
  customRoutes = ROUTES_PATH;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<GlobalState>
  ) {
    this.utils = new BaseFormHelper();
    this.authForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        key: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      });
  }

  ngOnInit(): void {}

  openNewTab = (url: string) => window.open(url, "_blank");

  setLogin = (): void => {

    if (this.authForm.invalid) return;

    const payload: Credentials = {
      name: this.authForm.get('name')?.value,
      key: this.authForm.get('key')?.value
    }

    this.store.dispatch(AuthAction.Login({credentials: payload}));
  }

}
