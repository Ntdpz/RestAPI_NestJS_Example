import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Controller('articles') //ตั้งชื่อ Enpoint
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // กำหนด Status Code เมื่อสร้างสำเร็จ
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }
  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Get(':id') // กำหนด Path Parameter เป็น :id
  findOne(@Param('id') id: string) {
    return this.articlesService.findOne(+id); // +id แปลง string เป็น number
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
    return this.articlesService.update(+id, updateArticleDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // กำหนด Status Code เมื่อลบสำเร็จและไม่มี content
  remove(@Param('id') id: string) {
    this.articlesService.remove(+id);
  }
}
