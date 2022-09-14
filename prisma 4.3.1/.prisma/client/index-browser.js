
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.1
 * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
 */
Prisma.prismaVersion = {
  client: "4.3.1",
  engine: "c875e43600dfe042452e0b868f7a48b817b9640b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AgencyScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  country_id: 'country_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Berth_productsScalarFieldEnum = makeEnum({
  id: 'id',
  loadingCapacity: 'loadingCapacity',
  unloadingCapacity: 'unloadingCapacity',
  berthId: 'berthId',
  productId: 'productId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.BerthsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  portId: 'portId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  maxDraft: 'maxDraft',
  airDraft: 'airDraft',
  maxLengthOverall: 'maxLengthOverall',
  maxDeadWeightTonnage: 'maxDeadWeightTonnage',
  maxBeam: 'maxBeam',
  waterDensity: 'waterDensity'
});

exports.Prisma.ChecklistTemplateItemScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  working_days: 'working_days',
  checklist_template_id: 'checklist_template_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.ChecklistTemplateScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  operation_type: 'operation_type',
  agency_id: 'agency_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.CountryScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  flag: 'flag',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Document_productScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  abbreviation: 'abbreviation',
  description: 'description',
  packing_type: 'packing_type'
});

exports.Prisma.Document_shipperScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  cnpj: 'cnpj',
  complement: 'complement'
});

exports.Prisma.Group_emailsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  emails: 'emails',
  vessel_id: 'vessel_id',
  updated_by_user_id: 'updated_by_user_id'
});

exports.Prisma.InquiresScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  group: 'group',
  shipping_id: 'shipping_id',
  updated_by_user_id: 'updated_by_user_id',
  deleted: 'deleted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Inquires_commentsScalarFieldEnum = makeEnum({
  id: 'id',
  body: 'body',
  type: 'type',
  is_done: 'is_done',
  deadline_date: 'deadline_date',
  inquire_id: 'inquire_id',
  user_id: 'user_id',
  deleted: 'deleted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.MigrationsScalarFieldEnum = makeEnum({
  id: 'id',
  timestamp: 'timestamp',
  name: 'name'
});

exports.Prisma.Port_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  portId: 'portId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userId: 'userId'
});

exports.Prisma.PortsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  time_zone: 'time_zone',
  countryId: 'countryId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  slug: 'slug'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Proforma_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  proformaId: 'proformaId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.ProformasScalarFieldEnum = makeEnum({
  id: 'id',
  taxes: 'taxes',
  totalValue: 'totalValue',
  berthedHours: 'berthedHours',
  berthProductId: 'berthProductId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  idHash: 'idHash',
  applicantName: 'applicantName',
  applicantEmail: 'applicantEmail',
  vesselName: 'vesselName',
  imo: 'imo',
  deadWeightTonnage: 'deadWeightTonnage',
  lengthOverall: 'lengthOverall',
  grossTonnage: 'grossTonnage',
  package: 'package',
  builtYear: 'builtYear',
  agencyType: 'agencyType',
  operationType: 'operationType',
  productTonnage: 'productTonnage',
  usd: 'usd',
  isCargillInternational: 'isCargillInternational',
  beam: 'beam',
  etb: 'etb',
  draft: 'draft',
  requestingCustomer: 'requestingCustomer',
  vesselType: 'vesselType'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.ShippingChecklistItemScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  type: 'type',
  deadline_date: 'deadline_date',
  commentary: 'commentary',
  is_done: 'is_done',
  shipping_id: 'shipping_id',
  updated_by_user_id: 'updated_by_user_id',
  created_at: 'created_at',
  updated_ut: 'updated_ut',
  deleted_at: 'deleted_at'
});

