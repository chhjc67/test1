import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { TitleComponent } from '@shared/title/title.component';
import { User } from '@interfaces/req-response';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title [title]="titleLabel()"/>

    @if(user()) {
      <section>
        <img [srcset]="user()!.avatar" [alt]="user()!.first_name"/>
        <div>
          <h3>{{user()!.first_name}} {{user()!.last_name}}</h3>
          <p>{{user()!.email}}</p>
        </div>
      </section>
    } @else {
      <p>Cargando data...</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);
  // public user = signal<User | undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap( ({id}) => this.usersService.getUserById(id))
    )
  );
  
  public titleLabel = computed(() => {
    if (this.user()) {
      return `Información: ${ this.user()!.first_name} ${this.user()!.last_name}`;
    }
    return `Información...`;
  });

  // constructor(){
  //   this.route.params.subscribe(params => {
  //     console.log(params);
  //   });
  // }
}
