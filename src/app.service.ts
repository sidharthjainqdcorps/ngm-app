import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Graphql-Nestjs-Mongo CRUD app. ';
  }
}
