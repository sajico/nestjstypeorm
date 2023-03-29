import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplyFolderController } from './apply-folder.controller';
import { ApplyFolderService } from './apply-folder.service';
import { BoxFolderAccessForCollabo } from './entity/BoxFolderAccessForCollabo';
import { BoxFolderRole } from './entity/BoxFolderRole';
import { Folder } from './entity/Folder';
import { Outline } from './entity/Outline';
import { SecurityGroup } from './entity/SecurityGroup';
import { Sgs } from './entity/Sgs';
import { Status } from './entity/Status';

@Module({
  imports: [TypeOrmModule.forFeature([
    Folder, Outline, Status,
    Sgs, SecurityGroup, BoxFolderRole,
    BoxFolderAccessForCollabo
  ])],
  providers: [ApplyFolderService],
  controllers: [ApplyFolderController]
})
export class ApplyFolderModule { }
