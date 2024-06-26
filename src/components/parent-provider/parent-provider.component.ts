
import { ChangeDetectionStrategy, Component, inject, } from '@angular/core';
import { PARENT_PROVIDER_TOKEN } from 'src/tokens/parent-provider.token';


@Component({
  standalone: true,
  templateUrl: './parent-provider.component.html',
  styleUrls: ['./parent-provider.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: PARENT_PROVIDER_TOKEN,
      useValue: 'I am child token',
    },
  ],
})
export class ParentProviderComponent extends HTMLElement  {
 parentProvider = inject(PARENT_PROVIDER_TOKEN)

 constructor(){
  super();
  
  alert('I am alivka')
 }

 connectedCallback() {
  console.log('connected');
}
}
