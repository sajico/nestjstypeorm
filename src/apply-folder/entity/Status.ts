import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Status {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @Column()
    isEnabled: boolean;
}