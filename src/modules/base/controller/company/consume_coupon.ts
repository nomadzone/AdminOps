import { BaseController, CoolController } from "@cool-midway/core";
import { ConsumeCouponEntity } from "../../entity/consume_coupon";


@CoolController({
    prefix: "/consume_coupon",
    api: ['add', 'update', 'list', 'page'],
    entity: ConsumeCouponEntity
})
export class ConsumeCouponController extends BaseController {
}
