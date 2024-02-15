import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Dog from './entities/dog.entity';
import { Repository } from 'typeorm';
import CreateDogDto from './dtos/create-dog.dto';
import UpdateDogDto from './dtos/update-dog.dto';

@Injectable()
export class DogsService {
  private records = [];

  constructor(
    @InjectRepository(Dog)
    private readonly dogsRepository: Repository<Dog>,
  ) {}

  findAll() {
    return this.dogsRepository.find();
  }

  async findOne(id: number) {
    const record = await this.dogsRepository.findOne({
      where: { id },
    });

    if (record === null) {
      throw new NotFoundException(`Dog #${id} not found`);
    }

    return record;
  }

  create(new_dog: CreateDogDto) {
    const dog = this.dogsRepository.create(new_dog);
    return this.dogsRepository.save(dog);
  }

  async update(id: number, update_dog: UpdateDogDto) {
    const dog = await this.findOne(id);

    this.dogsRepository.merge(dog, update_dog);

    return this.dogsRepository.save(dog);
  }

  async remove(id: number) {
    const dog = await this.findOne(id);

    return this.dogsRepository.remove(dog);
  }
}
