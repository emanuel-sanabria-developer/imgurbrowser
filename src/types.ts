export type ImagesSection = 'hot' | 'top' | 'user';
export type ImagesSorting =
  | 'viral'
  | 'top'
  | 'time'
  | 'rising';
export type ImagesTimeWindow =
  | 'day'
  | 'week'
  | 'month'
  | 'year'
  | 'all';

export interface ImagesRequestParams {
  page?: number;
  section?: ImagesSection;
  sort?: ImagesSorting;
  window?: ImagesTimeWindow;
  showViral?: boolean;
}

export type ImageId = string;

export interface Image {
  id?: ImageId;
  link?: string;
  title?: string;
  description?: string | null;
  ups?: number;
  downs?: number;
  score?: number;
  is_album?: boolean;
  [x: string]: any;
}
