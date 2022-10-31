import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedDb1653761158835 implements MigrationInterface {
  name = 'SeedDb1653761158835';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO tags (name) VALUES ('dragons'), ('coffee'), ('nestjs')`,
    );

    //password is 123456
    await queryRunner.query(
      `INSERT INTO users (username, email, password) VALUES ('volodka', 'volodka@gmail.com', '$2b$10$YDZgf1/uy/vfm9N4EpwB3OmndaVMZaMFLiXxYlfwwfjpJ4V4mTSAi')`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('first-article', 'First article', 'first article desc', 'first article body', 'coffee, dragons', 1)`,
    );

    await queryRunner.query(
      `INSERT INTO articles (slug, title, description, body, "tagList", "authorId") VALUES ('second-article', 'Second article', 'second article desc', 'second article body', 'coffee, dragons', 1)`,
    );
  }

  public async down(): Promise<void> {}
}
