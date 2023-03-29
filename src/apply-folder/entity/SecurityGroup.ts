import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SecurityGroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @Column('text')
    boxGroupName: string;

    @Column('text')
    organizationUnitName1: string;

    @Column('text')
    organizationUnitName2: string;

    @Column()
    isEnabled: boolean;
}