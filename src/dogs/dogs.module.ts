import { Module } from '@nestjs/common';
import { DogsController } from './dogs.controller';
import { DogsService } from './dogs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Dog from './entities/dog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Dog])],
  controllers: [DogsController],
  providers: [DogsService],
})
export class DogsModule {}
