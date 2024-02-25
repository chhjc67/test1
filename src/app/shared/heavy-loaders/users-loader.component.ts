import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-users-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>users-loader works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersLoaderComponent {

}
