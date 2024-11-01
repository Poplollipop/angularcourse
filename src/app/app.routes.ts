import { ChildActivationEnd, Routes } from '@angular/router';
import { RolesComponent } from './practice/html/roles/roles.component';
import { SecondComponent } from './practice/html/second/second.component';
import { ChildAComponent } from './practice/html/roles/child-a/child-a.component';
import { PracticeComponent } from './practice/practice.component';
import { HtmlComponent } from './practice/html/html.component';
import { XijieComponent } from './practice/xijie/xijie.component';
import { CssComponent } from './practice/css/css.component';
import { ArrayComponent } from './practice/array/array.component';
import { IfComponent } from './practice/if/if.component';
import { ApiComponent } from './practice/api/api.component';
import { MatComponent } from './practice/mat/mat.component';



export const routes: Routes = [
  { path: 'roles', component: RolesComponent },
  {
    path: 'practice',
    component: PracticeComponent,
    children: [
      { path: 'mat', component: MatComponent },
      { path: 'xijie', component: XijieComponent },
      { path: 'api', component: ApiComponent },
      { path: 'css', component: CssComponent },
      { path: 'array', component: ArrayComponent },
      { path: 'if', component: IfComponent },
      { path: 'html', component: HtmlComponent, children:[
        { path: 'roles', component: RolesComponent, children:[{path: '', component: ChildAComponent}] },
        { path: 'second', component: SecondComponent },
      ] }
    ]
  },
];
