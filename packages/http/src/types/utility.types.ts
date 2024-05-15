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

export type TransformUrlToIdentifier<Url extends string> =
  Url extends `${infer Prefix}/${infer Rest}`
    ? `${Capitalize<TransformUrlToIdentifier<Prefix>>}${Capitalize<TransformUrlToIdentifier<Rest>>}`
    : Url extends `${infer Prefix}/:${infer Rest}`
      ? `${Capitalize<TransformUrlToIdentifier<Prefix>>}${Capitalize<TransformUrlToIdentifier<Rest>>}`
      : Url extends `${infer Prefix}:${infer Rest}`
        ? `${Capitalize<TransformUrlToIdentifier<Prefix>>}${Capitalize<TransformUrlToIdentifier<Rest>>}`
        : Url extends `:${infer Rest}`
          ? `${Capitalize<TransformUrlToIdentifier<Rest>>}`
          : Url extends `/${infer Rest}`
            ? `${Capitalize<TransformUrlToIdentifier<Rest>>}`
            : Capitalize<Url>;
