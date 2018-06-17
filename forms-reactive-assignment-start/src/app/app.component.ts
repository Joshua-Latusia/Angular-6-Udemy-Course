import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {promise} from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectStatus = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectName = ['Test'];
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
        'projectName': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)], [this.forbiddenProjectNamesAsync.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'projectStatus': new FormControl(this.projectStatus[0], /*Validators*/)
      }

    );
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }

  forbiddenProjectNames(control: FormControl): {[s: string]: boolean} {
    if (!this.forbiddenProjectName.indexOf(control.value)) {
      return {'projectNameIsForbidden': true};
    }
    return null;
  }

  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (!this.forbiddenProjectName.indexOf(control.value)) {
          resolve({'projectNameIsForbidden': true});
        } else { resolve(null); }
      }, 1000);
    });
  }
}
