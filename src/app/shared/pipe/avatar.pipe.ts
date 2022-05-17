import { Pipe, PipeTransform } from '@angular/core';
import { Guild } from '../../core/model/guild';
import { Player } from '../../core/model/player';

@Pipe({
  name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
  transform(value: Player | Guild): unknown {
    let url = 'https://cdn.discordapp.com/';
    if ('username' in value) {
      if (value.avatar === null) {
        return 'assets/images/default_user.png';
      }
      url += `avatars/${value.discordId}/${value.avatar}`;
    } else {
      if (value.icon === null) {
        return 'assets/images/group_icon.png';
      }
      url += `icons/${value.discordId}/${value.icon}`;
    }

    return url;
  }
}
