import { CoolController, BaseController } from '@cool-midway/core';
import { DemoChipsEntity } from '../../entity/chips';
import { Get } from '@midwayjs/core';

/**
 * 商品
 */
@CoolController({
    // prefix: "/aaa", // 可用
    api: ['add', 'delete', 'update', 'info', 'list', 'page'],
    entity: DemoChipsEntity,
    pageQueryOp: {
        keyWordLikeFields: ['title', 'pic'],
        fieldEq: ['title', 'pic']
    },
    listQueryOp: {
        keyWordLikeFields: ['title', 'pic'],
        fieldEq: ['title', 'pic']
    },
})
export class OpenDemoChipsController extends BaseController {
    /**
     * 其他接口
     */
    @Get('/other')
    async other() {
        return this.ok('hello, cool-admin!!!');
    }

}
