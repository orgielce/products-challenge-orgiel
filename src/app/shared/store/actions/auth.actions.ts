import { createAction, props } from '@ngrx/store';
import {Credentials, CurrentUser} from "../../models";

export const Login = createAction('[AUTH] Login', props<{ credentials: Credentials }>());
export const LoginComplete = createAction('[AUTH] Login Complete', props<{ data: CurrentUser }>());
export const FinishState = createAction('[AUTH] Finish State', props<{ error: any }>());
