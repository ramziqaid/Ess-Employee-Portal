 
 
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EvaluationComponent } from './EvalEmployee/Evaluation/Evaluation.component';
import { EvalListComponent } from './evalList/evalList.component';  

const routes: Routes = [   
  {
    path: 'EvalEmployee', 
    data: { title: 'EvalEmployee', breadcrumb: 'EvalEmployee'  ,OperationCode :'HTC30'} , 
    children: [
      {
        path: '', component: EvaluationComponent, 
      },
      { path: ':EvaluationID', component: EvaluationComponent }
    ]
  },
  {
    path: 'EvalList',
    component: EvalListComponent,
    data: {
      title: 'EvalListComponent', breadcrumb: 'NEW_ORDER' ,OperationCode :'HTC30'
    }
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EvaluationRoutesModule { }