import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/posts/entity/Post';
import { Category } from 'src/posts/entity/Category';
import { ParentCategory } from 'src/posts/entity/ParentCategory';

@Module({
  imports: [TypeOrmModule.forFeature([
    Post, Category, ParentCategory,
  ])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule { }
