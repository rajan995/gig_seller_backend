import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './app/auth/auth.module';
import { SchemaModule } from './schema/schema.module';
import { ConfigModule } from '@nestjs/config';

import { GigsModule } from './app/gigs/gigs.module';
import { ResumesController } from './app/resumes/resumes.controller';
import { ResumesService } from './app/resumes/resumes.service';
import { ResumesModule } from './app/resumes/resumes.module';

const env = {dev : './environment/dev.env',prod:'./environment/prod.env'}

const _mongoDbConfig = MongooseModule.forRoot('mongodb://localhost:27017/fiverr');

const _environment = ConfigModule.forRoot({ envFilePath:  env.dev,isGlobal:true});

@Module({
  imports: [_mongoDbConfig, AuthModule, SchemaModule, _environment, GigsModule, ResumesModule],
  controllers: [ResumesController],
  providers: [ResumesService],
})
export class AppModule { }
