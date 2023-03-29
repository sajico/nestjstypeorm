import { Controller, Get } from '@nestjs/common';
import { ApplyFolderService } from './apply-folder.service';
import { Folder } from './entity/Folder';

@Controller('apply-folder')
export class ApplyFolderController {
    constructor(private readonly applyFolderService: ApplyFolderService) { }
    @Get()
    findAll(): Promise<Folder[]> {
        return this.applyFolderService.findAll();
    }
}
