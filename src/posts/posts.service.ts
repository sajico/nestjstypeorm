import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './entity/Post';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
    ) { }

    async findAll(): Promise<Post[]> {
        // return await this.postRepository.find();

        // @ManyToOne無しの場合
        // return await this.postRepository
        //     .createQueryBuilder('post')
        //     .leftJoinAndMapOne(
        //         'post.category',
        //         Category,
        //         'category',
        //         'post.categoryId=category.id'
        //     )
        //     .where('category.id=:cId', { cId: 200 })
        //     .getMany();

        // @ManyToOne有りの場合
        // return await this.postRepository
        //     .createQueryBuilder('post')
        //     .leftJoinAndSelect('post.category', 'category')
        //     .getMany();

        // return await this.postRepository.find({
        //     join: {
        //         alias: 'post',
        //         innerJoinAndSelect: {
        //             childCategory: 'post.category',
        //             parentCategory: 'childCategory.parentCategory'
        //         }
        //     }
        // });

        return await this.postRepository
            .createQueryBuilder('post')
            .innerJoinAndSelect('post.category', 'childCategory')
            .innerJoinAndSelect('childCategory.parentCategory', 'parentCategory')
            .getMany()

    }
}