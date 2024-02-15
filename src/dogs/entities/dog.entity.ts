import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Dog;
