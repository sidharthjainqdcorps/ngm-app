import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './resolvers/cats.resolver';
import { Cat, CatSchema } from './schema/cats.schema';
import { CatsService } from './cats.service';



@Module({
    imports: [MongooseModule.forFeature([
            {
            name: 'Cat', 
            schema: CatSchema 
            }
        ]
    )],    
    providers: [CatsResolver, CatsService],
})

export class CatsModule {}





