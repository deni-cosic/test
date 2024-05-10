import { Test, TestingModule } from '@nestjs/testing'
import { MAILJET_CONFIG } from './mailjet.constants'
import { MailjetService } from './mailjet.service'

describe('MailjetService', () => {
  let service: MailjetService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: MAILJET_CONFIG,
          useValue: {
            privateKey: 'test',
            publicKey: 'test',
          },
        },
        MailjetService,
      ],
    }).compile()

    service = module.get<MailjetService>(MailjetService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
