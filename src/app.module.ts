import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Category } from './posts/entity/Category';
import { ParentCategory } from './posts/entity/ParentCategory';
import { Post } from './posts/entity/Post';
import { PostsModule } from './posts/posts.module';
import { ApplyFolderModule } from './apply-folder/apply-folder.module';
import { Folder } from './apply-folder/entity/Folder';
import { Outline } from './apply-folder/entity/Outline';
import { Status } from './apply-folder/entity/Status';
import { BoxFolderRole } from './apply-folder/entity/BoxFolderRole';
import { SecurityGroup } from './apply-folder/entity/SecurityGroup';
import { Sgs } from './apply-folder/entity/Sgs';
import { BoxFolderAccessForCollabo } from './apply-folder/entity/BoxFolderAccessForCollabo';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'typeorm_user',
    password: 'typeorm_password',
    database: 'typeorm_db',
    logging: true,
    entities: [
      Post, Category, ParentCategory,
      Folder, Outline, Status,
      Sgs, SecurityGroup, BoxFolderRole,
      BoxFolderAccessForCollabo
    ],
    synchronize: true,
    keepConnectionAlive: true,
  }), PostsModule, ApplyFolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
