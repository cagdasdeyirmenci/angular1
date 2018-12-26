import {Injectable} from '@angular/core';

declare let toastr;
@Injectable()
export class ToastrService {
  success(message: string, header?: string) {
    toastr.success(message, header);
  }
}
