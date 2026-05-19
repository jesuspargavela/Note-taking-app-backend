import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { TagsModule } from './tags/tags.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Note } from './notes/notes.model';

@Module({
  imports: [NotesModule, TagsModule, SequelizeModule.forRoot({
    dialect: 'mysql',
    logging: console.log,
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'notes_db',
    autoLoadModels: true,
    synchronize: true,
    models: [Note],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
