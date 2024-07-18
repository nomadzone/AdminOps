import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('consume_coupon')
export class ConsumeCouponEntity extends BaseEntity {

    @Column({ comment: '订单号' })
    orderId: string;

    @Column({ comment: '验证券码' })
    code: string;

    @Column({ comment: '验证方式', nullable: true })
    checkType: string;

    @Column({ comment: '操作员', nullable: true })
    operationUserId: string;

    @Column({ comment: '套餐名称' })
    setName: string;

    @Column({ comment: '下单手机号' })
    phone: string;

    @Column({ comment: '是否已使用' })
    useStats: boolean;

    @Column({ comment: '验证时间', nullable: true })
    checkTime: number;

    @Column({ comment: '购买价', type: 'decimal', precision: 5, scale: 2 })
    price: number;

}