exports.Prisma.ShippingPortScalarFieldEnum = makeEnum({
  id: 'id',
  estimated_time_of_arrival: 'estimated_time_of_arrival',
  estimated_time_of_berthing: 'estimated_time_of_berthing',
  estimated_time_of_sailing: 'estimated_time_of_sailing',
  time_of_arrival: 'time_of_arrival',
  time_of_berthing: 'time_of_berthing',
  time_of_sailing: 'time_of_sailing',
  shipping_id: 'shipping_id',
  port_id: 'port_id',
  berth_id: 'berth_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ShippingProductScalarFieldEnum = makeEnum({
  id: 'id',
  weight: 'weight',
  shipping_id: 'shipping_id',
  product_id: 'product_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.ShippingScalarFieldEnum = makeEnum({
  id: 'id',
  status: 'status',
  owner_head_name: 'owner_head_name',
  owner_head_address: 'owner_head_address',
  disponent_owner: 'disponent_owner',
  charter_name: 'charter_name',
  master_name: 'master_name',
  master_email: 'master_email',
  estimated_draft_arrival: 'estimated_draft_arrival',
  estimated_draft_departure: 'estimated_draft_departure',
  arrival_draft: 'arrival_draft',
  depart_draft: 'depart_draft',
  vessel_operator: 'vessel_operator',
  vessel_operator_email: 'vessel_operator_email',
  operation_type: 'operation_type',
  agency_type: 'agency_type',
  voyage_number: 'voyage_number',
  external_code: 'external_code',
  comments: 'comments',
  last_port: 'last_port',
  next_port: 'next_port',
  broker: 'broker',
  boat: 'boat',
  tugs: 'tugs',
  garbage: 'garbage',
  last_cargoes: 'last_cargoes',
  sscec_port: 'sscec_port',
  sscec_exp: 'sscec_exp',
  in_marsat_c_number: 'in_marsat_c_number',
  master_phone_01: 'master_phone_01',
  master_phone_02: 'master_phone_02',
  vessel_expert: 'vessel_expert',
  vessel_expert_phone01: 'vessel_expert_phone01',
  vessel_expert_phone02: 'vessel_expert_phone02',
  vessel_expert_alternate: 'vessel_expert_alternate',
  vessel_expert_alternate_phone01: 'vessel_expert_alternate_phone01',
  vessel_expert_alternate_phone02: 'vessel_expert_alternate_phone02',
  vessel_operator_phone01: 'vessel_operator_phone01',
  vessel_operator_phone02: 'vessel_operator_phone02',
  vessel_operator_city_country: 'vessel_operator_city_country',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  vessel_id: 'vessel_id',
  user_id: 'user_id',
  total_load_expected: 'total_load_expected',
  total_load_actual: 'total_load_actual',
  port_operator: 'port_operator'
});

exports.Prisma.ShippingSofPortLogEventsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  commentary: 'commentary',
  is_important: 'is_important',
  is_highlighted: 'is_highlighted',
  start_date: 'start_date',
  end_date: 'end_date',
  sof_port_log_event_id: 'sof_port_log_event_id',
  shipping_sof_id: 'shipping_sof_id',
  created_by_user_id: 'created_by_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Shipping_documentsScalarFieldEnum = makeEnum({
  id: 'id',
  type: 'type',
  document_number: 'document_number',
  consignee: 'consignee',
  vessel_name: 'vessel_name',
  port_of_loading: 'port_of_loading',
  port_of_discharge: 'port_of_discharge',
  notify: 'notify',
  product_name_extra_info: 'product_name_extra_info',
  product_weight_extra_info: 'product_weight_extra_info',
  freight_type: 'freight_type',
  charter_party_date: 'charter_party_date',
  ship_boarded_date: 'ship_boarded_date',
  issue_place_date: 'issue_place_date',
  number_of_original_bill_of_landing: 'number_of_original_bill_of_landing',
  shipper_id: 'shipper_id',
  product_id: 'product_id',
  master_name: 'master_name',
  signature: 'signature',
  shipping_id: 'shipping_id',
  user_id: 'user_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  order: 'order',
  subset_id: 'subset_id',
  product_gross_weight: 'product_gross_weight',
  product_net_weight: 'product_net_weight',
  product_quantity: 'product_quantity',
  product_packing: 'product_packing'
});

exports.Prisma.Shipping_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  shippingId: 'shippingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userId: 'userId'
});

exports.Prisma.SofPortLogEventCategoriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.SofPortLogEventsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  category_id: 'category_id'
});

exports.Prisma.SofScalarFieldEnum = makeEnum({
  id: 'id',
  hidden_attributes: 'hidden_attributes',
  shipping_id: 'shipping_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_bunker_figuresScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  ifo: 'ifo',
  mdo: 'mdo',
  fw: 'fw',
  sof_id: 'sof_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_draftScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  fwd: 'fwd',
  mid: 'mid',
  aft: 'aft',
  sof_id: 'sof_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_holidaysScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  date: 'date',
  sof_id: 'sof_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_remarksScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  sof_id: 'sof_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_remarks_itemsScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  value: 'value',
  is_single: 'is_single',
  sof_remark_id: 'sof_remark_id',
  deleted: 'deleted',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_shipperScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  quantity: 'quantity',
  sof_shipper_cargo_id: 'sof_shipper_cargo_id'
});

