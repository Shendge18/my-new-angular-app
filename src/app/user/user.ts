import { Component,computed, Input, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { Card } from '../shared/card/card';

// type User = {
//     id: string;
//     name: string;
//     avatar: string
//   }



@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  imports: [Card],
  styleUrl: './user.css',
})
export class UserComponent {

  @Input({required: true}) user!: User;
  @Input({required: true}) selected! : boolean;

   @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

   get imagePath(){
    return 'assets/users/' + this.user.avatar;
   }
 
  onSelectuser(){
    this.select.emit(this.user.id);
  }
}
