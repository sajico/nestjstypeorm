import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entity/Post';
import { Category } from 'src/entity/Category';

@Module({
  imports: [TypeOrmModule.forFeature([Post, Category])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule { }
