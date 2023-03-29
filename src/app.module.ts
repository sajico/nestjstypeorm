import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './entity/Category';
import { Post } from './entity/Post';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'typeorm_user',
    password: 'typeorm_password',
    database: 'typeorm_db',
    logging: true,
    entities: [Post, Category],
    synchronize: true,
    keepConnectionAlive: true,
  }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
