import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from '../entity/Post';
import { Category } from 'src/entity/Category';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }
    @Get()
    findAll(): Promise<(Post & Partial<Category>)[]> {
        return this.postsService.findAll();
    }
}