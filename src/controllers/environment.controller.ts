import { Request, Response } from 'express';

export class EnvironmentController {
  public static getEnvironments = (req: Request, res: Response): void => {
    // TODO: responder 200 con todos los laboratorios y espacios físicos.
    res.status(501).json({
      success: false,
      message: 'El listado de ambientes todavía no está implementado.'
    });
  };

  public static createEnvironment = (req: Request, res: Response): void => {
    // TODO: pasar req.body (nombre, capacidad, ubicación) al servicio y responder 201.
    res.status(501).json({
      success: false,
      message: 'La creación de ambientes todavía no está implementada.'
    });
  };

  public static updateEnvironment = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar solo los campos presentes en req.body (capacidad, estado operativo...);
    // responder 200 con el ambiente actualizado o 404.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del ambiente ${id} todavía no está implementada.`
    });
  };
}