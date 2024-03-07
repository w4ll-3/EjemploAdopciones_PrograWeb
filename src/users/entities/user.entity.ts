import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Role from './role.entity';
import Dog from 'src/dogs/entities/dog.entity';
import { ApiProperty } from '@nestjs/swagger';
import * as bcrypt from 'bcrypt';

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  @ApiProperty({
    description: 'The name of the User',
    example: 'John',
  })
  name: string;

  @Column({ type: 'varchar', length: 255, default: '' })
  @ApiProperty()
  lastname: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar', nullable: true })
  address?: string;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;

  @OneToMany(() => Dog, (dog) => dog.user)
  dogs: Dog[];

  @Column({ type: 'varchar', default: '' })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(this.password, saltOrRounds);
    this.password = hash;
  }
}

export default User;
