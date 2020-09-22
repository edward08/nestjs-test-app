import { Injectable} from '@nestjs/common';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) 
    private userReposistory : Repository<User>){

    }
    async  findAll(): Promise<User[]> {
        return await this.userReposistory.find();
    }

    async  create(user: User): Promise<User> {
        return await this.userReposistory.save(user);
    }

    async findOne(id) : Promise<any>{
        return await this.userReposistory.findOneOrFail(id);
    }

    async update(user: User): Promise<any> {
        return await this.userReposistory.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userReposistory.delete(id);
    }

}
