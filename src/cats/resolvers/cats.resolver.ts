import { Resolver , Query, Mutation, Args } from "@nestjs/graphql";
import { CatsService } from "../cats.service";
import { CatType } from "../dto/create-cat.dto";
import { CatInput } from "../input/cat.input";


@Resolver()
export class CatsResolver {
  constructor(
    private catsService: CatsService,
  ) {}

  @Query( () => String ) // sample query to check working
  async hello() {
    // return this.authorsService.findOneById(id);
    return 'Hello Sid - Learning is great!';
  }

  @Query( () => [CatType] )
    async cats() {
        return this.catsService.findAll();
    }

    
  @Mutation( () => CatType )
  async createCat(@Args('input') input: CatInput) {
      return this.catsService.create(input);
  }
  
}