import { Request, Response } from 'express';

export class IncidentController {
  public static getIncidents = (req: Request, res: Response): void => {
    // TODO: responder 200 con el historial completo de novedades.
    res.status(501).json({
      success: false,
      message: 'El historial de novedades todavía no está implementado.'
    });
  };

  public static createIncident = (req: Request, res: Response): void => {
    // TODO: pasar req.body (descripción + equipmentId o environmentId) al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El reporte de novedades todavía no está implementado.'
    });
  };

  public static updateIncident = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar req.body.status (pendiente | en_proceso | resuelto); responder 200 o 404.
    res.status(501).json({
      success: false,
      message: `La actualización parcial de la novedad ${id} todavía no está implementada.`
    });
  };
}