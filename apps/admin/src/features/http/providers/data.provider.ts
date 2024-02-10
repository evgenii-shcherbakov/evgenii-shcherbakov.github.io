import {
  CreateParams,
  DataProvider,
  GetListParams,
  GetListResult,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  GetManyResult,
  GetOneParams,
  GetOneResult,
  Identifier,
  RaRecord,
  UpdateManyParams,
  UpdateManyResult,
  UpdateParams,
  UpdateResult,
  CreateResult,
  DeleteManyParams,
  DeleteManyResult,
  DeleteParams,
  DeleteResult,
} from 'react-admin';
import { HttpService } from '@features/http/services/http.service';

export const dataProvider = ((): DataProvider => {
  const httpService = new HttpService(`/api/resources`);
  const DEFAULT_PAGE = 1;
  const DEFAULT_ITEMS = 10;

  const parseParams = (params: GetListParams | GetManyReferenceParams) => {
    return {
      page: params.pagination.page ?? DEFAULT_PAGE,
      items: params.pagination.perPage ?? DEFAULT_ITEMS,
      sortBy: params.sort?.field ?? '',
      sortOrder: params.sort?.order ?? '',
    };
  };

  const getList = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetListParams,
  ): Promise<GetListResult<RecordType>> => {
    try {
      const query = {
        ...parseParams(params),
        filter: params.filter ? JSON.stringify(params.filter) : '',
      };

      return httpService.get(resource, { query });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const getOne = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetOneParams<RecordType>,
  ): Promise<GetOneResult<RecordType>> => {
    return httpService.get(`${resource}/${params.id}`);
  };

  const getMany = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyParams,
  ): Promise<GetManyResult<RecordType>> => {
    const query = {
      ids: JSON.stringify(params.ids),
    };

    return httpService.get(resource, { query });
  };

  const getManyReference = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: GetManyReferenceParams,
  ): Promise<GetManyReferenceResult<RecordType>> => {
    const query = {
      ...parseParams(params),
      filter: JSON.stringify({
        [params.target]: params.id,
        ...(params.filter ?? {}),
      }),
    };

    return httpService.get(resource, { query });
  };

  const update = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateParams<any>,
  ): Promise<UpdateResult<RecordType>> => {
    return httpService.put(`${resource}/${params.id}`, { body: params.data });
  };

  const updateMany = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: UpdateManyParams<any>,
  ): Promise<UpdateManyResult<RecordType>> => {
    return httpService.put(resource, { body: { ids: params.ids, update: params.data } });
  };

  const create = async <
    RecordType extends Omit<RaRecord<Identifier>, 'id'> = any,
    ResultRecordType extends RaRecord<Identifier> = RecordType & { id: Identifier },
  >(
    resource: string,
    params: CreateParams,
  ): Promise<CreateResult<ResultRecordType>> => {
    return httpService.post(resource, { body: params.data });
  };

  const deleteHandler = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteParams<RecordType>,
  ): Promise<DeleteResult<RecordType>> => {
    return httpService.delete(`${resource}/${params.id}`);
  };

  const deleteMany = async <RecordType extends RaRecord<Identifier> = any>(
    resource: string,
    params: DeleteManyParams<RecordType>,
  ): Promise<DeleteManyResult<RecordType>> => {
    return httpService.delete(resource, { body: { ids: params.ids } });
  };

  return {
    getList,
    getOne,
    getMany,
    getManyReference,
    update,
    updateMany,
    create,
    delete: deleteHandler,
    deleteMany,
  };
})();
