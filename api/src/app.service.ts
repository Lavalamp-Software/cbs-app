import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  index(): HttpStatus {
    return HttpStatus.OK
}
}
