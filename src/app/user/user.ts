import { Component,computed, Input, Output, EventEmitter} from '@angular/core';

// type User = {
//     id: string;
//     name: string;
//     avatar: string
//   }

interface User{
    id: string;
    name: string;
    avatar: string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {

  @Input({required: true}) user!: User;

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
