import { Component, Input} from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent 
{
  like =
  {
    likesCount: 0,
    isLiked: true
  }

  @Input('likesCount') likesCount: number;
  @Input('isLiked') isLiked: boolean;

  onClick()
  {
    console.log(this.like.likesCount);
    this.isLiked = !this.isLiked;
      if(this.isLiked)
      {
        this.like.likesCount += 1;
      }
      if(!this.isLiked)
      {
        this.like.likesCount -= 1;
      }
      console.log(this.isLiked);
  }
}
