import { Repository } from 'typeorm';
import { ClienteMercaderia } from './entities/cliente_mercaderia.entity';
export declare class ClienteMercaderiaService {
    private readonly clienteMercaderiaRepository;
    constructor(clienteMercaderiaRepository: Repository<ClienteMercaderia>);
    create(clienteID: number, codigo: string, fecha: Date): Promise<ClienteMercaderia>;
    findAll(): Promise<ClienteMercaderia[]>;
    getMercaderiasPorClienteID(clienteID: number): Promise<{
        Nombre: string;
        precio: number;
    }[]>;
    getIdsClienteMercaderiaPorClienteID(clienteID: number): Promise<number[]>;
    remove(id: number): Promise<boolean>;
}
