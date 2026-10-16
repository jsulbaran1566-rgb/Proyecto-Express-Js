import { Request, Response } from 'express';

export class DashboardController {
  public static getSummary = (req: Request, res: Response): void => {
    // TODO: responder 200 con los contadores:
    // { usuarios, ambientesActivos, equiposOperativos, novedadesCriticasSinResolver }
    res.status(501).json({
      success: false,
      message: 'El resumen del dashboard todavía no está implementado.'
    });
  };
}