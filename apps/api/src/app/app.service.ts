import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/User.entity';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ){}

  async getData(): Promise<{ message: string }> {

    const tudo =  await this.userRepository.find();

    await this.userRepository.insert({
      username: null
    })

    return { message: 'Welcome to api!' };
  }
}
