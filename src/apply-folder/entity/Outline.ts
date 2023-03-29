import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Status } from './Status';

@Entity()
export class Outline {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    recName: string;

    @ManyToOne(() => Status)
    status: Status;
}