import { Controller, Get } from '@nestjs/common';
import { log } from 'console';
import { Post } from './interfaces/post.interface';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }

  @Get()
  async posts(): Promise<Post[]> {
    return (await this.postsService.getPosts()).data;
  }
}
