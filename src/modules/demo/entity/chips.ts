import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * chips
 */
@Entity('demo_chips')
export class DemoChipsEntity extends BaseEntity {
    @Column({ comment: '标题' })
    title: string;

    @Column({ comment: '图片', nullable: true })
    pic: string;

    @Column({ comment: '价格', type: 'decimal', precision: 5, scale: 2 })
    price: number;
}
