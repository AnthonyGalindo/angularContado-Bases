export interface Contrato {
    dicon_operdora_cod?: number;
    dicon_codigo: string;
    dicon_numero: string;
    dicon_vigencia: string;
    dicon_fecha_firma: Date;
    dictp_codigo_tipo_contrato: string;
    dicon_cantidad: number;
    dicon_valor_total: number;
    dicon_cliente: string;
    dicon_fecha_vencimiento?: Date; // Propiedades opcionales
    dicon_estado: 'activo' | 'inactivo' | 'cancelado'; // Tipo enumerado para el estado
    dicon_observaciones?: string | 'no hay';
    dicon_operadoraa:string ;
  }