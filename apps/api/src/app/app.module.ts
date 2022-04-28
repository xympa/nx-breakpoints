import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entities/User.entity';
import { nova1651093886996 } from '../migrations/1651093886996-nova';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'teste',
      entities: [User],
      synchronize: false,
      migrationsRun: true,
      migrations: [nova1651093886996],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
