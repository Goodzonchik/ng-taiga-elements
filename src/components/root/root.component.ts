import { AfterContentInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiRootModule } from '@taiga-ui/core';

@Component({
  standalone: true,
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.less'],
  imports: [TuiRootModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    // Удаление атрибута data-tui-theme если один компонент

    document.body.removeAttribute('data-tui-theme'); // for Taiga 3.*
    document.getElementsByTagName('html')[0].removeAttribute('data-tui-theme'); // for Taiga 4.*
    
  }
}
