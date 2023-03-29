import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ParentCategory } from './ParentCategory';

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    label: string;

    @Column('text')
    description: string;

    @ManyToOne(() => ParentCategory)
    parentCategory: ParentCategory;
}