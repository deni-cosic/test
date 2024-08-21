import { DynamicModule, Module } from '@nestjs/common'
import { MAILJET_CONFIG } from './mailjet.constants'
import { MailjetService } from './mailjet.service'
import { MailjetConfig } from './MailjetConfig'
import { MailjetModuleOptions } from './MailjetModuleOptions'

@Module({})
export class MailjetModule {
  static forRoot(config: MailjetConfig): DynamicModule {
    return {
      module: MailjetModule,
      providers: [
        {
          provide: MAILJET_CONFIG,
          useValue: config,
        },
        MailjetService,
      ],
      exports: [MailjetService],
    }
  }

  static forRootAsync(options: MailjetModuleOptions): DynamicModule {
    const { imports, useFactory, inject } = options

    return {
      module: MailjetModule,
      imports,
      providers: [
        {
          provide: MAILJET_CONFIG,
          useFactory: useFactory,
          inject: inject,
        },
        MailjetService,
      ],
      exports: [MailjetService],
    }
  }
}
