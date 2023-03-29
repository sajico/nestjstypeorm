import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoxFolderAccessForCollabo } from './BoxFolderAccessForCollabo';
import { Outline } from './Outline';
import { Sgs } from './Sgs';

@Entity()
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @ManyToOne(() => Outline)
    outline: Outline;

    @ManyToOne(() => Sgs)
    sgs: Sgs;

    @ManyToOne(() => BoxFolderAccessForCollabo)
    boxFolderAccessForCollabo: BoxFolderAccessForCollabo;
}