export class UsersService {
  switchActions = 0;

  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.switchActions++;
    console.log('SwitchActions ' + this.switchActions);
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.switchActions++;
    console.log('SwitchActions ' + this.switchActions);
  }


}
