import { Controller, Get } from '@nestjs/common';
import { ColorService } from './colors.service';

@Controller('color')
export class ColorsController {
  constructor(private readonly colorService: ColorService) {}

  @Get()
  async getColors(): Promise<any> {
    const colors = await this.colorService.getColors();
    return { colors };
  }
}
