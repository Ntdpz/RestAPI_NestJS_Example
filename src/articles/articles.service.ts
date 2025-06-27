import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

export interface Article {
  id: number;
  title: string;
  content: string;
  author?: string;
}

@Injectable()
export class ArticlesService {
  private articles: Article[] = []; // เก็บข้อมูล Articles ในหน่วยความจำชั่วคราว
  private nextId = 1; // สำหรับสร้าง ID อัตโนมัติ

  create(createArticleDto: CreateArticleDto): Article {
    const newArticle: Article = {
      id: this.nextId++,
      ...createArticleDto,
    };
    this.articles.push(newArticle);
    return newArticle;
  }

  findAll(): Article[] {
    return this.articles;
  }

  findOne(id: number): Article {
    const article = this.articles.find((article) => article.id === id);
    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
    return article;
  }

  update(id: number, updateArticleDto: UpdateArticleDto): Article {
    const articleIndex = this.articles.findIndex(
      (article) => article.id === id,
    );
    if (articleIndex === -1) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }

    this.articles[articleIndex] = {
      ...this.articles[articleIndex], // เก็บข้อมูลเดิมไว้
      ...updateArticleDto, // อัปเดตด้วยข้อมูลใหม่
    };
    return this.articles[articleIndex];
  }

  remove(id: number): void {
    const initialLength = this.articles.length;
    this.articles = this.articles.filter((article) => article.id !== id);
    if (this.articles.length === initialLength) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }
  }
}
