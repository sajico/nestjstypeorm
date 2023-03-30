import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Folder } from './entity/Folder';

@Injectable()
export class ApplyFolderService {
    constructor(
        @InjectRepository(Folder)
        private readonly applyFolderRepository: Repository<Folder>,
    ) { }

    async findAll(): Promise<Folder[]> {
        return await this.applyFolderRepository
            .createQueryBuilder('folder')
            .innerJoinAndSelect('folder.outline', 'apply')
            .innerJoinAndSelect('apply.status', 'status')
            .innerJoinAndSelect('folder.sgs', 'applySgs')
            .innerJoinAndSelect('applySgs.securityGroup', 'sgDefinition')
            .innerJoinAndSelect('applySgs.boxFolderRole', 'boxFolderRole')
            .leftJoinAndSelect('folder.boxFolderAccessForCollabo', 'collaboBoxFolderAccess')
            .where('applySgs.isEnabled = :isEnabled1', { isEnabled1: true })
            .andWhere('boxFolderRole.isEnabled = :isEnabled2', { isEnabled2: true })
            .andWhere('sgDefinition.boxGroupName is not null')
            .andWhere('applySgs.provisionDateTime is not null')
            .andWhere('sgDefinition.organizationUnitName1 = :ouName1', { ouName1: 'organizationUnitName1_3' })
            .andWhere('sgDefinition.organizationUnitName2 = :ouName2', { ouName2: 'organizationUnitName2_3' })
            .getMany();
    }

    async findAll2(): Promise<Folder> {
        return await this.applyFolderRepository.findOne({
            relations: {
                outline: {
                    status: true,
                }
            },
            where: {
                id: Not(IsNull()),
            },
        })
    }
}
