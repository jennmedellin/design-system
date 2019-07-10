/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
//import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthenticationGuard } from '../config/guards/authentication.guard';
//import { LoginGuard } from '../config/guards/login/login.guard';
import { SystemsComponent } from './systems/systems.component';
import { BrandComponent } from './brand/brand.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
    //{ path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
    {
        path: '', component: MainComponent,  children: [
            { path: '', component: DashboardComponent },
            { path: 'systems', component: SystemsComponent },
            { path: 'brand', component: BrandComponent },
            { path: 'components', component: ComponentsComponent },
        ],
    },
    { path: '**', redirectTo: '/' },
];

export const appRoutingProviders: any[] = [
    //AuthenticationGuard,
    //LoginGuard,
];

export const appRoutes: any = RouterModule.forRoot(routes);
