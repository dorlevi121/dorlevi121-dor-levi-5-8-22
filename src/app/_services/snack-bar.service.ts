import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';
import { tap } from 'rxjs';
import { SnackBarComponent } from '../shared-components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  public entry: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver) { }

  public open(text: string) {
    const factory = this.resolver.resolveComponentFactory(SnackBarComponent);
    const componentRef = this.entry.createComponent(factory);
    componentRef.instance.text = text;
    componentRef.instance.closeEvent.pipe(tap(() => componentRef.destroy())).subscribe();
  }
}
