var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { EvaluationComponent } from './EvalEmployee/Evaluation/Evaluation.component';
import { EvalListComponent } from './evalList/evalList.component';
const routes = [
    {
        path: 'EvalEmployee',
        data: { title: 'EvalEmployee', breadcrumb: 'EvalEmployee', OperationCode: 'HTC30' },
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
            title: 'EvalListComponent', breadcrumb: 'NEW_ORDER', OperationCode: 'HTC30'
        }
    },
];
let EvaluationRoutesModule = class EvaluationRoutesModule {
};
EvaluationRoutesModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], EvaluationRoutesModule);
export { EvaluationRoutesModule };
//# sourceMappingURL=evaluation.routing.js.map