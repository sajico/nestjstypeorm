import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoxFolderRole } from './BoxFolderRole';
import { SecurityGroup } from './SecurityGroup';

@Entity()
export class BoxFolderAccessForCollabo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @Column()
    isEnabled: boolean;

    @Column('datetime', { default: null })
    provisionDateTime: Date | null = null;
}