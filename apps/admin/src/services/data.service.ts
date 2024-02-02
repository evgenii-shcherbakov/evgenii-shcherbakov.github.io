import type {
  RaRecord,
  GetListParams,
  GetOneResult,
  GetManyResult,
  GetListResult,
  GetOneParams,
  GetManyParams,
  GetManyReferenceParams,
  GetManyReferenceResult,
  UpdateParams,
  UpdateResult,
  UpdateManyParams,
  UpdateManyResult,
  Identifier,
  CreateParams,
  CreateResult,
  DeleteParams,
  DeleteResult,
  DeleteManyParams,
  DeleteManyResult,
  // DataProvider,
} from 'react-admin';
import { HttpService } from '@/services/http.service';
import { BACKEND_URL } from '@/constants/environment';

// interface Provider extends DataProvider {}

export class DataService {
  private readonly httpClient = new HttpService(`${BACKEND_URL}/internal`);
  private readonly DEFAULT_PAGE = 1;
  private readonly DEFAULT_ITEMS = 10;

  private static cachedInstance: DataService | undefined;

  async getList<
    RecordType extends RaRecord<Identifier> = any,
    ResourceType extends string = string
  >(resource: ResourceType, params: GetListParams): Promise<GetListResult<RecordType>> {
    try {
      const query = {
        page: params.pagination.page ?? this.DEFAULT_PAGE,
        items: params.pagination.perPage ?? this.DEFAULT_ITEMS,
        sortBy: params.sort?.field ?? '',
        sortOrder: params.sort?.order ?? '',
        filter: params.filter ? JSON.stringify(params.filter) : '',
      };

      return this.httpClient.get(resource, { query });
    } catch (e) {
      console.log(e);
      return Promise.reject(e);
    }
  }

  getOne<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: GetOneParams<RecordType>
  ): Promise<GetOneResult<RecordType>> {
    return this.httpClient.get(`${resource}/${params.id}`);
  }

  getMany<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: GetManyParams
  ): Promise<GetManyResult<RecordType>> {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };

    return this.httpClient.get(resource, { query });
  }

  getManyReference<
    RecordType extends RaRecord<Identifier> = any,
    ResourceType extends string = string
  >(
    resource: ResourceType,
    params: GetManyReferenceParams
  ): Promise<GetManyReferenceResult<RecordType>> {
    const query = {
      page: params.pagination.page ?? this.DEFAULT_PAGE,
      items: params.pagination.perPage ?? this.DEFAULT_ITEMS,
      sortBy: params.sort?.field ?? '',
      sortOrder: params.sort?.order ?? '',
      filter: JSON.stringify({
        [params.target]: params.id,
        ...(params.filter ?? {}),
      }),
    };

    return this.httpClient.get(resource, { query });
  }

  update<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: UpdateParams
  ): Promise<UpdateResult<RecordType>> {
    return this.httpClient.patch(`${resource}/${params.id}`, { body: params.data });
  }

  updateMany<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: UpdateManyParams
  ): Promise<UpdateManyResult<RecordType>> {
    return this.httpClient.put(resource, { body: { ids: params.ids, update: params.data } });
  }

  create<
    RecordType extends Omit<RaRecord<Identifier>, 'id'> = any,
    ResultRecordType extends RaRecord<Identifier> = RecordType & { id: Identifier },
    ResourceType extends string = string
  >(resource: ResourceType, params: CreateParams): Promise<CreateResult<ResultRecordType>> {
    return this.httpClient.post(resource, { body: params.data });
  }

  delete<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: DeleteParams<RecordType>
  ): Promise<DeleteResult<RecordType>> {
    return this.httpClient.delete(`${resource}/${params.id}`);
  }

  deleteMany<RecordType extends RaRecord<Identifier> = any, ResourceType extends string = string>(
    resource: ResourceType,
    params: DeleteManyParams<RecordType>
  ): Promise<DeleteManyResult<RecordType>> {
    return this.httpClient.delete(resource, { body: { ids: params.ids } });
  }

  static get instance() {
    if (DataService.cachedInstance) {
      return DataService.cachedInstance;
    }

    DataService.cachedInstance = new this();
    return DataService.cachedInstance;
  }
}
