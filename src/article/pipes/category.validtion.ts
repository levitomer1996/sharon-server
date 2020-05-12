import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ArticleCategory } from '../article.enum';
export class ArticleCategoryAllowed implements PipeTransform {
  readonly allowedStatuses = [
    ArticleCategory.nutrition,
    ArticleCategory.sustainability,
    ArticleCategory.healthlifestyle,
    ArticleCategory.greenlandscape,
  ];

  transform(value: any) {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`"${value}" is an invalid status`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
