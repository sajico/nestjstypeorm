import { Test, TestingModule } from '@nestjs/testing';
import { ApplyFolderController } from './apply-folder.controller';

describe('ApplyFolderController', () => {
  let controller: ApplyFolderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplyFolderController],
    }).compile();

    controller = module.get<ApplyFolderController>(ApplyFolderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
