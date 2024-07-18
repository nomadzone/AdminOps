import { CoolController, BaseController } from '@cool-midway/core';
import { SetManageEntity } from '../../entity/set_manage';

/**
 * 套餐管理
 */
@CoolController({
    prefix: '/set_manage',
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: SetManageEntity,
    pageQueryOp: {
        fieldEq: ['setState']
    },
    listQueryOp: {
        fieldEq: ['setState']
    },
})
export class SetManageController extends BaseController {

}
