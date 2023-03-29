import { Test, TestingModule } from '@nestjs/testing';
import { ApplyFolderService } from './apply-folder.service';

describe('ApplyFolderService', () => {
  let service: ApplyFolderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplyFolderService],
    }).compile();

    service = module.get<ApplyFolderService>(ApplyFolderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
