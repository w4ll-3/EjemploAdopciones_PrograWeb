import { MigrationInterface, QueryRunner } from "typeorm";

export class LastnameModified1710225229982 implements MigrationInterface {
    name = 'LastnameModified1710225229982'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastname" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastname" SET DEFAULT ''`);
    }

}
