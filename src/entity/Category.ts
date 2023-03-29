import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    label: string;

    @Column('text')
    description: string;
}