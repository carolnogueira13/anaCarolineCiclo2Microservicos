import { Module } from '@nestjs/common';
import { PrismaService } from 'src/configuration/prisma/prisma.service';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService,PrismaService],
})
export class NoticiaJornalModule {}
