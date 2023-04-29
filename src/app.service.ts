import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new InternalServerErrorException('test error');
  }
}
