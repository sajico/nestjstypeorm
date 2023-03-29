import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column()
    // categoryId: number;

    @Column({ length: 500 })
    title: string;

    @Column('text')
    body: string;

    @ManyToOne(() => Category)
    category: Category;
}