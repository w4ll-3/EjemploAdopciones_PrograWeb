import { MigrationInterface, QueryRunner } from "typeorm";

export class LastnameModified21710225697121 implements MigrationInterface {
    name = 'LastnameModified21710225697121'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastname" SET DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "lastname" DROP DEFAULT`);
    }

}
