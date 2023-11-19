import {FormGroup} from "@angular/forms";

export class BaseFormHelper {

  // declarations passed to components like their own variables

  // @ts-ignore
  invalidField = (form: FormGroup, field: string): boolean => form?.get(field).touched && form?.get(field)?.invalid;
}
