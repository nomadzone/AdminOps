import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

@Entity('set_manage')
export class SetManageEntity extends BaseEntity {

    @Column({ comment: '套餐名称' })
    setName: string;

    @Column({ comment: '销量' })
    salesVolume: string;

    @Column({ comment: '状态: (待上线, 已上线)' })
    setState: string;

    @Column({ comment: '最近变更时间' })
    lastUpdateTime: number;


    @Column({ comment: '适用人数' })
    peopleNumber: number;

    @Column({ comment: '套餐内容', type: "text" })
    setContent: number;

    @Column({ comment: '套餐价', type: 'decimal', precision: 5, scale: 2 })
    setPrice: number;

    @Column({ comment: '门店价', type: 'decimal', precision: 5, scale: 2 })
    shopPrice: number;

    @Column({ comment: '团购价', type: 'decimal', precision: 5, scale: 2 })
    groupPrice: number;

    @Column({ comment: '有效期-开始' })
    startTime: number;

    @Column({ comment: '有效期-结束' })
    endTime: number;

    @Column({ comment: '不可用日期' })
    disabledDate: string;

    @Column({ comment: '使用时间' })
    usableTime: string;

    @Column({ comment: '套餐总数 (-1: 不限数量; x: 最多可卖)' })
    maxBuyable: string;

    @Column({ comment: '宣传图' })
    publicityPic: string;

    @Column({ comment: '团购图文详情', type: "text" })
    groupPicText: string;

}
