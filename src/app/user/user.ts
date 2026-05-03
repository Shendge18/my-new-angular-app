import { Component,computed, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

   @Output() select = new EventEmitter();

  // avatar = input.required<string>();
  // name = input.required<string>();

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

   get imagePath(){
    return 'assets/users/' + this.avatar;
   }
 
  onSelectuser(){
    this.select.emit(this.id);
  }
}