exports.Prisma.Sof_shipper_cargoScalarFieldEnum = makeEnum({
  id: 'id',
  berth: 'berth',
  cargo: 'cargo',
  sof_id: 'sof_id',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
});

exports.Prisma.Sof_shipper_valueScalarFieldEnum = makeEnum({
  id: 'id',
  value: 'value',
  sof_shipper_cargo_id: 'sof_shipper_cargo_id'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.SubsetsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  shippingId: 'shippingId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.User_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  userId: 'userId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.UsersScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  agencyId: 'agencyId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt'
});

exports.Prisma.Users_preferenceScalarFieldEnum = makeEnum({
  id: 'id',
  team: 'team',
  ports: 'ports',
  initial_page: 'initial_page',
  user_id: 'user_id'
});

exports.Prisma.VesselScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  imo: 'imo',
  call_sign: 'call_sign',
  satellite_telephone: 'satellite_telephone',
  classification_society: 'classification_society',
  type: 'type',
  length_overall: 'length_overall',
  dead_weight_tonnage: 'dead_weight_tonnage',
  beam: 'beam',
  cubic_meters: 'cubic_meters',
  gross_tonnage: 'gross_tonnage',
  net_tonnage: 'net_tonnage',
  panama_gross_tonnage: 'panama_gross_tonnage',
  panama_net_tonnage: 'panama_net_tonnage',
  suez_gross_tonnage: 'suez_gross_tonnage',
  suez_net_tonnage: 'suez_net_tonnage',
  reduced_gross_tonnage: 'reduced_gross_tonnage',
  length_between_perpendiculars: 'length_between_perpendiculars',
  molded_depth: 'molded_depth',
  number_of_holds: 'number_of_holds',
  number_of_tanks: 'number_of_tanks',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at',
  country_id: 'country_id',
  draft_sw: 'draft_sw',
  built_year: 'built_year'
});

exports.Prisma.Vessel_filesScalarFieldEnum = makeEnum({
  id: 'id',
  title: 'title',
  filename: 'filename',
  originalName: 'originalName',
  vessel_id: 'vessel_id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  deletedAt: 'deletedAt',
  userId: 'userId'
});


exports.Prisma.ModelName = makeEnum({
  Agency: 'Agency',
  berth_products: 'berth_products',
  berths: 'berths',
  ChecklistTemplate: 'ChecklistTemplate',
  ChecklistTemplateItem: 'ChecklistTemplateItem',
  ShippingChecklistItem: 'ShippingChecklistItem',
  Country: 'Country',
  migrations: 'migrations',
  port_files: 'port_files',
  ports: 'ports',
  products: 'products',
  proforma_files: 'proforma_files',
  proformas: 'proformas',
  shipping_documents: 'shipping_documents',
  document_shipper: 'document_shipper',
  document_product: 'document_product',
  shipping_files: 'shipping_files',
  ShippingPort: 'ShippingPort',
  ShippingProduct: 'ShippingProduct',
  Shipping: 'Shipping',
  subsets: 'subsets',
  user_files: 'user_files',
  users: 'users',
  users_preference: 'users_preference',
  vessel_files: 'vessel_files',
  Vessel: 'Vessel',
  inquires: 'inquires',
  inquires_comments: 'inquires_comments',
  group_emails: 'group_emails',
  sof: 'sof',
  sof_holidays: 'sof_holidays',
  sof_remarks: 'sof_remarks',
  sof_remarks_items: 'sof_remarks_items',
  sof_draft: 'sof_draft',
  sof_bunker_figures: 'sof_bunker_figures',
  SofPortLogEventCategories: 'SofPortLogEventCategories',
  SofPortLogEvents: 'SofPortLogEvents',
  ShippingSofPortLogEvents: 'ShippingSofPortLogEvents',
  sof_shipper_cargo: 'sof_shipper_cargo',
  sof_shipper: 'sof_shipper',
  sof_shipper_value: 'sof_shipper_value'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
