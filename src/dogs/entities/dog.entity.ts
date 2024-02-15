import User from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum Genero {
  masculino = 1,
  femenino = 0,
}

@Entity('dogs')
class Dog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  raza: string;

  @Column({ type: 'varchar', length: 255 })
  nombre: string;

  @Column()
  edad: number;

  @Column()
  peso: number;

  @Column({ type: 'enum', enum: Genero })
  genero: Genero;

  @ManyToOne(() => User, (user) => user.dogs)
  user: User;
}

export default Dog;
