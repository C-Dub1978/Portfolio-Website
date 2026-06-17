// --- PRESENTATIONAL COMPONENT (profile.component.ts) ---
@Component({
  selector: 'app-user-profile',
  template: `<div>{{ user()?.name }}</div><button (click)="changeName()">Update</button>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent {
  @Input() user: UserProfile | null = null;
  @Output() updateName = new EventEmitter<string>();

  changeName() {
    this.updateName.emit('New Name');
  }
}