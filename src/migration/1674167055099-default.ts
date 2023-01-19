import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674167055099 implements MigrationInterface {
    name = 'default1674167055099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`workload\` int NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`discipline\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`workload\` int NOT NULL, \`courseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`discipline\` ADD CONSTRAINT \`FK_7751bf2b2410099c6637b0bd0b9\` FOREIGN KEY (\`courseId\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`discipline\` DROP FOREIGN KEY \`FK_7751bf2b2410099c6637b0bd0b9\``);
        await queryRunner.query(`DROP TABLE \`discipline\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
    }

}
