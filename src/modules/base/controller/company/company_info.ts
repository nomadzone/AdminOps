import { CoolController, BaseController } from '@cool-midway/core';
import { CompanyInfoEntity } from '../../entity/company_info'

@CoolController({
    prefix: "/company_info",
    api: ['add', 'delete', 'info'],
    entity: CompanyInfoEntity,
})
export class CompanyInfoController extends BaseController {
}
