import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { DataSource, JsonContains } from 'typeorm';
import Account from './account/entities/account.entity';
import { AppService } from './app.service';
import Owner from './owner/entities/owner.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get()
  @Render('index')
  index() {
    return { message: 'Welcome to the homepage' };
  }

  @Post('transfer/:sourceId/:targetId')
  async transfer(
    @Param('sourceId') sourceId: number,
    @Param('targetId') targetId: number,
  ) {
    const accountRepo = this.dataSource.getRepository(Account);
    const sourcebalance = (
      await accountRepo.findOne({ where: { id: sourceId } })
    ).balance;

    const targetbalance = (
      await accountRepo.findOne({ where: { id: targetId } })
    ).balance;

    const amount = 5000;

    if (sourcebalance - amount < targetbalance) {
      throw new Error('nincs eleg penz');
    } else {
      targetbalance + sourcebalance;
      sourcebalance - sourcebalance;
    }
  }
}
