import { Component, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DX_ROUTES, UX_ROUTES } from '../../utils/readme-routes';
import { TdMediaService } from '@covalent/core/media';

import { ViewChildren, QueryList, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'covalent-app',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
})
export class BrandComponent {

  @ViewChild('childContainer') _childContainer: ElementRef;
  @ViewChildren('readmeLoader', {read: ElementRef}) _readmeLoaders: QueryList<ElementRef>;
  // Sidenav routes
  uxRoutes: any[] = UX_ROUTES;
  dxRoutes: any[] = DX_ROUTES;

  constructor(private _router: Router,
              public media: TdMediaService,
              private _changeDetectorRef: ChangeDetectorRef) {
    // this._router.events.subscribe((s: any) => {
    //   if (s instanceof NavigationEnd) {
    //     this._changeDetectorRef.detectChanges();
    //   }
    // });
  }

  isSectionActive(fragment: string): boolean {
    const tree: any = this._router.parseUrl(this._router.url);
    if (tree.fragment) {
      return tree.fragment.indexOf(fragment) !== -1;
    }
  }
}

/*
 * Copyright (C) 2016-2017 by Teradata Corporation. All rights reserved.
 * TERADATA CORPORATION CONFIDENTIAL AND TRADE SECRET
 */