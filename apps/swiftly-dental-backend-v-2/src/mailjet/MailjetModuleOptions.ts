import { ModuleMetadata } from '@nestjs/common'

import { MailjetConfig } from './MailjetConfig'

export interface MailjetModuleOptions extends Pick<ModuleMetadata, 'imports'> {
  useFactory: (...args: any[]) => Promise<MailjetConfig> | MailjetConfig
  inject: any[]
}
