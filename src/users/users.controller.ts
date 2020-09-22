import {Body, Controller, Delete, Get, Param, Post, Put, Query} from '@nestjs/common';
import {UsersService} from "./users.service";
import { User } from './entity/user.entity';

@Controller('users')
export class UsersController{
    constructor(private service : UsersService) {}

    @Get()
    index(): Promise<User[]> {
      return this.service.findAll();
    } 
    
    @Post()
    async create(@Body() userData: User): Promise<any> {
      return this.service.create(userData);
    }

    @Get(':id')
    async findOne(@Param('id') id : number) : Promise<User>{
        return this.service.findOne(id);
    }
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() userData: User): Promise<any> {
        userData.id = Number(id);
        console.log('Update #' + userData.id)
        return this.service.update(userData);
    }
    
    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.service.delete(id);
    }  
}