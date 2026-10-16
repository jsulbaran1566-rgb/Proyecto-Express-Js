import { Request, Response } from 'express';

export class UserController {
  public static getUsers = (req: Request, res: Response): void => {
    // TODO: llamar al servicio y responder 200 con el listado de usuarios.
    res.status(501).json({
      success: false,
      message: 'El listado de usuarios todavía no está implementado.'
    });
  };

  public static createUser = (req: Request, res: Response): void => {
    // TODO: pasar req.body (nombre, correo, rol: estudiante | docente | administrador)
    // al servicio y responder 201 con el usuario creado.
    res.status(501).json({
      success: false,
      message: 'El registro de usuarios todavía no está implementado.'
    });
  };

  public static getUserById = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: consultar el usuario por id; responder 200 o 404.
    res.status(501).json({
      success: false,
      message: `La consulta del usuario ${id} todavía no está implementada.`
    });
  };

  public static updateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: aplicar solo los campos presentes en req.body (rol, estado, contraseña);
    // responder 200 con el usuario actualizado o 404.
    res.status(501).json({
      success: false,
      message: `La actualización parcial del usuario ${id} todavía no está implementada.`
    });
  };

  public static deactivateUser = (req: Request, res: Response): void => {
    const { id } = req.params;
    // TODO: eliminación lógica: marcar al usuario como inactivo/eliminado (sin borrar el registro);
    // responder 200 con el usuario actualizado o 404.
    res.status(501).json({
      success: false,
      message: `La eliminación lógica del usuario ${id} todavía no está implementada.`
    });
  };
}