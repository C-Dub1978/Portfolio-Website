// --- SMART COMPONENT (container.component.ts) ---
@Component({
  selector: 'app-user-container',
  template: `<app-user-profile [user]="userProfile()" (updateName)="saveName($event)"></app-user-profile>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent {
  // Uses Angular Signals for local reactive state
  userProfile = signal<UserProfile | null>(null);
  
  constructor(private userService: UserService) {}

  saveName(newName: string) {
    this.userService.updateName(newName).subscribe(...);
  }
}
