import { Request, Response } from 'express';

export class EquipmentController {
  public static getEquipment = (req: Request, res: Response): void => {
    const { environmentId } = req.query;
    // TODO: si environmentId existe, filtrar por ambiente; si no, listar todos. Responder 200.
    res.status(501).json({
      success: false,
      message: environmentId
        ? `El listado de equipos del ambiente ${String(environmentId)} todavía no está implementado.`
        : 'El listado de equipos todavía no está implementado.'
    });
  };

  public static createEquipment = (req: Request, res: Response): void => {
    // TODO: pasar req.body (datos del equipo + environmentId) al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'El registro de equipos todavía no está implementado.'
    });
  };

  public static updateEquipment = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar solo los campos presentes en req.body (estado técnico, ambiente...);
    // responder 200 con el equipo actualizado o 404.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del equipo ${id} todavía no está implementada.`
    });
  };
}