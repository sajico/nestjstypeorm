import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BoxFolderRole } from './BoxFolderRole';
import { SecurityGroup } from './SecurityGroup';

@Entity()
export class Sgs {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @Column()
    isEnabled: boolean;

    @Column('datetime', { default: () => "now()" })
    provisionDateTime: Date | null = null;

    @ManyToOne(() => SecurityGroup)
    securityGroup: SecurityGroup;

    @ManyToOne(() => BoxFolderRole)
    boxFolderRole: BoxFolderRole;
}