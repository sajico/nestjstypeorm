import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/Category';
import { Repository } from 'typeorm';
import { Post } from '../entity/Post';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    async findAll(): Promise<(Post & Partial<Category>)[]> {
        // return await this.postRepository.find();
        return await this.postRepository
            .createQueryBuilder('post')
            .leftJoinAndMapOne(
                'post.category',
                Category,
                'category',
                'post.categoryId=category.id'
            )
            .where('category.id=:cId', { cId: 200 })
            .getMany();
    }
}