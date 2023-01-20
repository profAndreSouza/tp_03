import { MigrationInterface, QueryRunner } from "typeorm";

export class default1674171109456 implements MigrationInterface {
    name = 'default1674171109456'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`persons\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`cpf\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`classes\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`start\` datetime NOT NULL, \`end\` datetime NOT NULL, \`courseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`courses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`workload\` int NOT NULL, \`isActive\` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`disciplines\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`workload\` int NOT NULL, \`courseId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`phone\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`class_student\` (\`personId\` int NOT NULL, \`classId\` int NOT NULL, INDEX \`IDX_b9f2ef4a36276dda7461026445\` (\`personId\`), INDEX \`IDX_cb51ecfbd132b9e67e8a228b22\` (\`classId\`), PRIMARY KEY (\`personId\`, \`classId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`classes\` ADD CONSTRAINT \`FK_91fb6af6df84c442e4a15b17609\` FOREIGN KEY (\`courseId\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`disciplines\` ADD CONSTRAINT \`FK_c0c0d7c0953fdd6489103df792e\` FOREIGN KEY (\`courseId\`) REFERENCES \`courses\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`class_student\` ADD CONSTRAINT \`FK_b9f2ef4a36276dda74610264453\` FOREIGN KEY (\`personId\`) REFERENCES \`classes\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`class_student\` ADD CONSTRAINT \`FK_cb51ecfbd132b9e67e8a228b22b\` FOREIGN KEY (\`classId\`) REFERENCES \`persons\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`class_student\` DROP FOREIGN KEY \`FK_cb51ecfbd132b9e67e8a228b22b\``);
        await queryRunner.query(`ALTER TABLE \`class_student\` DROP FOREIGN KEY \`FK_b9f2ef4a36276dda74610264453\``);
        await queryRunner.query(`ALTER TABLE \`disciplines\` DROP FOREIGN KEY \`FK_c0c0d7c0953fdd6489103df792e\``);
        await queryRunner.query(`ALTER TABLE \`classes\` DROP FOREIGN KEY \`FK_91fb6af6df84c442e4a15b17609\``);
        await queryRunner.query(`DROP INDEX \`IDX_cb51ecfbd132b9e67e8a228b22\` ON \`class_student\``);
        await queryRunner.query(`DROP INDEX \`IDX_b9f2ef4a36276dda7461026445\` ON \`class_student\``);
        await queryRunner.query(`DROP TABLE \`class_student\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
        await queryRunner.query(`DROP TABLE \`disciplines\``);
        await queryRunner.query(`DROP TABLE \`courses\``);
        await queryRunner.query(`DROP TABLE \`classes\``);
        await queryRunner.query(`DROP TABLE \`persons\``);
    }

}
