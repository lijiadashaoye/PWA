import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';



const routes: Routes = [
    { path: 'one', component: OneComponent },
    { path: 'two', component: TwoComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule {}
