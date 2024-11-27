import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/configuration/prisma/prisma.service';
import { UpdateUsuarioEnderecoDto } from './dto/update-usuario-endereco-dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly prisma: PrismaService) { }
  
  async atualizarEndereco(payload: { id: number; usuario_endereco: string }) {
    const { id, usuario_endereco } = payload;

    return await this.prisma.usuario.update({
      where: { usuario_id: id }, // Encontrar o usuário pelo ID
      data: { usuario_endereco }, // Atualizar o campo 'usuario_endereco'
    });
  }
}
