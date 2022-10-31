import { ArticleType } from '@app/article/types/article.type';

export interface IArticlesResponse {
  articles: ArticleType[];
  articlesCount: number;
}
