import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './entity/Post';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }
    @Get()
    findAll(): Promise<Post[]> {
        return this.postsService.findAll();
    }
}