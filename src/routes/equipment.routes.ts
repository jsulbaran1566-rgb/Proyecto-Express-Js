import { Router } from 'express';
import { EquipmentController } from '../controllers/equipment.controller';

const router = Router();

// GET /equipment                    -> todos los equipos
// GET /equipment?environmentId=12   -> equipos de un ambiente
router.get('/', EquipmentController.getEquipment);
router.post('/', EquipmentController.createEquipment);
router.patch('/:id', EquipmentController.updateEquipment);

export default router;