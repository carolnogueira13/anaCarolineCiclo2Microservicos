import { Controller, Post, Body, Patch, Param, Delete, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { AppController } from 'src/app.controller';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco-dto';
import { UsuarioService } from './usuario.service';

@Controller('noticia-jornal')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  logger = new Logger(AppController.name)


  @EventPattern('atualizar-usuario-endereco')
  async atualizarNoticia(@Payload() payload: UpdateUsuarioEnderecoDto) {
    this.usuarioService.atualizarEndereco(payload);
    this.logger.log(`endereco atualizado: ${JSON.stringify(payload)}`)
  }

}
