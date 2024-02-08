import { Injectable, NotFoundException } from '@nestjs/common';
import CreateUserDto from './dtos/create-user.dto';
import { Repository } from 'typeorm';
import User from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  private records = [];

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    const record = this.usersRepository.findOne({
      where: { id },
    });

    if (record === null) {
      throw new NotFoundException(`User #${id} not found`);
    }
  }

  create(new_user: CreateUserDto) {
    const user = this.usersRepository.create(new_user);
    return this.usersRepository.save(user);
  }
}
