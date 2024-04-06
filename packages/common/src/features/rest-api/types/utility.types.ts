type RequestParam = string | symbol | number | boolean;

export type SliceRequestPath<
  SlicedPart extends string,
  Path extends string,
> = Path extends `${SlicedPart}/${infer Rest}` ? Rest : '';

export type RouteParamsOf<Endpoint extends string> =
  Endpoint extends `${infer Start}:${infer Param}/${infer Rest}`
    ? { [K in Param | keyof RouteParamsOf<Rest>]: RequestParam }
    : Endpoint extends `${infer Start}:${infer Param}`
      ? { [K in Param]: RequestParam }
      : undefined;
