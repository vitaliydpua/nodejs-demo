import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { PeopleModule } from './people/people.module';
import { PositionsModule } from './positions/positions.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost/nest'),
    PostsModule,
    PeopleModule,
    PositionsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
