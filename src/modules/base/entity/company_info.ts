import { BaseEntity } from '@cool-midway/core';
import { Column, Entity, Index } from 'typeorm';

/**
 * 实名认证
 */
@Entity('company_info')
export class CompanyInfoEntity extends BaseEntity {

    @Column({ comment: '审核状态' })
    auditStatus: string;

    @Column({ comment: '类型(公司or个人)' })
    type: string;

    @Column({ comment: '公司名称', nullable: true })
    companyName: string;

    @Column({ comment: '公司联系人', nullable: true })
    companyContact: string;

    @Column({ comment: '联系人电话', nullable: true })
    contactPhone: string;

    @Column({ comment: '营业执照注册号', nullable: true })
    businessLicenseNo: string;

    @Column({ comment: '营业执照图片', nullable: true })
    businessLicensePic: string;

    @Column({ comment: '法人身份证-正面' })
    identityCardFront: string;

    @Column({ comment: '法人身份证-反面' })
    identityCardBack: string;

    @Column({ comment: '法人姓名' })
    name: string;

}
